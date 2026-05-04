// ============================================
// DARK MODE
// ============================================ 
const btn = document.getElementById("toggleDark");
  btn.onclick = () => {
    document.body.classList.toggle("dark-mode");
  };

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
function initScrollReveal() {
  var revealEls = document.querySelectorAll('.reveal');

  if (!revealEls.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(function(el) {
    observer.observe(el);
  });
}

// ============================================
// ACTIVE NAV HIGHLIGHT
// ============================================
function initActiveNav() {
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initHeaderScroll() {
  var header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      header.style.background = 'rgba(10, 10, 12, 0.97)';
    } else {
      header.style.background = 'rgba(10, 10, 12, 0.85)';
    }
  }, { passive: true });
}

// ============================================
// FEATURED CARD HOVER (portfolio page)
// ============================================
function initFeaturedCard() {
  var card = document.querySelector('.featured-card');
  if (!card) return;

  card.addEventListener('mouseenter', function() {
    this.style.borderColor = 'var(--accent)';
    this.style.transform = 'translateY(-4px)';
    this.style.boxShadow = 'var(--shadow-card), var(--shadow-accent)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.borderColor = 'var(--border)';
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'none';
  });
}

// ============================================
// INIT ALL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  initScrollReveal();
  initActiveNav();
  initHeaderScroll();
  initFeaturedCard();
});
