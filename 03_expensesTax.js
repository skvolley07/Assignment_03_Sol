let expenses = [
    { amount:100, category: "Utilities"},
    { amount:200, category: "Groceries"},
    { amount:50, category: "Entertainment"}
]

let expensesWithTax = expenses.map((ele) =>{
    return Object.assign({},ele,{taxableAmt:ele.amount * 0.1})
})

console.log(expensesWithTax)