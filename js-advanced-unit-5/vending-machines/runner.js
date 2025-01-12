const { addItem } = require("./cart-functions")

const itemsArray = [{ name: "Beans", price: 3 }]
addItem(itemsArray, "Sugar", 2)

console.log(itemsArray)

//const payment = 13.03
//const total = 12.3
//console.log("Change")
//console.log(calculateChange(payment, total))

/*
const itemsArray = [
  { name: "Jelly", price: 3.5 },
  { name: "Milk", price: 2.0 },
  { name: "Cereal", price: 4.0 }
]
*/
//console.log("Total itemsArray")
//.console.log(calculateTotal(itemsArray))
