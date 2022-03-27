console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const catImg = document.querySelector('img')
function imgAlert(){
	alert("You also have refined taste in music.")
}

catImg.addEventListener('mouseover', imgAlert)