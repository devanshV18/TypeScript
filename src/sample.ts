//UserName can be defined into anything

// type UserName = 1 only string
type UserName = string | number //2 string or number

let newName:UserName //newName has a type of UserName i.e it can be a string or number.
// newName = undefined //gives error

newName = "Devansh" //works
newName = 23 //works

//obliviously as per let at this point newName has a number value 23 as it is updated, vut the point is that it can accept a string or a number value as per type definition UserName



//type defining a function

//the below line creates a function typr(note a function but a type of function) that takes two number as parameters and return a number too.
type customtypefunction = (a:number, b:number) => number


//using this type definition of a function


//already defines the type of parameter and function return type as the type of function is defined as customtypefunction so we did not explicitly define the type of parameters
const newfunc:customtypefunction = (p,q) => {
    return p*q //only number can be returned as we have already specified in the defn
}



//ARRAYS
//SYNTAX1

//automatic detection
const arr = [12,"devansh",36,48] //auto detects as array of number | string
const arr0 = [12,,36,48] //auto detects as array of number

//type defining the array
const arr2: number[] = [12,45,67] //array of numbers only, if we add a string it gives error
const arr3: string[] = ["as", "bs"] //vice versa

//SYNTAX2
const arr4:Array<string> = ["devansh", "verma", "hello"] //an array of string
const arr5:Array<number> = [1,2,3,4,5,6] //array of number

//explicit definiton of multiple datatype
const arr6:Array<number | string | boolean > = ["devansh", 4,5,6, "verma", true] //an array that contains string number and boolean values as explicitly defined


//fixed length array
const arr7 : [number,number,number] = [1,5,6] //array of only 3 lenght with each entries type defined
