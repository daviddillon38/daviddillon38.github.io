/*
 String Manipulation:
 
 Strings have indexes similarly to arrays so they can be disected and modified to what specifications necessary.
 Strings are mainly manipulated using prewritten functions to help make the process easier
 
 
 */
 
 //examples:
var str = "The dog barked at the mailman"
str = str.slice(7); //=> "barked at the mailman"

//Strings can also be used with arithmatic operators to join or separate
var str2 = 'the sun';
var str3 = 'is shining today';
var final = str2 +' '+str3; // => "the sun is shining today"

//strings have many built-in methods: here are a few examples
charAt(index) // Returns the character at the specified index (position)
charCodeAt(index) // Returns the Unicode of the character at the specified index
concat(str1,[...]) // Joins two or more strings, and returns a new joined strings
endsWith(searchVal,[length]) // Checks whether a string ends with specified string/characters
fromCharCode(n1,[...]) // Converts Unicode values to characters
includes(searchVal,[start]) // Checks whether a string contains the specified string/characters