let budgetTotal = 0;
let expenses = []; 

const budgetInput = document.getElementById('budget-input');
const budgetError = document.getElementById('budget-error');

const expenseForm = document.getElementById('expense-form');
const descriptionInput = document.getElementById('expense-description');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const expenseError = document.getElementById('expense-error');

const expenseList = document.getElementById('expense-list');
const emptyState = document.getElementById('empty-state');

const totalSpentDisplay = document.getElementById('total-spent-display');
const remainingDisplay = document.getElementById('remaining-display');
const percentUsedDisplay = document.getElementById('percent-used-display');

const progressBar = document.getElementById('progress-bar');
const statusMessage = document.getElementById('status-message');

const filterButtons = document.getElementById('filter-buttons');

const currentYearSpan = document.getElementById('current-year');
const lastUpdatedSpan = document.getElementById('last-updated');

document.addEventListener('DOMContentLoaded', () => {
  renderExpenseList();
  updateSummary();

  currentYearSpan.textContent = new Date().getFullYear();
  lastUpdatedSpan.textContent = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

function setBudget(amount) {
  const parsedAmount = parseFloat(amount);

  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    budgetError.hidden = false;
    return;
  }

  budgetError.hidden = true;
  budgetTotal = parsedAmount;
  updateSummary();
}

function addExpense(description, amount, category) {
  const parsedAmount = parseFloat(amount);

  if (!description.trim() || isNaN(parsedAmount) || parsedAmount <= 0 || !category) {
    expenseError.hidden = false;
    return;
  }

  expenseError.hidden = true;

  const newExpense = {
    id: crypto.randomUUID(),
    description: description.trim(),
    amount: parsedAmount,
    category,
  };

  expenses.push(newExpense);

  renderExpenseList();
  updateSummary();

  expenseForm.reset();
}

function renderExpenseList(filteredCategory = 'all') {
  expenseList.innerHTML = '';

  const itemsToShow =
    filteredCategory === 'all'
      ? expenses
      : expenses.filter((expense) => expense.category === filteredCategory);

  if (itemsToShow.length === 0) {
    const emptyLi = document.createElement('li');
    emptyLi.className = 'empty-state';
    emptyLi.textContent =
      filteredCategory === 'all'
        ? 'No expenses yet — add one above to get started.'
        : 'No expenses in this category.';
    expenseList.appendChild(emptyLi);
    return;
  }

  itemsToShow.forEach((expense) => {
    const li = document.createElement('li');
    li.dataset.id = expense.id;

    li.innerHTML = `
      <div class="expense-info">
        <span class="expense-description">${expense.description}</span>
        <span class="expense-category">${expense.category}</span>
      </div>
      <span class="expense-amount">$${expense.amount.toFixed(2)}</span>
      <button type="button" class="delete-btn" aria-label="Delete ${expense.description}">&times;</button>
    `;

    expenseList.appendChild(li);
  });
}

function calculateTotalSpent() {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

function updateSummary() {
  const totalSpent = calculateTotalSpent();
  const remaining = budgetTotal - totalSpent;
  const percentUsed = budgetTotal > 0 ? (totalSpent / budgetTotal) * 100 : 0;

  totalSpentDisplay.textContent = `$${totalSpent.toFixed(2)}`;
  remainingDisplay.textContent = `$${remaining.toFixed(2)}`;
  percentUsedDisplay.textContent = `${Math.min(percentUsed, 100).toFixed(0)}%`;

  progressBar.classList.remove('status-warning', 'status-danger');

  let status;

  if (budgetTotal === 0) {
    status = 'Set a budget to get started';
  } else if (remaining < 0) {
    status = 'Over budget!';
    progressBar.classList.add('status-danger');
  } else if (percentUsed >= 80) {
    status = 'Approaching your limit';
    progressBar.classList.add('status-warning');
  } else {
    status = 'On track';
  }

  progressBar.style.width = `${Math.min(percentUsed, 100)}%`;
  statusMessage.textContent = status;
}

function deleteExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);

  const activeFilterBtn = filterButtons.querySelector('.filter-btn.active');
  const activeCategory = activeFilterBtn ? activeFilterBtn.dataset.category : 'all';

  renderExpenseList(activeCategory);
  updateSummary();
}

budgetInput.addEventListener('change', () => {
  setBudget(budgetInput.value);
});

expenseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addExpense(descriptionInput.value, amountInput.value, categoryInput.value);
});

expenseList.addEventListener('click', (event) => {
  const deleteBtn = event.target.closest('.delete-btn');
  if (!deleteBtn) return;

  const li = deleteBtn.closest('li');
  const id = li.dataset.id;
  deleteExpense(id);
});

filterButtons.addEventListener('click', (event) => {
  const clickedBtn = event.target.closest('.filter-btn');
  if (!clickedBtn) return;

  filterButtons
    .querySelectorAll('.filter-btn')
    .forEach((btn) => btn.classList.remove('active'));
  clickedBtn.classList.add('active');

  renderExpenseList(clickedBtn.dataset.category);
});