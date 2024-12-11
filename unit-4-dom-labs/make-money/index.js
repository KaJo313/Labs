const form = document.getElementById("form")

form.addEventListener("submit", e => {
  e.preventDefault()

  const quantityInput = document.getElementById("quantity").value
  const coinType = document.getElementById("type").value

  for (let i = 0; i < quantityInput; i++) {
    addCircle(coinType)
  }

  document.getElementById("quantity").value = ""
})

const addCircle = coinText => {
  const div = document.createElement("div")
  div.className = "circle"
  div.textContent = coinText
  div.onclick = () => div.remove()
  document.getElementById("more").appendChild(div)
}
