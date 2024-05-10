let expenses = [
    { amount:100, category: "Utilities"},
    { amount:200, category: "Groceries"},
    { amount:50, category: "Entertainment"}
]

const groceryExpenses = expenses.filter((ele) =>{
    return ele.category === "Groceries"
})
console.log(groceryExpenses)