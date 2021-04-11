/*
LOOPS:

0. Loops are used to repeat a segment of code multiple times until it has ran a specified number of times or
   a certain condition is met.

1. There are two main kinds of loops that are used for different purposes: A while loop and a for loop*/

//WHILE LOOP - used to run code an unknown number of times until a condition is met making the conditional statment
//false e.g. the variable bool
var bool = true;

while(bool){
    console.log("the boolean is true!");
    bool = false;
}

//FOR LOOP - used to run code a very specific number of times that is usually prdetermined or already known
// e.g. the length of a string or an array

var arr = [1,2,3,4];
for(var i = 0; i < arr.length; i++){
    console.log("I have ran " +i+" times!");
}

//for-in loops are for loops that are used to iterate over am object
var object = {key1: "value1", key2: "value2"};
//logs to the console the propertys of the object
for(var key in object){
    console.log(object[key]);
}