const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')
const suggestionBtn = document.querySelector('#suggestion-button')
const suggestionField = document.querySelector('#suggestion-field')

function favoriteColor(){
    alert("My favorite color is blue")
}

function favoritePlace(){
    alert("My favorite place to be is home")
}

function favoriteRitual(){
    alert("My favorite ritual is playing Overwatch")
}

function suggestion(){
    suggestionField.textContent = ''
    alert('Thanks for the suggestion!')
}

colorBtn.addEventListener('click', favoriteColor)
placeBtn.addEventListener('click', favoritePlace)
ritualBtn.addEventListener('click', favoriteRitual)
suggestionBtn.addEventListener('click', suggestion)


