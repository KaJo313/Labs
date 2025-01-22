import Dog from "../src/Dog"
import Cat from "../src/Cat"
import VirtualPet from "../src/VirtualPet"
import { decay } from "../src/pet-functions"
import { makePet } from "../src/pet-functions"

describe("Tests Decay Function", () => {
  it("Checks Happiness & Hunger levels", () => {
    const virtualPet = new VirtualPet("Bisquit")
    virtualPet.happiness = 60
    virtualPet.hunger = 40
    decay(virtualPet)
    expect(virtualPet.happiness).toBe(55)
    expect(virtualPet.hunger).toBe(45)
  })
  it("Checks the Margins of Happiness & Hunger levels", () => {
    const virtualPet = new VirtualPet("Bisquit")
    virtualPet.happiness = 4
    virtualPet.hunger = 96
    decay(virtualPet)
    expect(virtualPet.happiness).toBe(0)
    expect(virtualPet.hunger).toBe(100)
  })
  it("Checks impact of multiple decay calls on Happiness & Hunger levels", () => {
    const virtualPet = new VirtualPet("Bisquit")
    virtualPet.happiness = 30
    virtualPet.hunger = 70
    decay(virtualPet)
    decay(virtualPet)
    decay(virtualPet)
    expect(virtualPet.happiness).toBe(15)
    expect(virtualPet.hunger).toBe(85)
  })
})

describe("Tests makePet Function", () => {
  it("Creates a Dog", () => {
    const name = "Rex"
    const type = "dog"
    const virtualPet = makePet(name, type)
    expect(virtualPet).toBeInstanceOf(Dog)
    expect(virtualPet.name).toBe("Rex")
  })
  it("Creates a Cat", () => {
    const name = "Missy"
    const type = "cat"
    const virtualPet = makePet(name, type)
    expect(virtualPet).toBeInstanceOf(Cat)
    expect(virtualPet.name).toBe("Missy")
  })
  it("Creates a Virtual Pet", () => {
    const name = "Sugar"
    const type = "horse"
    const virtualPet = makePet(name, type)
    expect(virtualPet).toBeInstanceOf(VirtualPet)
    expect(virtualPet.name).toBe("Sugar")
  })
})
