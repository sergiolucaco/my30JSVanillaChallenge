function playSound(e){
	const audio = document.querySelector(`audio[data-sound="${e.keyCode}"]`);// to select the element that has an especific and dinamic attribute.
	const key = document.querySelector(`.keys[data-key = "${e.keyCode}`);// same case that before but selecting an element that has class name "keys"
	if(audio){
		audio.currentTime = 0;
		audio.play();
		key.classList.add('playing');// way to add classes in vanila JS.
	}
}

window.addEventListener("keydown", playSound);

function removeTransition(e){
	if(e.propertyName === 'transform'){
		return this.classList.remove('playing');
	}
}
const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));