"use strict";
//UserName can be defined into anything
let newName; //newName has a type of UserName i.e it can be a string or number.
// newName = undefined //gives error
newName = "Devansh"; //works
newName = 23; //works
//using this type definition of a function
//already defines the type of parameter and function return type as the type of function is defined as customtypefunction so we did not explicitly define the type of parameters
const newfunc = (p, q) => {
    return p * q; //only number can be returned as we have already specified in the defn
};
//ARRAYS
//SYNTAX1
//automatic detection
const arr = [12, "devansh", 36, 48]; //auto detects as array of number | string
const arr0 = [12, , 36, 48]; //auto detects as array of number
//type defining the array
const arr2 = [12, 45, 67]; //array of numbers only, if we add a string it gives error
const arr3 = ["as", "bs"]; //vice versa
//SYNTAX2
const arr4 = ["devansh", "verma", "hello"]; //an array of string
const arr5 = [1, 2, 3, 4, 5, 6]; //array of number
//explicit definiton of multiple datatype
const arr6 = ["devansh", 4, 5, 6, "verma", true]; //an array that contains string number and boolean values as explicitly defined
//fixed length array
const arr7 = [1, 5, 6]; //array of only 3 lenght with each entries type defined
