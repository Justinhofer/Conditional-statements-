var numberoneEle = document.body.querySelector(".numberone");
var operatorEle = document.body.querySelector(".operator");
var numbertwoEle = document.body.querySelector(".numbertwo");
var sumEle = document.body.querySelector(".sum");

var numberonePrompt = Number(prompt("Enter the first number"));
var operatorPrompt = prompt("Enter the operator");
var numbertwoPrompt = Number(prompt("Enter the second number"));

var summation = numberonePrompt + numbertwoPrompt;

numberoneEle.innerHTML= "The number " + numberonePrompt;
operatorEle.innerHTML= operatorPrompt
numbertwoEle.innerHTML= "and the number " + numbertwoPrompt;
sumEle.innerHTML= "is equal to " + summation;

if(!isNaN(numberonePrompt)){
  numberoneEle.innerHTML= numberonePrompt;
}else{
  numberoneEle.innerHTML="You must enter a number! Try again";
}

if(!isNaN(numbertwoPrompt)){
  numbertwoEle.innerHTML= numbertwoPrompt
}else{
  numbertwoEle.innerHTML= "You must enter a number! Try again";
  sumEle.innerHTML="Equation unsolvable. Please try again"
}