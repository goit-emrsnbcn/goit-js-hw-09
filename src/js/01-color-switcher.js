function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	//#123456
}

const body = document.querySelector("body");
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let colorChangeInterval = null;
stopBtn.disabled = true;

function startColorChange() {
	colorChangeInterval = setInterval(() => {
		body.style.backgroundColor = getRandomHexColor();
		startBtn.disabled = true;
		stopBtn.disabled = false;
	}, 1000);
}

function stopColorChange() {
	clearInterval(colorChangeInterval);
	startBtn.disabled = false;
	stopBtn.diabled = true;
}

startBtn.addEventListener("click", startColorChange);
stopBtn.addEventListener("click", stopColorChange);
