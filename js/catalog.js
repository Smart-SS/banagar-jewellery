/* =============================================
   ANIL GOLD — Catalogue JavaScript
   ============================================= */

// Live rates (Hyderabad, Aug 4 2026)
const RATES = { '24K': 14400, '22K': 13200, '18K': 10800 };

// ===== LOCAL IMAGE MAP =====
// Maps item id → local image path
const LOCAL_IMAGES = {
  // Rings
  r1: 'Images/gold-rings/lucid-origin_Professional_product_photography_of_a_single_Indian_gold_ring_Kundan_style_craft-0.jpg',
  r2: 'Images/gold-rings/lucid-origin_Professional_product_photography_of_a_single_Indian_gold_ring_solitaire_style_cr-0.jpg',
  r3: 'Images/gold-rings/lucid-origin_Professional_product_photography_of_a_single_Indian_gold_ring_temple_jewelry_sty-0.jpg',
  // Bracelets
  b1: 'Images/Braclets/lucid-origin_Professional_product_photography_of_a_single_men_s_gold_bracelet_chunky_curb-cha-0.jpg',
  b2: 'Images/Braclets/lucid-origin_Professional_product_photography_of_a_single_men_s_gold_bracelet_cuff-style_kada-0.jpg',
  b3: 'Images/Braclets/lucid-origin_Professional_product_photography_of_a_single_men_s_gold_bracelet_wheat-chain_sty-0.jpg',
  // Bangles
  bg1: 'Images/gold_bangles/lucid-origin_Professional_product_photography_of_a_single_Indian_gold_bangle_Kundan_style_cra-0.jpg',
  bg2: 'Images/gold_bangles/lucid-origin_Professional_product_photography_of_a_single_Indian_gold_bangle_South_Indian_tra-0.jpg',
  bg3: 'Images/gold_bangles/lucid-origin_Professional_product_photography_of_a_single_Indian_gold_bangle_antique_finish_s-0.jpg',
  bg4: 'Images/gold_bangles/lucid-origin_Professional_product_photography_of_a_single_Indian_gold_bangle_filigree_style_c-0.jpg',
  bg5: 'Images/gold_bangles/lucid-origin_Professional_product_photography_of_a_single_Indian_gold_bangle_temple_jewelry_s-0.jpg',
};

// Unused placeholder — kept so no reference errors if config.js loaded
const IMAGE_QUERIES = {
  // Rings
  r1: 'gold plain band ring',        r2: 'gold floral ring',
  r3: 'diamond solitaire ring',      r4: 'antique gold ring',
  r5: 'gold wedding bands couple',   r6: 'traditional indian gold ring',
  r7: 'gold eternity ring',          r8: 'gold thumb ring',
  // Chains
  c1: 'gold box chain necklace',     c2: 'gold rope chain',
  c3: 'gold figaro chain',           c4: 'gold singapore chain',
  c5: 'gold cable chain',            c6: 'gold herringbone chain',
  c7: 'gold anchor chain mens',      c8: 'gold franco chain',
  // Necklaces
  n1: 'indian gold haram necklace',  n2: 'gold choker necklace',
  n3: 'gold lakshmi coin necklace',  n4: 'gold pearl drop necklace',
  n5: 'layered gold necklace',       n6: 'temple gold jewellery necklace',
  n7: 'modern gold pendant necklace',n8: 'kundan gold necklace',
  // Earrings
  e1: 'gold stud earrings',          e2: 'gold jhumka earrings',
  e3: 'chandbali gold earrings',     e4: 'gold hoop earrings',
  e5: 'gold ear cuff',               e6: 'gold dangle drop earrings',
  e7: 'temple gold earrings',        e8: 'gold baali earrings',
  // Bracelets
  b1: 'gold tennis bracelet',        b2: 'gold link bracelet',
  b3: 'gold charm bracelet',         b4: 'gold snake bracelet',
  b5: 'gold rope bracelet',          b6: 'gold id bracelet',
  // Bangles
  bg1: 'gold plain bangles pair',    bg2: 'gold kada bangle',
  bg3: 'gold filigree bangle',       bg4: 'gold hinged bangle',
  bg5: 'bridal gold bangle',         bg6: 'thin gold bangles stack',
  // Pendants
  p1: 'gold om pendant',             p2: 'gold ganesha pendant',
  p3: 'gold cross pendant',          p4: 'gold heart pendant',
  p5: 'gold name pendant',           p6: 'gold rudraksha pendant',
  p7: 'evil eye gold pendant',
  // Anklets
  a1: 'gold anklet',                 a2: 'gold ghungroo anklet',
  a3: 'ornate gold anklet',          a4: 'gold beaded anklet',
  a5: 'gold payal anklet pair',
  // Bridal Sets
  s1: 'indian bridal gold jewellery set', s2: 'gold necklace earring set',
  s3: 'temple jewellery set',        s4: 'kundan bridal jewellery set',
  s5: 'simple gold jewellery set',
  // Nose Pins
  np1: 'gold nose pin',              np2: 'gold nose pin stone',
  np3: 'gold nath nose ring bridal', np4: 'gold floral nose pin',
  // Mens
  m1: 'mens gold kada bracelet',     m2: 'mens gold chain thick',
  m3: 'mens gold signet ring',       m4: 'mens gold om ring',
  m5: 'mens gold curb bracelet',     m6: 'tiger nail gold charm',
};

// ===== GET IMAGE FOR ITEM =====
// Returns local path if available, otherwise null (emoji fallback)
function getItemImage(itemId) {
  return LOCAL_IMAGES[itemId] || null;
}

// No-op stubs — Pexels not used anymore
function fetchImage() { return Promise.resolve(null); }
function loadImagesForVisible() {}

// ===== REFRESH ALL CARD IMAGES =====
// No-op — images are loaded inline from LOCAL_IMAGES
function loadImagesForVisible() {}

// ===== JEWELLERY CATALOGUE (Local images only) =====
const catalogItems = [

  // ── RINGS ──────────────────────────────────────
  { id: 'r1', cat: 'rings', name: 'Kundan Style Ring',
    emoji: '💍', desc: 'Ornate Kundan-style gold ring with intricate stone setting and traditional Indian craftsmanship.',
    karat: '22K', weightFrom: 4, weightTo: 8, badge: 'Popular', tags: ['kundan','traditional','stone'], popular: true },

  { id: 'r2', cat: 'rings', name: 'Solitaire Style Ring',
    emoji: '💎', desc: 'Classic solitaire-style gold ring with elegant prong setting. Perfect for engagements.',
    karat: '18K', weightFrom: 3, weightTo: 6, badge: null, tags: ['solitaire','engagement','modern'], popular: true },

  { id: 'r3', cat: 'rings', name: 'Temple Jewellery Ring',
    emoji: '🛕', desc: 'Traditional temple jewellery ring with deity motifs and antique gold finish.',
    karat: '22K', weightFrom: 4, weightTo: 7, badge: null, tags: ['temple','antique','deity'], popular: false },

  // ── BRACELETS ──────────────────────────────────
  { id: 'b1', cat: 'bracelets', name: 'Chunky Curb Chain Bracelet',
    emoji: '⛓️', desc: 'Bold chunky curb-chain gold bracelet for men. Heavy-duty links with diamond-cut finish.',
    karat: '22K', weightFrom: 15, weightTo: 30, badge: 'Popular', tags: ['curb','chunky','mens','bold'], popular: true },

  { id: 'b2', cat: 'bracelets', name: 'Cuff Style Kada Bracelet',
    emoji: '💪', desc: 'Wide cuff-style gold kada. Broad flat design with smooth finish — easy to wear.',
    karat: '22K', weightFrom: 18, weightTo: 35, badge: null, tags: ['cuff','kada','mens','wide'], popular: false },

  { id: 'b3', cat: 'bracelets', name: 'Wheat Chain Bracelet',
    emoji: '🌾', desc: 'Classic wheat-chain style gold bracelet. Lightweight and flexible — suits all occasions.',
    karat: '22K', weightFrom: 8, weightTo: 18, badge: null, tags: ['wheat','chain','classic','lightweight'], popular: false },

  // ── BANGLES ────────────────────────────────────
  { id: 'bg1', cat: 'bangles', name: 'Kundan Style Bangle',
    emoji: '🟡', desc: 'Exquisite Kundan-set gold bangle with colourful stone inlay work. Statement piece.',
    karat: '22K', weightFrom: 15, weightTo: 30, badge: 'Popular', tags: ['kundan','stone','statement'], popular: true },

  { id: 'bg2', cat: 'bangles', name: 'South Indian Traditional Bangle',
    emoji: '🔶', desc: 'Classic South Indian gold bangle with temple border and fine granulation work.',
    karat: '22K', weightFrom: 18, weightTo: 35, badge: null, tags: ['south indian','temple','traditional'], popular: true },

  { id: 'bg3', cat: 'bangles', name: 'Antique Finish Bangle',
    emoji: '🏺', desc: 'Oxidised antique gold bangle with hand-carved floral motifs. Vintage elegance.',
    karat: '22K', weightFrom: 16, weightTo: 28, badge: null, tags: ['antique','oxidised','floral','carved'], popular: false },

  { id: 'bg4', cat: 'bangles', name: 'Filigree Style Bangle',
    emoji: '🌸', desc: 'Delicate filigree (jaali) gold bangle with intricate lace-like patterns. Lightweight.',
    karat: '22K', weightFrom: 12, weightTo: 22, badge: null, tags: ['filigree','jaali','delicate','light'], popular: false },

  { id: 'bg5', cat: 'bangles', name: 'Temple Jewellery Bangle',
    emoji: '🛕', desc: 'Classic temple jewellery bangle with deity carvings and ruby-style stone accents. Bridal.',
    karat: '22K', weightFrom: 20, weightTo: 40, badge: 'Bridal', tags: ['temple','deity','ruby','bridal'], popular: true },
];

// ===== STATE =====
let currentCat    = 'all';
let currentSearch = '';
let currentSort   = 'default';
let wishlist      = new Set();
let activeItem    = null;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  updateTabCounts();
  renderCatalog();
  initScrollAnimations();
  initScrollTop();
});

// ===== TAB COUNTS =====
function updateTabCounts() {
  const cats = ['all','rings','bracelets','bangles'];
  cats.forEach(cat => {
    const el = document.getElementById('count-' + cat);
    if (!el) return;
    const count = cat === 'all' ? catalogItems.length : catalogItems.filter(i => i.cat === cat).length;
    el.textContent = count;
  });
}

// ===== FILTER =====
function filterCatalog(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCatalog();
}

// ===== SEARCH =====
function searchCatalog() {
  const input = document.getElementById('searchInput');
  currentSearch = input.value.toLowerCase().trim();
  document.getElementById('searchClear').style.display = currentSearch ? 'block' : 'none';
  renderCatalog();
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').style.display = 'none';
  currentSearch = '';
  renderCatalog();
}

// ===== SORT =====
function sortCatalog(val) {
  currentSort = val;
  renderCatalog();
}

// ===== GET FILTERED + SORTED ITEMS =====
function getFilteredItems() {
  let items = [...catalogItems];

  // Category filter
  if (currentCat !== 'all') {
    items = items.filter(i => i.cat === currentCat);
  }

  // Search filter
  if (currentSearch) {
    items = items.filter(i =>
      i.name.toLowerCase().includes(currentSearch) ||
      i.desc.toLowerCase().includes(currentSearch) ||
      i.tags.some(t => t.includes(currentSearch)) ||
      i.cat.includes(currentSearch)
    );
  }

  // Sort
  switch (currentSort) {
    case 'name':         items.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'weight-low':   items.sort((a, b) => a.weightFrom - b.weightFrom); break;
    case 'weight-high':  items.sort((a, b) => b.weightFrom - a.weightFrom); break;
    case 'popular':      items.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)); break;
  }

  return items;
}

// ===== CALC PRICE =====
function calcPrice(item) {
  const rate = RATES[item.karat] || RATES['22K'];
  const low  = Math.round(item.weightFrom * rate).toLocaleString('en-IN');
  return `₹${low}+`;
}

// ===== RENDER CATALOG =====
function renderCatalog() {
  const grid     = document.getElementById('catalogGrid');
  const empty    = document.getElementById('emptyState');
  const countEl  = document.getElementById('resultCount');
  const items    = getFilteredItems();

  countEl.textContent = `Showing ${items.length} item${items.length !== 1 ? 's' : ''}`;

  if (items.length === 0) {
    grid.innerHTML  = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';

  grid.innerHTML = items.map((item, idx) => {
    const price    = calcPrice(item);
    const badgeHTML = item.badge ? `<div class="cat-badge ${getBadgeClass(item.badge)}">${item.badge}</div>` : '';
    const wishActive = wishlist.has(item.id) ? 'active' : '';
    const specs = getSpecs(item);
    const localImg = LOCAL_IMAGES[item.id] || null;

    return `
      <div class="catalog-card fade-in" data-id="${item.id}" style="animation-delay:${idx * 40}ms">
        <div class="catalog-img cat-bg-${item.cat}" onclick="openLightbox('${item.id}', event)">
          ${localImg
            ? `<img class="catalog-real-img loaded" src="${localImg}" alt="${item.name}" />`
            : `<div class="catalog-img-inner">${item.emoji}</div>`
          }
          ${badgeHTML}
          <button class="wishlist-btn ${wishActive}" onclick="toggleWishlist(event, '${item.id}')" title="Add to Wishlist">
            <i class="fa${wishlist.has(item.id) ? 's' : 'r'} fa-heart"></i>
          </button>
          <div class="catalog-zoom-hint"><i class="fas fa-search-plus"></i><span>View Details</span></div>
        </div>
        <div class="catalog-body">
          <div class="catalog-cat-label">
            <i class="fas fa-circle" style="font-size:5px;"></i> ${getCatLabel(item.cat)} · ${item.karat}
          </div>
          <div class="catalog-name">${item.name}</div>
          <div class="catalog-desc">${item.desc}</div>
          <div class="catalog-specs">
            ${specs.map(s => `<span class="spec-tag">${s}</span>`).join('')}
          </div>
          <div class="catalog-footer">
            <div>
              <div class="catalog-price-from">Starting from</div>
              <div class="catalog-price">${price}</div>
              <div class="catalog-price-note">excl. making + GST</div>
            </div>
            <button class="catalog-order-btn" onclick="openOrderModal('${item.id}')">
              <i class="fas fa-paper-plane"></i> Order
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Animate cards in
  document.querySelectorAll('.catalog-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 35);
  });

  // Load real images from Pexels after render
  loadImagesForVisible();
}

function getBadgeClass(badge) {
  if (badge === 'New')    return 'cat-badge-new';
  if (badge === 'Bridal') return 'cat-badge-bridal';
  return '';
}

function getCatLabel(cat) {
  const map = {
    rings: 'Rings', chains: 'Chains', necklaces: 'Necklaces',
    earrings: 'Earrings', bracelets: 'Bracelets', bangles: 'Bangles',
    pendants: 'Pendants', anklets: 'Anklets', sets: 'Bridal Sets',
    nosepins: 'Nose Pins', mens: "Men's"
  };
  return map[cat] || cat;
}

function getSpecs(item) {
  const specs = [];
  specs.push(item.karat);
  if (item.weightFrom < 1) {
    specs.push(`${item.weightFrom}–${item.weightTo}g`);
  } else {
    specs.push(`${item.weightFrom}–${item.weightTo}g`);
  }
  if (item.popular) specs.push('⭐ Popular');
  return specs;
}

// ===== WISHLIST =====
function toggleWishlist(e, id) {
  e.stopPropagation();
  if (wishlist.has(id)) {
    wishlist.delete(id);
    showToast('💔 Removed from wishlist');
  } else {
    wishlist.add(id);
    showToast('❤️ Added to wishlist!');
  }
  renderCatalog();
}

// ===== LIGHTBOX =====
let lightboxItems  = [];
let lightboxIndex  = 0;

function openLightbox(id, e) {
  if (e) e.stopPropagation();
  const filtered = getFilteredItems();
  lightboxItems  = filtered;
  lightboxIndex  = filtered.findIndex(i => i.id === id);
  showLightboxItem(lightboxIndex);
  document.getElementById('lightboxOverlay').classList.add('open');
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showLightboxItem(idx) {
  const item   = lightboxItems[idx];
  if (!item) return;
  lightboxIndex = idx;

  const imgEl   = document.getElementById('lightboxImg');
  const spinner = document.getElementById('lightboxSpinner');

  imgEl.classList.remove('loaded');
  spinner.style.display = 'block';

  // Use local image if available
  const src = LOCAL_IMAGES[item.id] || null;
  if (src) {
    imgEl.src = src;
    imgEl.onload = () => { spinner.style.display = 'none'; imgEl.classList.add('loaded'); };
    imgEl.onerror = () => { spinner.style.display = 'none'; };
  } else {
    imgEl.src = '';
    spinner.style.display = 'none';
  }

  // Populate info panel
  const catLabel = document.getElementById('lbCatLabel');
  if (catLabel) catLabel.textContent = getCatLabel(item.cat);

  const lbTitle = document.getElementById('lbTitle');
  if (lbTitle) lbTitle.textContent = item.emoji + ' ' + item.name;

  const lbDesc = document.getElementById('lbDesc');
  if (lbDesc) lbDesc.textContent = item.desc || '';

  const lbSpecs = document.getElementById('lbSpecs');
  if (lbSpecs) lbSpecs.innerHTML = `
    <div class="lightbox-spec-row">
      <span class="lightbox-spec-label">Purity</span>
      <span class="lightbox-spec-value">${item.karat}</span>
    </div>
    <div class="lightbox-spec-row">
      <span class="lightbox-spec-label">Weight Range</span>
      <span class="lightbox-spec-value">${item.weightFrom}g – ${item.weightTo}g</span>
    </div>
    <div class="lightbox-spec-row">
      <span class="lightbox-spec-label">Category</span>
      <span class="lightbox-spec-value">${getCatLabel(item.cat)}</span>
    </div>
    <div class="lightbox-spec-row">
      <span class="lightbox-spec-label">Hallmark</span>
      <span class="lightbox-spec-value">BIS Certified</span>
    </div>
  `;

  const lbPrice = document.getElementById('lbPrice');
  if (lbPrice) lbPrice.textContent = calcPrice(item);

  document.getElementById('lightboxOrder').setAttribute('data-id', item.id);

  // Prev / next button visibility
  document.getElementById('lightboxPrev').style.opacity = idx > 0 ? '1' : '0.25';
  document.getElementById('lightboxNext').style.opacity = idx < lightboxItems.length - 1 ? '1' : '0.25';
}

function lightboxNav(dir) {
  const newIdx = lightboxIndex + dir;
  if (newIdx >= 0 && newIdx < lightboxItems.length) showLightboxItem(newIdx);
}

function lightboxPlaceOrder() {
  const id = document.getElementById('lightboxOrder').getAttribute('data-id');
  closeLightbox();
  setTimeout(() => openOrderModal(id), 200);
}

function closeLightbox() {
  document.getElementById('lightboxOverlay').classList.remove('open');
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// Keyboard navigation
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'ArrowRight') lightboxNav(1);
  if (e.key === 'ArrowLeft')  lightboxNav(-1);
  if (e.key === 'Escape')     closeLightbox();
});

// ===== ORDER MODAL =====
function openOrderModal(id) {
  activeItem = catalogItems.find(i => i.id === id);
  if (!activeItem) return;

  document.getElementById('modalTitle').textContent = `Order — ${activeItem.name}`;
  document.getElementById('modalProduct').innerHTML = `
    <div class="modal-product-emoji">${activeItem.emoji}</div>
    <div class="modal-product-info">
      <h4>${activeItem.name}</h4>
      <p>${getCatLabel(activeItem.cat)} · ${activeItem.karat} · ${activeItem.weightFrom}–${activeItem.weightTo}g<br>
      <span style="color:var(--gold)">Est. starting: ${calcPrice(activeItem)} (excl. making + GST)</span></p>
    </div>
  `;

  // Reset form
  document.getElementById('orderForm').style.display = 'block';
  document.getElementById('orderSuccess').style.display = 'none';
  document.getElementById('orderForm').reset();

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('orderModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('orderModal').classList.remove('open');
  document.body.style.overflow = '';
  activeItem = null;
}

// ===== SUBMIT ORDER =====
function submitOrder(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('orderSuccess').style.display = 'block';
    showToast(`📅 Order placed for ${activeItem?.name}! Anil will call you shortly.`);
  }, 1500);
}
