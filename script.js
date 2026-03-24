/* =============================================
   WebMinds — script.js (Tailwind version)
   ============================================= */

/* ---- Navbar scroll ---- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ---- Mobile menu ---- */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');

  if (!hamburger || !menu || !overlay) {
    return;
  }

  hamburger.setAttribute('aria-expanded', 'false');

  function openMenu() {
    menu.classList.add('open');
    overlay.classList.remove('hidden');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.add('hidden');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    /* also close all accordions */
    document.querySelectorAll('.mobile-acc-trigger.open').forEach(t => {
      t.classList.remove('open');
      t.nextElementSibling.classList.remove('open');
      t.nextElementSibling.classList.add('hidden');
    });
  }

  hamburger.addEventListener('click', () => {
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });
  overlay.addEventListener('click', closeMenu);

  /* Links inside mobile menu that navigate should close it */
  document.querySelectorAll('.mobile-close').forEach(el => {
    el.addEventListener('click', closeMenu);
  });

  /* Fallback: fechar ao clicar em qualquer link se mobile-close estiver ausente */
  document.querySelectorAll('#mobileMenu a').forEach(el => {
    el.addEventListener('click', () => {
      if (!el.classList.contains('mobile-close')) {
        closeMenu();
      }
    });
  });

  /* Mobile accordion triggers */
  document.querySelectorAll('.mobile-acc-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const isOpen = trigger.classList.contains('open');

      /* Close all others */
      document.querySelectorAll('.mobile-acc-trigger.open').forEach(t => {
        if (t !== trigger) {
          t.classList.remove('open');
          t.nextElementSibling.classList.remove('open');
          t.nextElementSibling.classList.add('hidden');
        }
      });

      if (isOpen) {
        trigger.classList.remove('open');
        content.classList.remove('open');
        content.classList.add('hidden');
      } else {
        trigger.classList.add('open');
        content.classList.remove('hidden');
        content.classList.add('open');
      }
    });
  });
}

/* ---- Typing text effect ---- */
function initTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;
  const phrases = [
    'para empresas.',
    'rápidos e estáveis.',
    'com SSL e backups.',
    'otimizados para conversão.',
  ];
  let phraseIndex = 0, charIndex = 0, deleting = false;

  function type() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      el.textContent = ' ' + current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        return setTimeout(type, 1400);
      }
    } else {
      el.textContent = ' ' + current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        return setTimeout(type, 350);
      }
    }
    setTimeout(type, deleting ? 28 : 55);
  }
  type();
}

/* ---- Particles canvas ---- */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  let particles = [], width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * width;
      this.y = init ? Math.random() * height : (Math.random() > 0.5 ? -4 : height + 4);
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.speedY = (Math.random() - 0.5) * 0.35;
      this.opacity = Math.random() * 0.35 + 0.05;
      // Brand blues: #1934a7 (25,52,167) and #031974 (3,25,116)
      this.color = Math.random() > 0.5 ? '25,52,167' : '3,25,116';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset(false);
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
      ctx.fill();
    }
  }

  function buildParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 14000), 100);
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(25,52,167,${0.06 * (1 - d / 120)})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }

  resize();
  buildParticles();
  animate();
  window.addEventListener('resize', () => { resize(); buildParticles(); }, { passive: true });
}

/* ---- Scroll reveal ---- */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = (entry.target.dataset.revealDelay || 0) * 90;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.dataset.revealDelay = i % 6;
    obs.observe(el);
  });
}

/* ---- Carousel ---- */
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const dotsEl = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const carouselEl = document.getElementById('carouselEl');
  if (!track) return;

  const slides = track.querySelectorAll('.min-w-full');
  const total = slides.length;
  let current = 0, timer;

  /* Build dots */
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = `w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
      i === 0 ? 'bg-indigo-400 scale-125' : 'bg-white/30 hover:bg-white/50'
    }`;
    d.setAttribute('aria-label', `Slide ${i + 1}`);
    d.addEventListener('click', () => { goTo(i); resetTimer(); });
    dotsEl.appendChild(d);
  });

  function updateDots() {
    dotsEl.querySelectorAll('button').forEach((dot, index) => {
      dot.className = `w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
        index === current ? 'bg-indigo-400 scale-125' : 'bg-white/30 hover:bg-white/50'
      }`;
    });
  }

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
  }

  prevBtn.addEventListener('click', () => { goTo(current - 1); resetTimer(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); resetTimer(); });

  function startTimer() { timer = setInterval(() => goTo(current + 1), 4500); }
  function stopTimer()  { clearInterval(timer); }
  function resetTimer() { stopTimer(); startTimer(); }

  carouselEl.addEventListener('mouseenter', stopTimer);
  carouselEl.addEventListener('mouseleave', startTimer);

  let touchX = 0;
  carouselEl.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  carouselEl.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? goTo(current + 1) : goTo(current - 1); resetTimer(); }
  }, { passive: true });

  startTimer();
}

/* ---- Subtle parallax on hero visual ---- */
function initParallax() {
  const heroCard = document.querySelector('.animate-fade-right');
  if (!heroCard) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY < window.innerHeight) {
          heroCard.style.transform = `translateY(${window.scrollY * 0.07}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ---- Safe in-page navigation (file:// preview friendly) ---- */
function initSafeAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (href.length <= 1) return; // ignore "#"
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    a.addEventListener('click', (e) => {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ---- Hero access form (scroll to footer) ---- */
function initHeroAccessForm() {
  const form = document.getElementById('heroAccessForm');
  if (!form) return;
  const footer = document.getElementById('footer');
  if (!footer) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ---- Services tabs (desktop) ---- */
function initServicesTabs() {
  const tabs = Array.from(document.querySelectorAll('[data-service-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-service-panel]'));
  if (tabs.length === 0 || panels.length === 0) return;

  function setActive(key) {
    tabs.forEach((t) => {
      const isActive = t.dataset.serviceTab === key;
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      t.classList.toggle('bg-indigo-600/10', isActive);
      t.classList.toggle('text-indigo-900', isActive);
      t.classList.toggle('ring-1', isActive);
      t.classList.toggle('ring-indigo-600/20', isActive);
      const indicator = t.querySelector('[data-tab-indicator]');
      if (indicator) indicator.classList.toggle('opacity-100', isActive), indicator.classList.toggle('opacity-0', !isActive);
    });
    panels.forEach((p) => {
      const isActive = p.dataset.servicePanel === key;
      p.classList.toggle('hidden', !isActive);
      if (isActive) {
        p.classList.remove('animate-fade-up');
        // restart animation
        void p.offsetWidth;
        p.classList.add('animate-fade-up');
        
        // Dynamic CTA text
        const cta = document.getElementById('servicesCta');
        if (cta && p.dataset.ctaText) {
          cta.innerHTML = `${p.dataset.ctaText} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>`;
        }
      }
    });
  }

  tabs.forEach((t, idx) => {
    t.addEventListener('click', () => setActive(t.dataset.serviceTab));
    t.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault();
      const dir = e.key === 'ArrowDown' ? 1 : -1;
      const next = (idx + dir + tabs.length) % tabs.length;
      tabs[next].focus();
      setActive(tabs[next].dataset.serviceTab);
    });
  });

  // initial
  setActive(tabs.find(t => t.getAttribute('aria-selected') === 'true')?.dataset.serviceTab || tabs[0].dataset.serviceTab);
}

/* ---- Scroll UX (progress + back to top) ---- */
function initScrollUX() {
  const bar = document.getElementById('scrollProgressBar');
  const backToTop = document.getElementById('backToTop');
  const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function update() {
    const doc = document.documentElement;
    const max = Math.max(doc.scrollHeight - doc.clientHeight, 1);
    const p = Math.min(Math.max(window.scrollY / max, 0), 1);

    if (bar) bar.style.transform = `scaleX(${p})`;

    if (backToTop) {
      const show = window.scrollY > 600;
      backToTop.classList.toggle('hidden', !show);
      backToTop.classList.toggle('flex', show);
    }
  }

  update();
  window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  window.addEventListener('resize', () => requestAnimationFrame(update), { passive: true });

  backToTop?.addEventListener('click', () => {
    if (prefersReduce) return window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---- Vissiona modal (overlay page) ---- */
function initVissionaModal() {
  const modal = document.getElementById('vissionaModal');
  if (!modal) return;

  const dialog = modal.querySelector('[role="dialog"]');
  const backdrop = modal.querySelector('[data-vissiona-backdrop]');
  const closeBtns = modal.querySelectorAll('[data-vissiona-close]');
  const openBtns = document.querySelectorAll('[data-vissiona-open]');

  let lastFocused = null;

  function openModal(fromEl) {
    lastFocused = fromEl || document.activeElement;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // focus dialog for accessibility
    setTimeout(() => dialog?.focus(), 0);
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') {
      setTimeout(() => lastFocused.focus(), 0);
    }
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => openModal(btn));
  });

  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
  backdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeModal();
  });
}

/* ---- Page fade in ---- */
function initLoader() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  window.addEventListener('load', () => { document.body.style.opacity = '1'; });
}

/* ---- Services Slider Logic ---- */
function initServicesSlider() {
  const slider = document.getElementById('services-slider');
  const btnPrev = document.getElementById('btn-prev-services');
  const btnNext = document.getElementById('btn-next-services');
  if (!slider) return;

  // Center horizontally on page load
  setTimeout(() => {
    slider.style.scrollBehavior = 'auto';
    slider.scrollLeft = (slider.scrollWidth - slider.clientWidth) / 2;
    // Restore smooth behavior after the jump
    setTimeout(() => {
      slider.style.scrollBehavior = 'smooth';
    }, 50);
  }, 400);

  if (btnPrev && btnNext) {
    const scrollAmount = window.innerWidth < 640 ? window.innerWidth * 0.85 : 344;
    btnPrev.addEventListener('click', () => {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    btnNext.addEventListener('click', () => {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.style.cursor = 'grab';
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    slider.style.scrollBehavior = 'auto'; // Disable smooth scroll while dragging
    slider.style.scrollSnapType = 'none'; // Disable snapping while dragging
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
    slider.style.scrollBehavior = 'smooth';
    slider.style.scrollSnapType = '';
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
    slider.style.scrollBehavior = 'smooth';
    slider.style.scrollSnapType = '';
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    slider.scrollLeft = scrollLeft - walk;
  });
}

/* ---- FAQ Toggles ---- */
function initFAQ() {
  document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const arrow = button.querySelector('.faq-arrow');
      
      // Close all other FAQs
      document.querySelectorAll('.faq-content').forEach(otherContent => {
        if (otherContent !== content) {
          otherContent.classList.add('hidden');
          otherContent.previousElementSibling.querySelector('.faq-arrow').style.transform = 'rotate(0deg)';
        }
      });
      
      // Toggle current FAQ
      content.classList.toggle('hidden');
      arrow.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });
}


function animateCounter(el, target, duration = 2000) {
  let start = null;
  const easeOutQuart = t => 1 - Math.pow(1 - t, 4);

  function step(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuart(progress);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      animateCounter(el, target);
      observer.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));

// ===== TESTIMONIAL SLIDER DRAG =====
const slider = document.getElementById('testimonialSlider');

if (slider) {
  let isDown = false;
  let startX;
  let scrollLeft;
  let velocity = 0;
  let lastX;
  let lastTime;
  let animationId;

  // Cursor feedback
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    slider.style.userSelect = 'none';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    lastX = e.pageX;
    lastTime = Date.now();
    velocity = 0;
    cancelAnimationFrame(animationId);
  });

  slider.addEventListener('mouseleave', () => {
    if (!isDown) return;
    isDown = false;
    slider.style.cursor = 'grab';
    applyMomentum();
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
    applyMomentum();
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.2;
    slider.scrollLeft = scrollLeft - walk;

    // Track velocity
    const now = Date.now();
    const dt = now - lastTime;
    if (dt > 0) {
      velocity = (e.pageX - lastX) / dt;
      lastX = e.pageX;
      lastTime = now;
    }
  });

  // Momentum / inércia após soltar
  function applyMomentum() {
    let speed = velocity * 14;
    function step() {
      if (Math.abs(speed) < 0.5) return;
      slider.scrollLeft -= speed;
      speed *= 0.92;
      animationId = requestAnimationFrame(step);
    }
    animationId = requestAnimationFrame(step);
  }

  // Cursor inicial
  slider.style.cursor = 'grab';

  // Botões de seta
  document.getElementById('prevBtn')?.addEventListener('click', () => {
    cancelAnimationFrame(animationId);
    slider.scrollBy({ left: -440, behavior: 'smooth' });
  });

  document.getElementById('nextBtn')?.addEventListener('click', () => {
    cancelAnimationFrame(animationId);
    slider.scrollBy({ left: 440, behavior: 'smooth' });
  });

  // Touch (mobile) — já funciona nativamente, mas melhora o feel
  let touchStartX = 0;
  let touchScrollLeft = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = slider.scrollLeft;
    cancelAnimationFrame(animationId);
  }, { passive: true });

  slider.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (touchStartX - x) * 1.1;
    slider.scrollLeft = touchScrollLeft + walk;
  }, { passive: true });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initMobileMenu();
  initTyping();
  initParticles();
  initReveal();
  initCarousel();
  initParallax();
  initSafeAnchors();
  initHeroAccessForm();
  initServicesTabs();
  initScrollUX();
  initVissionaModal();
  initServicesSlider();
  initFAQ();
});