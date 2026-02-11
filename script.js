/* ═══════════════════════════════════════════════
   Hana Prague Guide — JavaScript
   ═══════════════════════════════════════════════ */

(function () {
    'use strict';

    // ─── DARK / LIGHT MODE TOGGLE ───────────────
    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const STORAGE_KEY = 'hana-theme';

    function setTheme(dark) {
        html.classList.toggle('dark', dark);
        if (toggle) {
            toggle.textContent = dark ? '☀️' : '🌙';
            toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    // Init: localStorage → system preference → light
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        setTheme(saved === 'dark');
    } else {
        setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    // Listen to system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!localStorage.getItem(STORAGE_KEY)) {
            setTheme(e.matches);
        }
    });

    // Toggle button click
    if (toggle) {
        toggle.addEventListener('click', function () {
            const isDark = !html.classList.contains('dark');
            setTheme(isDark);
            localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
        });
    }

    // ─── STICKY NAVBAR SHADOW ───────────────────
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        }, { passive: true });
    }

    // ─── MOBILE HAMBURGER MENU ──────────────────
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // ─── FAQ ACCORDION ──────────────────────────
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = this.closest('.faq-item');
            var isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item.active').forEach(function (el) {
                el.classList.remove('active');
            });

            // Open clicked if it was closed
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ─── SCROLL ANIMATIONS (FADE IN) ────────────
    var fadeEls = document.querySelectorAll('.fade-in');

    if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        fadeEls.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show everything
        fadeEls.forEach(function (el) {
            el.classList.add('visible');
        });
    }

})();
