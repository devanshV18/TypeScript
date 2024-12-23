//already specifying type

//Syntax 1
let a:string = "23" 
let newnum:number = 34
let check:boolean

let num //has the type any -> no point to use in js

//Syntax 2
let d = <string>"Hello" //does the same thing
let e = <string>"zero"


//Union Variable
let surname:string|number //surname can be a number or string
surname = "Verma"
// or
surname = 34

//functions

//func atomatically detects and assigns the return typemm to void
const func = (n:number, m:number) => {
    console.log(n)
    console.log(m)
}

//automatically assigns a return type of number as we are returning n*m
const func2 = (a:number, b:number) => {
    return a*b
}

//automatically changes the return type to string as we are typecasting it
const func3 = (a:number, b:number) => {
    return String(a*b)
}

//note if we explicitly define the return type, we need to return the appropriate same type as well
//explicit return of func4 = number
const func4 = (c:number, d:number): number => {
    return c*d //returning number
} 


