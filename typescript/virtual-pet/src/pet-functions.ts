import Cat from "./Cat"
import Dog from "./Dog"
import VirtualPet from "./VirtualPet"

export const decay = (pet: VirtualPet) => {
  pet.hunger = Math.min(100, pet.hunger + 5)
  pet.happiness = Math.max(0, pet.happiness - 5)
}

export const makePet = (name: string, type: string) => {
  if (type === "dog") {
    return new Dog(name)
  } else if (type === "cat") {
    return new Cat(name, "black")
  } else {
    return new VirtualPet(name)
  }
}
