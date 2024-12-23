"use strict";
//works fine -> auto detection
const obj = {
    height: 157,
    weight: 65
};
//Syntax1
const obj1 = {
    height: 165,
    weight: 65,
    gender: true
};
const obj2 = {
    height: 165,
    weight: 65,
    gender: false
};
//did not specify gender
const obj3 = {
    height: 170,
    weight: 73
};
const obj4 = {
    height: 180,
    weight: 81,
    gender: false
};
//gender optional
const obj5 = {
    height: 181,
    weight: 89,
    scholar: true,
    func: (n, m) => {
        console.log(n, m);
    }
};
