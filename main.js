document.addEventListener('DOMContentLoaded', init);

function init() {
	let num1 = document.getElementById('num1');
	let num2 = document.getElementById('num2'); 
	let chosenOperator = document.getElementById('chosenOperator');
	let answer = document.getElementById('answer');
	
	num1.innerHTML = (Math.floor(Math.random()*100));
	num2.innerHTML = (Math.floor(Math.random()*100));
	
	let operator = "";
	
	let operatorGen = (Math.floor(Math.random()*4));
	
	switch (operatorGen) {
		case 0:
		operator = "+";
		break;
		case 1:
		operator = "-";
		break;
		case 2:
		operator = "*";
		break;
		case 3: 
		operator = "/";
		break;
	}

	chosenOperator.innerHTML = operator;
	
	answer.innerHTML = "_";
	
	let buttons = document.getElementsByClassName('button');
	
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', buttonClicked);
	 }
	 
	let btnClear = document.getElementById('btnClear');
	let btnSubmit = document.getElementById('btnSubmit');
	
	btnClear.addEventListener('click', btnClearClicked);
	btnSubmit.addEventListener('click', btnSubmitClicked);
};

function buttonClicked(event) {	
if (answer.innerHTML === "_") {
	answer.innerHTML = event.target.textContent;
} else {
	answer.innerHTML += event.target.textContent;
}

//alert(event.target.textContent);
};

function btnClearClicked() {
	init();
}

function btnSubmitClicked() {
	checkMath()
};

function checkMath() {
	var static1 = document.getElementById('num1').textContent;
	var static2 = document.getElementById('num2').textContent;
	var staticAnswer = document.getElementById('answer').textContent;
	
	let number1 = parseInt(static1);
	let number2 = parseInt(static2);
	let answerEntered = parseInt(staticAnswer);
	
	let correctSum =  number1 + number2;
	let correctDiff = number1 - number2;
	let correctMult = number1 * number2;
	let correctDiv = number1 / number2;
	
	let correctAnswer = 0;
	
	switch (document.getElementById('chosenOperator').innerHTML) {
		case "+":
		correctAnswer = correctSum;
		break;
		case "-":
		correctAnswer = correctDiff;
		break;
		case "*":
		correctAnswer = correctMult;
		break;
		case "/":
		correctAnswer = correctDiv;
		break;
	}
	if (answerEntered == correctAnswer) {
		console.log("Awesome! You win!");//
	} else {
		console.log("Wrong. Correct answer is: " + correctAnswer + "");
	}
	
	setTimeout(function(){ init(); }, 3000);
}

