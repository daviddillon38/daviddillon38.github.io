/*CONTROL FLOW

Control flow is the order in which items in which a program are executed and processed. Knowing this order
allows programmers to track what their program is doing and know where things go wrong or what something should produce.
The control flow will always read right to left on a singluar line of code then move to the next line down.

*/
//This code will first read the function add but know not to execute it because it has not been called yet, once
// it reaches the while loop it will go between putting the new variable into the function and returning it to 
//check if it still meets the requirements necessary to make the while loop run another time.
function add(x,y){
    return x+y;
}

var a = 3
while(a<10){
    console.log(add(a,3));
}
//conditional statments have different parts in which they are read and execute
var bool = true;


if(bool === true){// the contitional statment first checks to see if the condition in parenthesis equates to true then will either run
                 // the block of code dependant on the result
//if it does equate to being true then the code below will execute
    console.log("true");
}

// a switch is a conditional statment that can check for multiple outcomes of an input at the same time
// but a switch needs a break to tell the code when to stop executing

//if the input equates to any of the "case" variables then it will execute the code associated with it
// the default case is for when none of the conditions are met, the code will "default" to that
//a default case is not needed for a switch statment to run
switch("x") {
  case "x":
    // code block
    break;
  case "y":
    // code block
    break;
  default:
    // code block
}