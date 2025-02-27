import VirtualPet from "./VirtualPet"

export default class Cat extends VirtualPet {
  color: string
  constructor(name: string, color: string) {
    super(name)
    this.color = color
  }

  getAttitude() {
    if (super.getSatisfaction() > 0) {
      return "inquisitive"
    } else {
      return "grumpy"
    }
  }

  describe(): string {
    const firstPortion = super.describe()
    const secondPortion = `, Color: ${this.color}, Attitude: ${this.getAttitude()}`
    return firstPortion + secondPortion
  }
}
