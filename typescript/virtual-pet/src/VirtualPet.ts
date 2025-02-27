export default class VirtualPet {
  name: string
  hunger: number
  happiness: number

  constructor(n: string) {
    this.name = n
    this.happiness = 50
    this.hunger = 50
  }
  describe() {
    return `Name: ${this.name}, Happiness: ${this.happiness}, Hunger: ${this.hunger}`
  }

  getSatisfaction() {
    return this.happiness - this.hunger
  }

  makeSound(sound: string) {
    const givenSound = sound
    return `${this.name} says ${givenSound}`
  }

  feed() {
    if (this.hunger >= 10) {
      this.hunger -= 10
    } else {
      this.hunger = 0
    }
    return this.hunger
  }

  play() {
    if (this.happiness <= 90) {
      this.happiness += 10
    } else {
      this.happiness = 100
    }
    return this.happiness
  }
}
