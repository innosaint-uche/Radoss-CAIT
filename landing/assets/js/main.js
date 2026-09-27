// CAIT — Main JavaScript

// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.querySelector('.nav__actions').classList.toggle('active');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('active');
      const actions = document.querySelector('.nav__actions');
      if (actions) actions.classList.remove('active');
    }
  });
});

// Pricing Toggle (Monthly / Annual)
const pricingToggle = document.getElementById('pricingToggle');
const monthlyLabel = document.getElementById('monthlyLabel');
const annualLabel = document.getElementById('annualLabel');
let isAnnual = false;

if (pricingToggle) {
  pricingToggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    pricingToggle.classList.toggle('active', isAnnual);
    monthlyLabel.classList.toggle('pricing__toggle-label--active', !isAnnual);
    annualLabel.classList.toggle('pricing__toggle-label--active', isAnnual);

    document.querySelectorAll('.pricing-card__amount[data-monthly]').forEach(el => {
      el.textContent = isAnnual ? el.dataset.annual : el.dataset.monthly;
    });
  });
}

// Animated Counter (Stats Section)
function animateCounters() {
  const counters = document.querySelectorAll('.stats__number[data-target]');
  counters.forEach(counter => {
    const target = parseFloat(counter.dataset.target);
    const duration = 2000;
    const start = performance.now();
    const isDecimal = target % 1 !== 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = isDecimal ? target.toFixed(1) : target;
      }
    }
    requestAnimationFrame(update);
  });
}

// Intersection Observer for counter animation
const statsSection = document.querySelector('.stats');
if (statsSection) {
  let counted = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(statsSection);
}

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll(
  '.feature-card, .step, .biz-card, .testimonial, .pricing-card'
);

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(el);
});

// Chat animation (typing effect in hero)
function animateChat() {
  const messages = document.querySelectorAll('.chat__msg');
  messages.forEach((msg, i) => {
    msg.style.opacity = '0';
    msg.style.transform = 'translateY(12px)';
    setTimeout(() => {
      msg.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      msg.style.opacity = '1';
      msg.style.transform = 'translateY(0)';
    }, 300 + i * 600);
  });
}

// Run chat animation when hero is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateChat();
        heroObserver.unobserve(entry.target);
      }
    });
  });
  heroObserver.observe(heroSection);
}
