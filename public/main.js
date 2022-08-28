const form = document.querySelector("#form")
const h2ForName = document.querySelector("#namePlace")
const rapName = document.querySelector("#rapName")
const rapperName = document.querySelector("#rapperName")

rapperName.addEventListener("focus", () => {
  h2ForName.classList.add("hidden")
})
form.addEventListener("submit", getRapName)

async function getRapName(e) {
  e.preventDefault()
  const inputBox = document.querySelector("#rapperName")
  const rapperName = inputBox.value.toLowerCase()
  inputBox.value = ""
  if (!rapperName) {
    console.log("Give me something, dawg!")
    return
  }
  const URL = `https://rapsupreme-api.herokuapp.com/api/${rapperName}`
  const fetchRapObject = await fetch(URL)
  const rapObject = await fetchRapObject.json()
  displayName(rapObject.birthName)
}

function displayName(name) {
  rapName.innerHTML = name
  h2ForName.classList.remove("hidden")
}
