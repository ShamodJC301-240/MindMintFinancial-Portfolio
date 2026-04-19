import { formatCurrency, loadFromStorage, saveToStorage } from './utils.js';
import { openModal, closeModal } from './main.js';

// ── State ─────────────────────────────────────────────────────
let state = loadFromStorage('mint_account', {
  balance: 12480.00,
  savings: 5200.00,
  transactions: [
    { id: 1, icon: '🍕', name: "Joe's Pizza",           date: '2026-04-10', amount: -18.50 },
    { id: 2, icon: '💰', name: 'Direct Deposit',         date: '2026-04-10', amount: 2400.00 },
    { id: 3, icon: '🚇', name: 'MTA MetroCard',          date: '2026-04-09', amount: -33.00 },
    { id: 4, icon: '🛒', name: "Trader Joe's",           date: '2026-04-08', amount: -74.30 },
    { id: 5, icon: '☕', name: 'Blue Bottle Coffee',     date: '2026-04-08', amount: -7.25  },
    { id: 6, icon: '💰', name: 'Direct Deposit',         date: '2026-03-25', amount: 2400.00 },
    { id: 7, icon: '💡', name: 'ConEd Electric',         date: '2026-03-22', amount: -94.10 },
  ]
});

function saveState() { saveToStorage('mint_account', state); }

// ── Render ────────────────────────────────────────────────────
function renderBalance() {
  document.querySelectorAll('[data-balance]').forEach(el => {
    el.textContent = formatCurrency(state.balance);
  });
  document.querySelectorAll('[data-savings]').forEach(el => {
    el.textContent = formatCurrency(state.savings);
  });
}

function renderTransactions() {
  const list = document.querySelector('#transaction-list');
  if (!list) return;
  list.innerHTML = state.transactions.map(t => `
    <div class="txn">
      <div class="txn-icon">${t.icon}</div>
      <div class="txn-info">
        <div class="txn-name">${t.name}</div>
        <div class="txn-date">${new Date(t.date).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</div>
      </div>
      <div class="txn-amt ${t.amount > 0 ? 'pos' : 'neg'}">
        ${t.amount > 0 ? '+' : ''}${formatCurrency(Math.abs(t.amount))}
      </div>
    </div>
  `).join('');
}

// ── Transactions ──────────────────────────────────────────────
export function doDeposit() {
  const amt = parseFloat(document.querySelector('#deposit-amount')?.value);
  if (!amt || amt <= 0) { alert('Please enter a valid amount.'); return; }
  state.balance += amt;
  state.transactions.unshift({ id: Date.now(), icon: '⬇️', name: 'Deposit', date: new Date().toISOString().split('T')[0], amount: amt });
  saveState(); renderBalance(); renderTransactions();
  showSuccess('deposit', `${formatCurrency(amt)} added. New balance: ${formatCurrency(state.balance)}`);
  document.querySelector('#deposit-amount').value = '';
}

export function doWithdraw() {
  const amt = parseFloat(document.querySelector('#withdraw-amount')?.value);
  if (!amt || amt <= 0) { alert('Please enter a valid amount.'); return; }
  if (amt > state.balance) { alert('Insufficient funds. Balance: ' + formatCurrency(state.balance)); return; }
  state.balance -= amt;
  state.transactions.unshift({ id: Date.now(), icon: '⬆️', name: 'Withdrawal', date: new Date().toISOString().split('T')[0], amount: -amt });
  saveState(); renderBalance(); renderTransactions();
  showSuccess('withdraw', `${formatCurrency(amt)} withdrawn. Remaining: ${formatCurrency(state.balance)}`);
  document.querySelector('#withdraw-amount').value = '';
}

export function doTransfer() {
  state.transactions.unshift({ id: Date.now(), icon: '↔️', name: 'Transfer', date: new Date().toISOString().split('T')[0], amount: 0 });
  saveState(); renderTransactions();
  showSuccess('transfer', 'Your transfer was processed instantly.');
}

function showSuccess(type, msg) {
  const formEl = document.querySelector(`#${type}-form-content`);
  const successEl = document.querySelector(`#${type}-success`);
  const msgEl = document.querySelector(`#${type}-success-msg`);
  if (formEl) formEl.style.display = 'none';
  if (msgEl) msgEl.textContent = msg;
  if (successEl) successEl.style.display = 'block';
}

export function resetModal(type) {
  const formEl = document.querySelector(`#${type}-form-content`);
  const successEl = document.querySelector(`#${type}-success`);
  if (formEl) formEl.style.display = 'block';
  if (successEl) successEl.style.display = 'none';
  closeModal(`${type}-modal`);
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderBalance();
  renderTransactions();
  // Expose to inline onclick handlers
  window.openModal  = openModal;
  window.closeModal = (t) => resetModal(t);
  window.doDeposit  = doDeposit;
  window.doWithdraw = doWithdraw;
  window.doTransfer = doTransfer;
});
