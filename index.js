import { personArray, settingArray, actionArray } from "./data.js" 
import { handleIncrement, handleDecrement, generateRandomItem, numberOfParticipants, participants } from "./utils.js"

let selectedPersonArray = []
let containerHtml = ""
let isRendered = false

document.addEventListener("click", function(e) {
  if (e.target.id === "increment-btn") {
    handleIncrement()
  }
  else if (e.target.id === "decrement-btn") {
    handleDecrement()
  }
  else if (e.target.id === "render-btn") {
    if (!isRendered) {
      renderButtons()
    }
  }
  else if (e.target.id === "person-btn") {
    handlePersonClick()
  }
  else if (e.target.id === "new-round-btn") {
    startNewRound()
  }
})

function renderButtons() {
  for (let i = 0; i < numberOfParticipants; i++) {
    selectedPersonArray.push(generateRandomItem(personArray))
  }

  selectedPersonArray.forEach(function(person) {
    containerHtml += `
    <button class="scene-element-btn person-btn" id="person-btn">${person}</button>
    `
  })

  containerHtml += `
  <p>${changeConnectorText()}</p>
  <button class="scene-element-btn action-btn" id="action-btn">${generateRandomItem(actionArray)}</button>
  <p> in </p>
  <button class="scene-element-btn setting-btn" id="setting-btn">${generateRandomItem(settingArray)}</button>
  <button class="new-round-btn" id="new-round-btn">Start a new round</button>
  `

  document.getElementById("button-container").innerHTML = containerHtml
  isRendered = true
  document.getElementById("render-btn").style.display = "none"
}  

function changeConnectorText() {
  if (numberOfParticipants === 1) {
    return "is"
  } else {
    return "are"
  }
}

function startNewRound() {
  containerHtml = ""
  selectedPersonArray = []
  isRendered = false
  document.getElementById("render-btn").style.display = "inline-block"
  participants.textContent = numberOfParticipants
  document.getElementById("button-container").innerHTML = containerHtml
}
