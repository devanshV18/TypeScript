//objects and functions
var lol = function lol(n) {
    return n;
};
//STNTAX1 -> FUNCTION WITH OBJECTS
var getData = function (product) {
    console.log(product);
};
//the below syntax uses the type definition of our function to define a function taking an object an parameter with the structure of object defined above
var datatget = function (product) {
    console.log(product);
};
//SYNTAX USAGE
//DEFINIGN THE OBJECT
var productOne = {
    name: "Macbook",
    stock: 10,
    price: 99999,
};
//USING THE OBJECT IN FXN
datatget(productOne);
var productTwo = {
    name: "Macbook pro",
    stock: 20,
    price: 150000
};
datatget(productTwo);
//never type
// const err = new Error() //type error
//throw -> never
//return -> error
var errorHandler = function () {
    throw new Error();
};
var theme = "light";
var theme2 = "dark";
// const theme3:themeMode = "djdbnad" //givwes error as we can only assign light or dark to our variable as its type is set to themeMode
