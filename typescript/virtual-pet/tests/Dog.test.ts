import Dog from "../src/Dog"
import VirtualPet from "../src/VirtualPet"

describe("Dog's Properties Are Initialized", () => {
  it("A Dog has a Name", () => {
    const virtualDog = new Dog("Owen")
    expect(virtualDog.name).toBe("Owen")
  })
  it("Play with Dog once to increase happiness", () => {
    const virtualDog = new Dog("Owen")
    virtualDog.happiness = 70
    expect(virtualDog.play()).toBe(85)
  })
  it("Play with Dog once to increase happiness level already above 85", () => {
    const virtualDog = new Dog("Owen")
    virtualDog.happiness = 91
    expect(virtualDog.play()).toBe(100)
  })
  it("Play with Dog multiple times to increase happiness", () => {
    const virtualDog = new Dog("Owen")
    virtualDog.happiness = 60
    expect(virtualDog.play()).toBe(75)
    expect(virtualDog.play()).toBe(90)
    expect(virtualDog.play()).toBe(100)
  })
})
