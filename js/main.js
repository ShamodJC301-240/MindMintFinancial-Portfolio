import { qs, qsAll } from './utils.js';

// ── Navbar active link ───────────────────────────────────────
function setActiveNavLink() {
  const page = location.pathname.split('/').pop() || 'index.html';
  qsAll('nav ul a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === page);
  });
}

// ── Mobile menu toggle ───────────────────────────────────────
function initMobileMenu() {
  const toggle = qs('#menu-toggle');
  const menu   = qs('#nav-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', menu.classList.contains('open'));
  });
}

// ── Modal helpers (site-wide) ────────────────────────────────
export function openModal(id) {
  const overlay = qs(`#${id}`);
  if (overlay) overlay.classList.add('active');
}

export function closeModal(id) {
  const overlay = qs(`#${id}`);
  if (overlay) overlay.classList.remove('active');
}

function initModalCloseOnOverlay() {
  qsAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });
}

// ── Smooth scroll for anchor links ──────────────────────────
function initSmoothScroll() {
  qsAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = qs(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
  initMobileMenu();
  initModalCloseOnOverlay();
  initSmoothScroll();
});
