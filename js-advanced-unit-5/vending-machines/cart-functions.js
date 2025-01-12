const calculateChange = (payment, total) => {
  const change = Math.round((payment - total) * 100) / 100
  return change
}

const isSufficientPayment = (payment, total) => {
  if (Math.round((payment - total) * 100) / 100 >= 0) {
    return true
  } else {
    return false
  }
}

const calculateTotal = itemsArray => {
  let sumOfAllPrices = 0
  if (itemsArray === 0) {
    return 0
  }

  for (let i = 0; i < itemsArray.length; i++) {
    sumOfAllPrices += itemsArray[i].price
  }
  return Math.round(sumOfAllPrices * 100) / 100
}

const addItem = (itemsArray, name, price) => {
  const newItem = { name, price }
  itemsArray.push(newItem)
}

const removeItem = (itemsArray, index) => {
  if (index === 0) {
    itemsArray.shift()
  } else if (index === itemsArray.length - 1) {
    itemsArray.pop()
  } else if (index === Math.floor(itemsArray.length / 2)) {
    itemsArray.splice(index, 1)
  } else {
    console.log("Unexpected index value")
  }
}

const itemsArray = [
  { name: "Beans", price: 3 },
  { name: "Soda", price: 2.5 },
  { name: "Bananas", price: 1 }
]

const index = 2
removeItem(itemsArray, index)
console.log(itemsArray)

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem
}
