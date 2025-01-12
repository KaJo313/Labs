const formatCurrency = amount => {
  if (isNaN(amount)) {
    return "Not a Number"
  }

  const amountRoundedAndFixedToTwo = (
    Math.round(Math.abs(amount) * 100) / 100
  ).toFixed(2)
  const currency =
    amount >= 0
      ? "$" + amountRoundedAndFixedToTwo
      : "-$" + amountRoundedAndFixedToTwo

  return currency
}

const getCoins = cents => {
  cents = Math.round(cents * 100)
  const coinsArray = [
    { name: "quarters", quantity: 0 },
    { name: "dimes", quantity: 0 },
    { name: "nickels", quantity: 0 },
    { name: "pennies", quantity: 0 }
  ]

  do {
    if (cents >= 25) {
      coinsArray[0].quantity += 1 //quarters
      cents = cents -= 25
    } else if (cents >= 10) {
      coinsArray[1].quantity += 1 //dimes
      cents = cents -= 10
    } else if (cents >= 5) {
      coinsArray[2].quantity += 1 //nickels
      cents = cents -= 5
    } else if (cents >= 1) {
      coinsArray[3].quantity += 1 //pennies
      cents = cents -= 1
    }
  } while (cents > 0)

  return coinsArray
}

formatCurrency(-555)

module.exports = {
  formatCurrency,
  getCoins
}
