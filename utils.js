let numberOfParticipants = 1
const participants = document.getElementById("number")


function handleIncrement() {
  if (numberOfParticipants < 4) {
    numberOfParticipants += 1
  }
  else if (numberOfParticipants > 3) {
    return false
  }
  participants.textContent = numberOfParticipants
}

function handleDecrement() {
  if (numberOfParticipants <= 1) {
    return false
  } else if (numberOfParticipants > 1) {
    numberOfParticipants -= 1
  }
  participants.textContent = numberOfParticipants
}

function generateRandomItem(array) { 
  let randomItem = array[Math.floor(Math.random() * array.length)]
  return randomItem
}

export {handleIncrement, handleDecrement, generateRandomItem, numberOfParticipants, participants}