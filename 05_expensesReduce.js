let expenses = [
    { amount:100, category: "Utilities"},
    { amount:200, category: "Groceries"},
    { amount:50, category: "Entertainment"}
]

let totalExpenses = expenses.reduce((initialValue, ele)=>{
    return initialValue += ele.amount
},0)
console.log(`Total Expenses: ${totalExpenses}`)