/*FUNCTIONS:

    functions are used as bits of code that have an input and an output that are meant to be used multiple times
    whenever needed. They help programmers because it allows them to not have to write the same code 
    over and over again. Functions can take in any kind of information, manipulate it, and give the new information
    back where it came from. To give the modified data back where it needs to go the function uses a return statment
    to give the finished product back where it came from.
    
*/

function add(x,y){
    return x + y;
}

//calling a function can be done by using the name of the function

console.log(add(3,5)) // will print 8 to the console

//a function an also be written using a function expression which assigns a function to a variable

var multiply = function(x,y){
    return x*y;
};

//functions can also access variables outside of their scope, using hoisting
//hoisting is moving the declarations to the top of the current scope

var a = 6;
add(a,b);
var b = 1;

// this wont produce an error because b is hoisted to be initialized before the function is called