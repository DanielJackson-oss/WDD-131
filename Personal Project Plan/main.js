let budgetTotal = 0;
let expenses = [];
let nextExpenseId = 0;

const categoryList = ["all", "food", "entertainment", "transportation", "school", "other"];

const budgetInput = document.getElementById('budget-input');
const budgetError = document.getElementById('budget-error');

const expenseForm = document.getElementById('expense-form');
const descriptionInput = document.getElementById('expense-description');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const expenseError = document.getElementById('expense-error');

  const expenseList = document.getElementById('expense-list');

const totalSpentDisplay = document.getElementById('total-spent-display');
const remainingDisplay = document.getElementById('remaining-display');
const percentUsedDisplay = document.getElementById('percent-used-display');

const progressBar = document.getElementById('progress-bar');
const statusMessage = document.getElementById('status-message');

const filterButtons = document.getElementById('filter-buttons');
const allFilterButtons = filterButtons.querySelectorAll('.filter-btn');

document.addEventListener('DOMContentLoaded', () => {
  renderExpenseList('all');
  updateSummary();
});

function formatCurrency(amount) {
  let isNegative = amount < 0;
  let positiveAmount = amount;

  if (isNegative) {
    positiveAmount = amount * -1;
  }

  const totalCents = Math.floor(positiveAmount * 100 + 0.5);
  const dollars = Math.floor(totalCents / 100);
  const cents = totalCents - dollars * 100;

  let centsText = cents;
  if (cents < 10) {
    centsText = "0" + cents;
  }

  let result = "$" + dollars + "." + centsText;

  if (isNegative) {
    result = "-" + result;
  }

  return result;
}

function setBudget(amount) {
  const numAmount = Number(amount);

  if (!(numAmount > 0)) {
    budgetError.hidden = false;
    return;
  }

  budgetError.hidden = true;
  budgetTotal = numAmount;
  updateSummary();
}

function addExpense(description, amount, category) {
  const numAmount = Number(amount);

  if (description.length === 0 || !(numAmount > 0) || category.length === 0) {
    expenseError.hidden = false;
    return;
  }

  expenseError.hidden = true;

  const newExpense = {
    id: nextExpenseId,
    description: description,
    amount: numAmount,
    category: category,
  };

  nextExpenseId = nextExpenseId + 1;
  expenses.push(newExpense);

  const activeCategory = getActiveCategory();
  renderExpenseList(activeCategory);
  updateSummary();

  expenseForm.reset();
}

function getActiveCategory() {
  let activeCategory = 'all';

  for (let i = 0; i < allFilterButtons.length; i = i + 1) {
    if (allFilterButtons[i].classList.contains('active')) {
      activeCategory = categoryList[i];
    }
  }

  return activeCategory;
}

function renderExpenseList(filteredCategory) {
  expenseList.innerHTML = '';

  const itemsToShow = expenses.filter(function (expense) {
    if (filteredCategory === 'all') {
      return true;
    }
    return expense.category === filteredCategory;
  });

  if (itemsToShow.length === 0) {
    const emptyLi = document.createElement('li');
    emptyLi.className = 'empty-state';

    if (filteredCategory === 'all') {
      emptyLi.textContent = 'No expenses yet — add one above to get started.';
    } else {
      emptyLi.textContent = 'No expenses in this category.';
    }

    expenseList.appendChild(emptyLi);
    return;
  }

  itemsToShow.forEach(function (expense) {
    const li = document.createElement('li');

    li.innerHTML = '<div class="expense-info">' +
      '<span class="expense-description">' + expense.description + '</span>' +
      '<span class="expense-category">' + expense.category + '</span>' +
      '</div>' +
      '<span class="expense-amount">' + formatCurrency(expense.amount) + '</span>' +
      '<button type="button" class="delete-btn" aria-label="Delete expense">&times;</button>';

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
      deleteExpense(expense.id);
    });

    expenseList.appendChild(li);
  });
}

function calculateTotalSpent() {
  return expenses.reduce(function (sum, expense) {
    return sum + expense.amount;
  }, 0);
}

function updateSummary() {
  const totalSpent = calculateTotalSpent();
  const remaining = budgetTotal - totalSpent;
  let percentUsed = 0;

  if (budgetTotal > 0) {
    percentUsed = (totalSpent / budgetTotal) * 100;
  }

  let displayPercent = percentUsed;
  if (displayPercent > 100) {
    displayPercent = 100;
  }

  totalSpentDisplay.textContent = formatCurrency(totalSpent);
  remainingDisplay.textContent = formatCurrency(remaining);
  percentUsedDisplay.textContent = Math.floor(displayPercent) + "%";

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

  progressBar.style.width = displayPercent + "%";
  statusMessage.textContent = status;
}

function deleteExpense(id) {
  expenses = expenses.filter(function (expense) {
    return expense.id !== id;
  });

  const activeCategory = getActiveCategory();
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

allFilterButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    allFilterButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    renderExpenseList(categoryList[index]);
  });
});