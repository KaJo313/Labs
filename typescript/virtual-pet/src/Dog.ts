import VirtualPet from "./VirtualPet"

export default class Dog extends VirtualPet {
  play() {
    // overrides super class play() method
    if (this.happiness <= 85) {
      this.happiness += 15
    } else {
      this.happiness = 100
    }
    return this.happiness
  }
}
