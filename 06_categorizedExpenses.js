let expenses = [
    { amount:100, category: "Utilities"},
    { amount:200, category: "Groceries"},
    { amount:50, category: "Entertainment"}
]
const categorizeExpense = ele => (ele.amount>100)?"High Expense":"Low Expense"

const categorizeExpenses = expenses.map(categorizeExpense)

console.log(categorizeExpenses)