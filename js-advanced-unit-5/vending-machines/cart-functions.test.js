const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem
} = require("./cart-functions")

describe("calculateChange(payment, total)", () => {
  it("calculates change from $6 payment made on $5 total", () => {
    expect(calculateChange(6, 5)).toBe(1)
  })
  it("calculates change from $13.03 payment made on $12.30 total", () => {
    expect(calculateChange(13.03, 12.3)).toBe(0.73)
  })
  it("calculates change from $8 payment for $12 total", () => {
    expect(calculateChange(8, 12)).toBe(-4)
  })
})

describe("isSufficientPayment(payment, total)", () => {
  it("determines if $6 payment is sufficient for $5 total", () => {
    expect(isSufficientPayment(6, 5)).toEqual(true)
  })
  it("determines if $7 payment is sufficient for $10 total", () => {
    expect(isSufficientPayment(7, 10)).toEqual(false)
  })
  it("determines if $3 payment is sufficient for $3 total", () => {
    expect(isSufficientPayment(3, 3)).toEqual(true)
  })
  it("determines if $6 payment is sufficient for $5.75 total", () => {
    expect(isSufficientPayment(6, 5.75)).toEqual(true)
  })
})

describe("calculateTotal(itemsArray)", () => {
  it("calculates total for one item priced at 4.99", () => {
    const itemsArray = [{ price: 4.99 }]
    expect(calculateTotal(itemsArray)).toBe(4.99)
  })
  it("calculates total for three items priced at 3.50, 12.99, 0.03", () => {
    const itemsArray = [{ price: 3.5 }, { price: 12.99 }, { price: 0.03 }]
    expect(calculateTotal(itemsArray)).toBe(16.52)
  })
  it("calculates total for an empty array as 0", () => {
    const itemsArray = [{ price: null }]
    expect(calculateTotal(itemsArray)).toBe(0)
  })
  it("calculates total for one item priced at -5.00", () => {
    const itemsArray = [{ price: -5.0 }]
    expect(calculateTotal(itemsArray)).toBe(-5.0)
  })
})

describe("addItem(itemsArray)", () => {
  it("adds an item Beans priced at $3 to an empty array", () => {
    const itemsArray = []
    addItem(itemsArray, "Beans", 3)
    expect(itemsArray).toEqual([{ name: "Beans", price: 3 }])
  })
  it("adds an item Sugar priced at $2 to an array with an object containing Beans", () => {
    const itemsArray = [{ name: "Beans", price: 3 }]
    addItem(itemsArray, "Sugar", 2)
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 }
    ])
  })
  it("adds an item Steak priced at $15 to an array with three objects", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Soda", price: 2.5 },
      { name: "Bananas", price: 1 }
    ]
    addItem(itemsArray, "Steak", 15)
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Soda", price: 2.5 },
      { name: "Bananas", price: 1 },
      { name: "Steak", price: 15 }
    ])
  })
})

describe("removeItem(itemsArray)", () => {
  it("removes the first element from an array with three elements", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Soda", price: 2.5 },
      { name: "Bananas", price: 1 }
    ]
    removeItem(itemsArray, 0)
    expect(itemsArray).toEqual([
      { name: "Soda", price: 2.5 },
      { name: "Bananas", price: 1 }
    ])
  })
  it("removes the last element from an array with three elements", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Soda", price: 2.5 },
      { name: "Bananas", price: 1 }
    ]
    removeItem(itemsArray, 2)
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Soda", price: 2.5 }
    ])
  })
  it("removes the middle element from an array with three elements", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Soda", price: 2.5 },
      { name: "Bananas", price: 1 }
    ]
    removeItem(itemsArray, 1)
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Bananas", price: 1 }
    ])
  })
  it("removes the only element from an array with one element", () => {
    const itemsArray = [{ name: "Steak", price: 15 }]
    removeItem(itemsArray, 0)
    expect(itemsArray).toEqual([])
  })
})
