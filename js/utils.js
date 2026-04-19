// ── Formatting ──────────────────────────────────────────────
export function formatCurrency(n) {
  return '$' + Number(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });
}

export function formatPercent(n, decimals = 1) {
  return Number(n).toFixed(decimals) + '%';
}

// ── DOM Helpers ─────────────────────────────────────────────
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function qsAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

export function createElement(tag, classes = '', content = '') {
  const el = document.createElement(tag);
  if (classes) el.className = classes;
  if (content) el.innerHTML = content;
  return el;
}

// ── Data Fetching ────────────────────────────────────────────
export async function fetchJSON(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to fetch ${path}`);
    return await res.json();
  } catch (err) {
    console.error('fetchJSON error:', err);
    return null;
  }
}

// ── Storage ──────────────────────────────────────────────────
export function saveToStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

export function loadFromStorage(key, fallback = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch { return fallback; }
}

// ── Validation ───────────────────────────────────────────────
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isPositiveNumber(val) {
  return !isNaN(val) && Number(val) > 0;
}

// ── Misc ─────────────────────────────────────────────────────
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
