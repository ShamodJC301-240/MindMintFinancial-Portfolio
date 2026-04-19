import { fetchJSON, createElement, qs } from './utils.js';

// ── Render article cards ──────────────────────────────────────
function renderArticles(articles, container) {
  if (!container) return;
  container.innerHTML = articles.map(a => `
    <div class="card lift">
      <span class="card-tag">${a.category}</span>
      <div class="card-title">${a.title}</div>
      <p class="card-desc">${a.summary}</p>
      <div style="margin-top:16px;display:flex;gap:10px;align-items:center">
        <span style="font-size:12px;color:var(--text-muted)">${a.readTime} min read</span>
        <a href="${a.url || '#'}" class="btn btn-sm btn-outline" style="margin-left:auto">Read →</a>
      </div>
    </div>
  `).join('');
}

// ── Filter by category ────────────────────────────────────────
function initCategoryFilter(articles) {
  const tabs = document.querySelectorAll('.tab[data-category]');
  const grid = qs('#articles-grid');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.category;
      const filtered = cat === 'all' ? articles : articles.filter(a => a.category === cat);
      renderArticles(filtered, grid);
    });
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  const grid = qs('#articles-grid');
  const data = await fetchJSON('../data/articles.json');
  if (data?.articles) {
    renderArticles(data.articles, grid);
    initCategoryFilter(data.articles);
  }
});
