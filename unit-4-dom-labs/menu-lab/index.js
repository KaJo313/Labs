const menuSymbol = document.getElementById("menu-symbol")
const menu = document.getElementById("menu")
const lettersOption = document.getElementById("letters-option")
const numbersOption = document.getElementById("numbers-option")
const letters = document.getElementById("letters")
const numbers = document.getElementById("numbers")

menuSymbol.addEventListener("click", () => {
	console.log("Menu icon clicked!")
	menu.classList.toggle("hidden")
})

lettersOption.addEventListener("click", e => {
	e.preventDefault()
	letters.classList.add("visible")
	letters.classList.remove("hidden")
	numbers.classList.add("hidden")
	numbers.classList.remove("visible")
	menu.classList.add("hidden")
})

numbersOption.addEventListener("click", e => {
	e.preventDefault()
	numbers.classList.add("visible")
	numbers.classList.remove("hidden")
	letters.classList.add("hidden")
	letters.classList.remove("visible")
	menu.classList.add("hidden")
})
