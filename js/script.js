/* ============================================
   KACANG SEMBUNYI KRAJAN — Script
   Hamburger Menu | Smooth Scroll | Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  const navItems = document.querySelectorAll('[data-nav]');
  const sections = document.querySelectorAll('section[id]');

  // ==========================================
  // 1. HAMBURGER MENU (Mobile)
  // ==========================================
  function openMenu() {
    hamburger.classList.add('active');
    navLinks.classList.add('active');
    navOverlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');
    isOpen ? closeMenu() : openMenu();
  });

  // Close menu when a nav link is clicked
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu when overlay is clicked
  navOverlay.addEventListener('click', closeMenu);

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });

  // ==========================================
  // 2. NAVBAR SCROLL EFFECT
  // ==========================================
  let lastScrollY = 0;
  const scrollThreshold = 50;

  function handleNavbarScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  }

  // Throttle scroll handler for performance
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        handleNavbarScroll();
        updateActiveNav();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // ==========================================
  // 3. SMOOTH SCROLLING
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ==========================================
  // 4. ACTIVE NAV LINK HIGHLIGHT
  // ==========================================
  function updateActiveNav() {
    let currentSection = '';
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // ==========================================
  // 5. SCROLL ANIMATIONS (IntersectionObserver)
  // ==========================================
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers: show all elements immediately
    animatedElements.forEach(el => el.classList.add('animated'));
  }

  // ==========================================
  // 6. INITIAL STATE
  // ==========================================
  // Run navbar scroll check on load (in case page loads scrolled)
  handleNavbarScroll();
  updateActiveNav();
});
