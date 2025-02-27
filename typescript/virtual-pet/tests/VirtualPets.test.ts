import VirtualPet from "../src/VirtualPet"

describe("VirtualPet Properties Are Initialized", () => {
  it("A VirtualPet has a Name", () => {
    const virtualPet = new VirtualPet("Scruffy")
    expect(virtualPet.name).toBe("Scruffy")
  })
  it("A Second VirtualPet has a Name", () => {
    const virtualPet2 = new VirtualPet("Betty")
    expect(virtualPet2.name).toBe("Betty")
  })
  it("A VirtualPet's Hunger level is initialized to 50", () => {
    const virtualPet = new VirtualPet("Scruffy")
    expect(virtualPet.hunger).toBe(50)
  })
  it("A Second VirtualPet's Hunger level is initialized to 50", () => {
    const virtualPet2 = new VirtualPet("Betty")
    expect(virtualPet2.hunger).toBe(50)
  })
  it("A VirtualPet's Happiness level is initialized to 50", () => {
    const virtualPet = new VirtualPet("Scruffy")
    expect(virtualPet.happiness).toBe(50)
  })
  it("A Second VirtualPet's Happiness level is initialized to 50", () => {
    const virtual2Pet = new VirtualPet("Betty")
    expect(virtual2Pet.happiness).toBe(50)
  })
})

describe("VirtualPet Methods", () => {
  it("Describes VirtualPet with Str of Name, Happiness & Hunger", () => {
    const virtualPet = new VirtualPet("Scruffy")
    expect(virtualPet.describe()).toBe("Name: Scruffy, Happiness: 50, Hunger: 50")
  })
  it("Describes Second VirtualPet with Str of Name, Happiness & Hunger levels", () => {
    const virtualPet = new VirtualPet("Ralph")
    virtualPet.happiness = 60
    virtualPet.hunger = 40
    expect(virtualPet.describe()).toBe("Name: Ralph, Happiness: 60, Hunger: 40")
  })
  it("Gets Satisfaction level by calculating Happiness minus Hunger", () => {
    const virtualPet = new VirtualPet("Scruffy")
    expect(virtualPet.getSatisfaction()).toBe(0)
    virtualPet.happiness = 80
    virtualPet.hunger = 20
    expect(virtualPet.getSatisfaction()).toBe(60)
  })
  it("Gets Satisfaction level of Pet 2 by calculating Happiness minus Hunger", () => {
    const virtualPet = new VirtualPet("Ralph")
    expect(virtualPet.getSatisfaction()).toBe(0)
    virtualPet.happiness = 40
    virtualPet.hunger = 60
    expect(virtualPet.getSatisfaction()).toBe(-20)
  })
  it("Make's a Virtual Pet Sound", () => {
    const virtualPet = new VirtualPet("Harry")
    const virtualPetSound = "Yelp!"
    expect(virtualPet.makeSound(virtualPetSound)).toBe("Harry says Yelp!")
  })
  it("Make's a Virtual Pet Sound for Virtual Pet 2", () => {
    const virtualPet = new VirtualPet("Sally")
    const virtualPetSound = "Grrrr!"
    expect(virtualPet.makeSound(virtualPetSound)).toBe("Sally says Grrrr!")
  })
})

describe("Implement VirtualPet Methods That Modify Properties", () => {
  it("Feeds the Virtual Pet once to reduce hunger", () => {
    const virtualPet = new VirtualPet("Bosley")
    virtualPet.hunger = 70
    expect(virtualPet.feed()).toBe(60)
  })
  it("Feeds the Virtual Pet once to reduce hunger that's already below 10", () => {
    const virtualPet = new VirtualPet("Bosley")
    virtualPet.hunger = 8
    expect(virtualPet.feed()).toBe(0)
  })
  it("Feeds the Virtual Pet multiple times to reduce hunger", () => {
    const virtualPet = new VirtualPet("Bosley")
    virtualPet.hunger = 39
    expect(virtualPet.feed()).toBe(29)
    expect(virtualPet.feed()).toBe(19)
    expect(virtualPet.feed()).toBe(9)
  })

  it("Plays with Virtual Pet once to increase happiness", () => {
    const virtualPet = new VirtualPet("Stan")
    virtualPet.happiness = 70
    expect(virtualPet.play()).toBe(80)
  })
  it("Plays with Virtual Pet once to increase happiness level already above 90", () => {
    const virtualPet = new VirtualPet("Stan")
    virtualPet.happiness = 93
    expect(virtualPet.play()).toBe(100)
  })
  it("Plays with Virtual Pet multiple times to increase happiness", () => {
    const virtualPet = new VirtualPet("Stan")
    virtualPet.happiness = 71
    expect(virtualPet.play()).toBe(81)
    expect(virtualPet.play()).toBe(91)
    expect(virtualPet.play()).toBe(100)
  })
})
