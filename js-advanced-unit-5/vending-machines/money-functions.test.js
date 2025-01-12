const { formatCurrency, getCoins } = require("./money-functions")

describe("formatCurrency(amount)", () => {
  it("formats $0.00 Currency", () => {
    expect(formatCurrency(0)).toBe("$0.00")
  })
  it("formats $1.00 Currency", () => {
    expect(formatCurrency(1)).toBe("$1.00")
  })
  it("formats $1.50 Currency", () => {
    expect(formatCurrency(1.5)).toBe("$1.50")
  })
  it("formats $0.01 Currency", () => {
    expect(formatCurrency(0.01)).toBe("$0.01")
  })

  it("formats $527.68 Currency", () => {
    expect(formatCurrency(527.6789)).toBe("$527.68")
  })
  it("formats -$1.00 Currency", () => {
    expect(formatCurrency(-1)).toBe("-$1.00")
  })
  it("formats -$124.00 Currency", () => {
    expect(formatCurrency(-123.999)).toBe("-$124.00")
  })
  it("formats 'Not a Number' Currency", () => {
    expect(formatCurrency("Character")).toBe("Not a Number")
  })
})

describe("getCoins(amount)", () => {
  it("gets 32 cents worth of coins", () => {
    expect(getCoins(0.32)).toEqual([
      { name: "quarters", quantity: 1 },
      { name: "dimes", quantity: 0 },
      { name: "nickels", quantity: 1 },
      { name: "pennies", quantity: 2 }
    ])
  })
  it("gets 10 cents worth of coins", () => {
    expect(getCoins(0.1)).toEqual([
      { name: "quarters", quantity: 0 },
      { name: "dimes", quantity: 1 },
      { name: "nickels", quantity: 0 },
      { name: "pennies", quantity: 0 }
    ])
  })
  it("gets 27 cents worth of coins", () => {
    expect(getCoins(0.27)).toEqual([
      { name: "quarters", quantity: 1 },
      { name: "dimes", quantity: 0 },
      { name: "nickels", quantity: 0 },
      { name: "pennies", quantity: 2 }
    ])
  })
  it("gets 68 cents worth of coins", () => {
    expect(getCoins(0.68)).toEqual([
      { name: "quarters", quantity: 2 },
      { name: "dimes", quantity: 1 },
      { name: "nickels", quantity: 1 },
      { name: "pennies", quantity: 3 }
    ])
  })
})
