/* Multiplication*/


var multiply = function(number1, number2, number3){
	return number1 * number2 * number3;
};
var number1 = parseInt(prompt("Enter a number for multiplication"));
var number2 = parseInt(prompt("Enter a second number"));
var number3 = parseInt(prompt("Enter a third number"));
alert("multiplication = " + multiply(number1, number2, number3));

//subtraction//
var subtraction = function(number1, number2, number3){
return number1-number2-number3;
};
var number1= parseInt(prompt("Enter a number for subtraction"));
var number2 = parseInt(prompt("Enter a second number"));
var number3 = parseInt(prompt("Enter a third number"));
alert("subtraction = " + subtraction(number1,number2,number3));


/*Addition*/
var add = function(number1, number2, number3){
  return number1+number2+number3;
};
var number1 = parseInt(prompt("Enter first number for addition"));
var number2 = parseInt(prompt("Enter second number"));
var number3 = parseInt(prompt("Enter third number"));
alert("addition = " + add(number1, number2, number3));


/*Division*/
var division = function(number1, number2, number3){
return number1/number2/number3;
};
var number1= parseInt(prompt("Enter a number for division"));
var number2 = parseInt(prompt("Enter a second number"));
var number3 = parseInt(prompt("Enter a third number"));
alert("division = " + division(number1,number2,number3));
