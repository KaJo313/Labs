const main = () => {
	const growMe = document.getElementById("grow-me")
	growMe.classList.add("big")

	const shrinkMe = document.getElementById("shrink-me")
	shrinkMe.classList.remove("big")

	const listItems = document.querySelectorAll("li")

	listItems.forEach(item => {
		console.log(item.textContent)
	})

	const anchor = document.querySelector(".link")
	anchor.setAttribute("href", "https://www.example.com")
	anchor.textContent = "somewhere"

	const hideMeTag = document.getElementById("hide-me")
	hideMeTag.style.display = "none"

	const showMeTag = document.getElementById("show-me")
	showMeTag.style.display = "block"

	const nameTag = document.getElementById("name")
	const h1Container = document.querySelector("h1")
	const nameText = nameTag.value

	h1Container.textContent = `Welcome ${nameText}!`
}
