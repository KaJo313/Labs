import Cat from "../src/Cat"
import VirtualPet from "../src/VirtualPet"

describe("A Cat's Properties Are Initialized", () => {
  it("A Cat has a Name and Color", () => {
    const virtualCat = new Cat("Kittie", "blonde")
    expect(virtualCat.name).toBe("Kittie")
    expect(virtualCat.color).toBe("blonde")
  })
  it("A Cat's Hunger level is initialized to 50", () => {
    const virtualCat = new Cat("Kittie", "blonde")
    expect(virtualCat.hunger).toBe(50)
  })
  it("A Cat's Happiness level is initialized to 50", () => {
    const virtualCat = new Cat("Kittie", "blonde")
    expect(virtualCat.happiness).toBe(50)
  })
})
describe("A Cat's Attitude", () => {
  it("A Cat's Attitude is Inquisitive if positive", () => {
    const virtualCat = new Cat("Peekaboo", "black")
    virtualCat.happiness = 70
    virtualCat.hunger = 30
    expect(virtualCat.getAttitude()).toBe("inquisitive")
  })
  it("A Cat's Attitude is Grumpy if negative", () => {
    const virtualCat = new Cat("Peekaboo", "black")
    virtualCat.happiness = 40
    virtualCat.hunger = 60
    expect(virtualCat.getAttitude()).toBe("grumpy")
  })
  it("A Cat's Attitude is Grumpy if neutral", () => {
    const virtualCat = new Cat("Peekaboo", "black")
    virtualCat.happiness = 30
    virtualCat.hunger = 30
    expect(virtualCat.getAttitude()).toBe("grumpy")
  })
})

describe("VirtualPet Descriptions", () => {
  it("Describes Cat w/str of Name, Happiness, Hunger, Color, and Attitude", () => {
    const virtualCat = new Cat("Jingle", "grey")
    expect(virtualCat.describe()).toBe(
      "Name: Jingle, Happiness: 50, Hunger: 50, Color: grey, Attitude: grumpy"
    )
  })

  it("Describes Second Cat Str of Name, Happiness, Hunger, Color, and Attitude", () => {
    const virtualCat = new Cat("Peekaboo", "black")
    virtualCat.happiness = 75
    virtualCat.hunger = 35
    expect(virtualCat.describe()).toBe(
      "Name: Peekaboo, Happiness: 75, Hunger: 35, Color: black, Attitude: inquisitive"
    )
  })
})
