"use strict";
//already specifying type
//Syntax 1
let a = "23";
let newnum = 34;
let check;
let num; //has the type any -> no point to use in js
//Syntax 2
let d = "Hello"; //does the same thing
let e = "zero";
//Union Variable
let surname; //surname can be a number or string
surname = "Verma";
// or
surname = 34;
//functions
//func atomatically detects and assigns the return typemm to void
const func = (n, m) => {
    console.log(n);
    console.log(m);
};
//automatically assigns a return type of number as we are returning n*m
const func2 = (a, b) => {
    return a * b;
};
//automatically changes the return type to string as we are typecasting it
const func3 = (a, b) => {
    return String(a * b);
};
//note if we explicitly define the return type, we need to return the appropriate same type as well
//explicit return of func4 = number
const func4 = (c, d) => {
    return c * d; //returning number
};
