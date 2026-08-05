#!/usr/bin/env bash
# ================================================================
#  Banagar Jewellery — AWS SAM Deploy Script
#  Usage:
#    ./deploy.sh              → deploys to prod
#    ./deploy.sh staging      → deploys to staging
# ================================================================
set -euo pipefail

ENV="${1:-prod}"
STACK_NAME="banagar-jewellery-${ENV}"
REGION="${AWS_REGION:-ap-south-1}"   # Mumbai — closest to Hyderabad
SAM_BUCKET="${STACK_NAME}-sam-artifacts"

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   Banagar Jewellery — AWS SAM Deploy     ║"
echo "║   Environment : ${ENV}                   "
echo "║   Region      : ${REGION}                "
echo "║   Stack       : ${STACK_NAME}            "
echo "╚══════════════════════════════════════════╝"
echo ""

# ── 1. Ensure SAM artifact bucket exists ──────────────────────────
echo "▶  Ensuring SAM artifact bucket exists..."
aws s3 mb "s3://${SAM_BUCKET}" --region "${REGION}" 2>/dev/null || true
aws s3api put-bucket-versioning \
  --bucket "${SAM_BUCKET}" \
  --versioning-configuration Status=Enabled \
  --region "${REGION}" 2>/dev/null || true

# ── 2. SAM build ──────────────────────────────────────────────────
echo "▶  Running sam build..."
sam build --template template.yaml

# ── 3. SAM deploy ─────────────────────────────────────────────────
echo "▶  Running sam deploy..."
sam deploy \
  --template-file .aws-sam/build/template.yaml \
  --stack-name "${STACK_NAME}" \
  --s3-bucket "${SAM_BUCKET}" \
  --region "${REGION}" \
  --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
  --parameter-overrides Environment="${ENV}" \
  --no-fail-on-empty-changeset

# ── 4. Get stack outputs ──────────────────────────────────────────
echo ""
echo "▶  Fetching stack outputs..."
BUCKET_NAME=$(aws cloudformation describe-stacks \
  --stack-name "${STACK_NAME}" \
  --region "${REGION}" \
  --query "Stacks[0].Outputs[?OutputKey=='WebsiteBucketName'].OutputValue" \
  --output text)

CF_URL=$(aws cloudformation describe-stacks \
  --stack-name "${STACK_NAME}" \
  --region "${REGION}" \
  --query "Stacks[0].Outputs[?OutputKey=='CloudFrontURL'].OutputValue" \
  --output text)

CF_DIST_ID=$(aws cloudformation describe-stacks \
  --stack-name "${STACK_NAME}" \
  --region "${REGION}" \
  --query "Stacks[0].Outputs[?OutputKey=='CloudFrontDistributionId'].OutputValue" \
  --output text)

echo "   Bucket  : ${BUCKET_NAME}"
echo "   CF URL  : ${CF_URL}"
echo "   CF ID   : ${CF_DIST_ID}"

# ── 5. Sync site files to S3 ─────────────────────────────────────
echo ""
echo "▶  Syncing site files to S3..."
aws s3 sync . "s3://${BUCKET_NAME}" \
  --region "${REGION}" \
  --exclude ".git/*" \
  --exclude ".github/*" \
  --exclude ".aws-sam/*" \
  --exclude "node_modules/*" \
  --exclude "deploy.sh" \
  --exclude "template.yaml" \
  --exclude "samconfig.toml" \
  --exclude "*.md" \
  --exclude ".gitignore" \
  --exclude ".DS_Store" \
  --exclude "*.sh" \
  --delete \
  --cache-control "max-age=86400" \
  --content-type "text/html" \
  --include "*.html"

# Re-sync with correct cache headers per file type
aws s3 sync . "s3://${BUCKET_NAME}" \
  --region "${REGION}" \
  --exclude "*" \
  --include "css/*" \
  --include "js/*" \
  --cache-control "max-age=604800, public" \
  --delete

aws s3 sync . "s3://${BUCKET_NAME}" \
  --region "${REGION}" \
  --exclude "*" \
  --include "images/*" \
  --cache-control "max-age=2592000, public" \
  --delete

# ── 6. CloudFront invalidation ────────────────────────────────────
echo ""
echo "▶  Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "${CF_DIST_ID}" \
  --paths "/*" \
  --region "${REGION}" > /dev/null

echo ""
echo "══════════════════════════════════════════"
echo "✅  Deploy complete!"
echo "🌐  ${CF_URL}"
echo "══════════════════════════════════════════"
echo ""
