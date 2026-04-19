import { formatCurrency, formatPercent, clamp } from './utils.js';

// ── Compound Interest Calculator ─────────────────────────────
function calcCompoundInterest() {
  const principal = parseFloat(document.querySelector('#ci-principal')?.value) || 0;
  const rate      = parseFloat(document.querySelector('#ci-rate')?.value) || 0;
  const years     = parseFloat(document.querySelector('#ci-years')?.value) || 0;
  const compound  = parseInt(document.querySelector('#ci-compound')?.value) || 12;

  const total = principal * Math.pow(1 + (rate / 100) / compound, compound * years);
  const interest = total - principal;

  const resultEl = document.querySelector('#ci-result');
  if (resultEl) {
    resultEl.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px">
        <div class="card" style="padding:20px">
          <div style="font-size:11px;color:var(--text-muted);font-weight:700;text-transform:uppercase;letter-spacing:1px">Final Balance</div>
          <div style="font-family:'Playfair Display',serif;font-size:28px;color:var(--mint);font-weight:700;margin-top:4px">${formatCurrency(total)}</div>
        </div>
        <div class="card" style="padding:20px">
          <div style="font-size:11px;color:var(--text-muted);font-weight:700;text-transform:uppercase;letter-spacing:1px">Interest Earned</div>
          <div style="font-family:'Playfair Display',serif;font-size:28px;color:var(--success);font-weight:700;margin-top:4px">${formatCurrency(interest)}</div>
        </div>
      </div>
    `;
  }
}

// ── Budget Planner ────────────────────────────────────────────
function calcBudget() {
  const income   = parseFloat(document.querySelector('#budget-income')?.value) || 0;
  const needs    = income * 0.50;
  const wants    = income * 0.30;
  const savings  = income * 0.20;

  const resultEl = document.querySelector('#budget-result');
  if (!resultEl) return;
  resultEl.innerHTML = `
    <div style="margin-top:20px">
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:16px">50/30/20 Rule Breakdown</p>
      ${[['🏠 Needs (50%)', needs],['🎉 Wants (30%)', wants],['💰 Savings (20%)', savings]]
        .map(([label, val]) => `
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
            <span style="font-size:14px;font-weight:600">${label}</span>
            <span style="font-family:'Playfair Display',serif;font-size:18px;color:var(--mint);font-weight:700">${formatCurrency(val)}</span>
          </div>
          <div class="progress-bar" style="margin-bottom:16px">
            <div class="progress-fill" style="--fill:${clamp((val/income)*100,0,100)}%"></div>
          </div>
        `).join('')}
    </div>
  `;
}

// ── Loan Calculator ───────────────────────────────────────────
function calcLoan() {
  const principal = parseFloat(document.querySelector('#loan-amount')?.value) || 0;
  const annualRate = parseFloat(document.querySelector('#loan-rate')?.value) || 0;
  const months    = parseInt(document.querySelector('#loan-term')?.value) || 0;

  const r = (annualRate / 100) / 12;
  const payment = r === 0
    ? principal / months
    : principal * r * Math.pow(1+r, months) / (Math.pow(1+r, months) - 1);
  const totalPaid = payment * months;
  const totalInterest = totalPaid - principal;

  const resultEl = document.querySelector('#loan-result');
  if (resultEl) {
    resultEl.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:20px">
        ${[['Monthly Payment', payment],['Total Paid', totalPaid],['Total Interest', totalInterest]]
          .map(([label, val]) => `
            <div class="card" style="padding:16px;text-align:center">
              <div style="font-size:11px;color:var(--text-muted);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">${label}</div>
              <div style="font-family:'Playfair Display',serif;font-size:20px;color:var(--mint);font-weight:700">${formatCurrency(val)}</div>
            </div>
          `).join('')}
      </div>
    `;
  }
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  window.calcCompoundInterest = calcCompoundInterest;
  window.calcBudget = calcBudget;
  window.calcLoan   = calcLoan;
});
