const ordersList = [
    { name: "Laptop", price: 120000},
    { name: "Mobile", price: 70000},
    { name: "Mobile Charger", price: 1500},
    { name: "Laptop Charger", price: 10500},
]
let totalPrice = 0;
ordersList.forEach((ele) =>{
    totalPrice += ele.price;
})
console.log(`Total price of the purchased items is Rs.${totalPrice}`)