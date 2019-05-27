let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

for(let i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ?  numSquares = 3 : numSquares =6;
		reset();
	});
}

function reset(){
	colors = generateRandomColors(numSquares);
	//PICK A NEW RANDOM COLOR FROM ARRAY 
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#7DBBC3";
} 

resetButton.addEventListener("click", function () {
	reset();
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function (){
		//grab color of clicked square
		let clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor); 
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#759199";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares 
	for(let i = 0; i < squares.length; i++){

	//change each color to match color
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length)
	return colors[random];
} 

function generateRandomColors(num){
	let arr = []
	for(let i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}
function randomColor() {
//pick a "red" from 0-255
let r = Math.floor(Math.random() * 256); 

//pick a "green" from 0-255
let g = Math.floor(Math.random() * 256); 

//pick a "blue" from 0-255
let b = Math.floor(Math.random() * 256); 

return "rgb(" + r + ", " + g + ", " + b + ")";
}