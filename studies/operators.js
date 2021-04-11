/*OPERATORS:

operatiors are used to manipulate different kinds of data or compare it.

There are several different kinds of operators:
*/

//Arithmetic Operators (+,-,/,%,*) - these are used to manipulate data and change the property being stored inside
// a variable e.g. doing math or editing the elements in a string

var i = 1;
var y = 3;
var x = x+i; // => 4

//Assignment Operators ((=,+=,-=,*=,/=,%=)) - these are used to take a variable and give it a a value
//or set of information. The operators with the arithmetic operators infront of them are both operators together,
//acting to preform a calculation while assigning.
var g =0;
g += 3;

//Comparison operators - used in conditional statments meant to test 2 values against eachother and return weather
// or not the statment is true or false
/*
 ==      // equal to
  ===     // exactly equal to (value and type)
  !=      // not equal to
  >       // greater
  <       // less
  >=      // greater than or equal to
  <=      // less than or equal to
*/

if(x === y){
    console.log("x is equal to y!");
}

//Logical Operators - used in conjunction with Comparison Operators to test for 
//multiple cases at a time ( && // and || // or ! // not)
//

if(x===y && i !== 3){
    return true;
}

//unary operators are operators that only need one value to operate
//examples
g++;
g--;

//ternary operators are operators that take 3 values
//one example of this is an easier way to write an if/else statment

var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"