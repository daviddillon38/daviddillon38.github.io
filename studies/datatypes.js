/* DATATYPES:

    there are several different datatypes in javascript that we use to categorize and look at data. 
    There are 2 types of data based on how they are structured and what they are used for (Simple, and Complex)
    */
    
    //Simple Data Types: a single data value with no additional propertys=> Number, String, Boolean, undefined
    var str = "hello"; //String
    var int = 5; // Number
    var bool = true; // Boolean
    var a = undefined; //undefined
    
    //Complex Data Types: a dynamic data value that has multiple propertys and functions built into it => Arrays, Objects
    var obj = {
        key1: "value1",
        key2: "value2"
    };
    
    var arr = [1,2,3,4,5];
    
    
    // For complex data types there are 2 ways to access data stored within them: bracket notation and dot notation
    
    //in terms of arrays bracket notation is the only way to access data stored in the variable
    console.log(arr[3]);
    //arr[3] -> 4
    
    //but for objects data can be accessed through either method
    console.log(obj.key1); // -> value1
    console.log(obj["key2"]); // -> value2
    
    //when using complex data types it is important to keep in mind that there are 2 ways the information is passed to the compiler:
    //copy by refrence and copy by value
    // copy by refrence sends a copy of the variable to where it is needed so the original stays unchanged weather it is modified or not,
    //while copy by value sends the variable itself to where it is needed and if it is modified it changes the value of the original variable
    var b = a; // <- copy by refrence: both point to the same adress in storage
    var c = "string"// copy by value: c is being assigned to a new set of information