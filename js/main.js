/* =============================================
   ANIL GOLD — Main JavaScript
   ============================================= */

// ===== SERVICES DATA =====
const products = [
  // Gold Appraisal
  { id: 1, name: 'BOI Gold Loan Appraisal', category: 'appraisal', emoji: '🏦', purity: 'All Karats', weight: 'Any quantity', price: 'Call for fee', badge: 'Bank Certified', rating: 5.0, reviews: 412 },
  { id: 2, name: 'Insurance Valuation', category: 'appraisal', emoji: '�', purity: 'All Karats', weight: 'Any quantity', price: 'Call for fee', badge: 'Official Cert.', rating: 4.9, reviews: 189 },
  { id: 3, name: 'Legal / Court Valuation', category: 'appraisal', emoji: '⚖️', purity: 'All Karats', weight: 'Any quantity', price: 'Call for fee', badge: null, rating: 4.9, reviews: 98 },
  { id: 4, name: 'Purity & Weight Testing', category: 'appraisal', emoji: '�', purity: 'XRF Analysis', weight: 'Per item', price: 'Call for fee', badge: 'Accurate', rating: 4.8, reviews: 276 },
  // Custom Crafting
  { id: 5, name: 'Custom Necklace / Haram', category: 'crafting', emoji: '📿', purity: '22K / 18K', weight: 'As per design', price: 'Quote on design', badge: 'Handcrafted', rating: 5.0, reviews: 234 },
  { id: 6, name: 'Bridal Jewellery Set', category: 'crafting', emoji: '👑', purity: '22K / 916', weight: 'As per design', price: 'Quote on design', badge: 'Bridal', rating: 5.0, reviews: 167 },
  { id: 7, name: 'Custom Ring / Band', category: 'crafting', emoji: '�', purity: '22K / 18K', weight: 'As per design', price: 'Quote on design', badge: null, rating: 4.9, reviews: 198 },
  { id: 8, name: 'Bangles & Kadas', category: 'crafting', emoji: '�', purity: '22K / 916', weight: 'As per design', price: 'Quote on design', badge: 'Popular', rating: 4.8, reviews: 143 },
  { id: 9, name: 'Earrings & Jhumkas', category: 'crafting', emoji: '✨', purity: '22K / 18K', weight: 'As per design', price: 'Quote on design', badge: null, rating: 4.9, reviews: 211 },
  // Repair & Restore
  { id: 10, name: 'Chain / Necklace Repair', category: 'repair', emoji: '⛓️', purity: 'Matching alloy', weight: 'Per item', price: 'From ₹200', badge: 'Quick Turnaround', rating: 4.9, reviews: 389 },
  { id: 11, name: 'Ring Sizing & Repair', category: 'repair', emoji: '�', purity: 'Matching alloy', weight: 'Per item', price: 'From ₹300', badge: null, rating: 4.8, reviews: 254 },
  { id: 12, name: 'Jewellery Polishing', category: 'repair', emoji: '✨', purity: 'All metals', weight: 'Per item', price: 'From ₹150', badge: 'Like New', rating: 4.7, reviews: 178 },
  { id: 13, name: 'Old Jewellery Redesign', category: 'repair', emoji: '🔄', purity: 'Reuse your gold', weight: 'As available', price: 'Quote on design', badge: 'Eco Friendly', rating: 5.0, reviews: 132 },
  // Hallmarking
  { id: 14, name: 'BIS Hallmark Assistance', category: 'hallmark', emoji: '🏅', purity: 'All Karats', weight: 'Per piece', price: 'Govt. fee + service', badge: 'Govt. Centre', rating: 4.9, reviews: 167 },
  { id: 15, name: 'Hallmark Verification', category: 'hallmark', emoji: '🔍', purity: 'Existing pieces', weight: 'Per item', price: 'Call for fee', badge: null, rating: 4.8, reviews: 94 },
  // Old Gold Exchange
  { id: 16, name: 'Old Gold to New Design', category: 'exchange', emoji: '�', purity: 'Your gold reused', weight: 'As available', price: 'Melting charge only', badge: 'Fair Rate', rating: 4.9, reviews: 287 },
  { id: 17, name: 'Old Jewellery Buyback', category: 'exchange', emoji: '�', purity: 'Tested on spot', weight: 'Any quantity', price: 'Market rate −1.5%', badge: 'Instant Cash', rating: 4.8, reviews: 203 },
  { id: 18, name: 'Scrap Gold Purchase', category: 'exchange', emoji: '⚡', purity: 'All Karats', weight: 'Any quantity', price: 'Best market rate', badge: null, rating: 4.7, reviews: 115 },
];

// ===== TICKER DATA =====
const tickerData = [
  { name: 'Gold 24K', price: '₹14,400/g', change: '-0.15%', up: false },
  { name: 'Gold 22K', price: '₹13,200/g', change: '-0.15%', up: false },
  { name: 'Gold 18K', price: '₹10,800/g', change: '-0.15%', up: false },
  { name: 'Silver', price: '₹235/g', change: '-0.09%', up: false },
  { name: 'Gold Bar 10g', price: '₹1,44,000', change: '-0.15%', up: false },
  { name: 'Gold Coin 5g', price: '₹74,160', change: '-0.15%', up: false },
  { name: 'Silver Bar 100g', price: '₹23,500', change: '-0.09%', up: false },
  { name: 'MCX Gold (Hyd)', price: '₹14,400/g', change: '4 Aug 2026', up: false },
];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initParticles();
  initTicker();
  initFeaturedProducts();
  initAllProducts();
  initScrollAnimations();
  initScrollTop();
});

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('open');
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks')?.classList.remove('open');
  });
});

// ===== PARTICLES =====
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 6 + 's';
    p.style.animationDuration = (4 + Math.random() * 4) + 's';
    p.style.width = (Math.random() * 3 + 1) + 'px';
    p.style.height = p.style.width;
    container.appendChild(p);
  }
}

// ===== TICKER =====
function initTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  // Duplicate for seamless loop
  const allItems = [...tickerData, ...tickerData];
  track.innerHTML = allItems.map(item => `
    <div class="ticker-item">
      <span class="name">${item.name}</span>
      <span class="price">${item.price}</span>
      <span class="${item.up ? 'up' : 'down'}">${item.up ? '▲' : '▼'} ${item.change}</span>
    </div>
  `).join('');
}

// ===== FEATURED PRODUCTS (Homepage) =====
function initFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;
  const featured = products.slice(0, 8);
  container.innerHTML = featured.map(p => renderProductCard(p)).join('');
}

// ===== ALL PRODUCTS (Products Page) =====
let currentFilter = 'all';

function initAllProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;
  renderFilteredProducts('all');
}

function filterProducts(filter, btn) {
  currentFilter = filter;
  // Update button states
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderFilteredProducts(filter);
}

function renderFilteredProducts(filter) {
  const container = document.getElementById('productsGrid');
  if (!container) return;
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  container.innerHTML = filtered.map(p => renderProductCard(p)).join('');
  // Re-trigger animations
  container.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 60);
  });
}

// ===== RENDER PRODUCT CARD =====
function renderProductCard(p) {
  const stars = renderStars(p.rating);
  return `
    <div class="product-card fade-in">
      <div class="product-image">
        <span style="position:relative;z-index:1;font-size:72px;">${p.emoji}</span>
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <div class="product-actions">
          <button class="action-btn" onclick="addToWishlist('${p.name}')" title="Add to Wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <button class="action-btn" onclick="quickView('${p.name}')" title="Quick View">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn" onclick="shareProduct('${p.name}')" title="Share">
            <i class="fas fa-share-alt"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${getCategoryLabel(p.category)} · ${p.purity}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          ${stars}
          <span style="color:var(--gray); margin-left:4px;">(${p.reviews})</span>
        </div>
        <div class="product-meta">
          <div>
            <div class="product-price">${p.price}</div>
            <div class="product-weight">${p.weight}</div>
          </div>
          <button class="btn btn-gold" style="padding:9px 18px; font-size:0.78rem;" onclick="addToCart('${p.name}', '${p.price}')">
            <i class="fas fa-calendar-check"></i> Book Now
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars += '<i class="fas fa-star"></i>';
    else if (i - 0.5 <= rating) stars += '<i class="fas fa-star-half-alt"></i>';
    else stars += '<i class="far fa-star"></i>';
  }
  return stars;
}

function getCategoryLabel(cat) {
  const map = { appraisal: 'Appraisal', crafting: 'Custom Crafting', repair: 'Repair & Restore', hallmark: 'Hallmarking', exchange: 'Old Gold Exchange' };
  return map[cat] || cat;
}

// ===== INTERACTIONS =====
function addToCart(name, price) {
  showToast(`� Appointment request for "${name}" — we'll call you to confirm!`);
}

function addToWishlist(name) {
  showToast(`❤️ "${name}" added to wishlist!`);
}

function quickView(name) {
  showToast(`👁️ Contact us for more details on "${name}"`);
}

function shareProduct(name) {
  if (navigator.share) {
    navigator.share({ title: `Banagar Jewellery – ${name}`, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('🔗 Link copied to clipboard!');
    });
  }
}

// ===== CONTACT FORM =====
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    document.getElementById('formSuccess').style.display = 'block';
    e.target.reset();
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.disabled = false;
      document.getElementById('formSuccess').style.display = 'none';
    }, 5000);
  }, 1800);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ===== SCROLL TOP =====
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) btn.classList.add('show');
    else btn.classList.remove('show');
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== TOAST =====
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== LIVE PRICE SIMULATION =====
function simulatePriceUpdate() {
  const el = document.getElementById('heroPrice');
  if (!el) return;
  // Base: ₹1,44,000 per 10g (24K Hyderabad, Aug 4 2026)
  const base = 144000;
  const delta = (Math.random() - 0.5) * 400;
  const buyPrice = Math.round(base + delta);
  // Buyback = ~98.5% of buy price
  const buybackEl = document.querySelector('.card-2 .card-value');
  const buyback = Math.round(buyPrice * 0.985);
  el.textContent = '₹' + buyPrice.toLocaleString('en-IN');
  if (buybackEl) buybackEl.textContent = '₹' + buyback.toLocaleString('en-IN');
}

setInterval(simulatePriceUpdate, 15000);
