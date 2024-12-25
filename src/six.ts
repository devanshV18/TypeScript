//objects and functions

type funcType = (n:number) => number

const lol:funcType = function lol(n){
    return n
}

//STNTAX1 -> FUNCTION WITH OBJECTS
const getData = (
    product:{
    name:string,
    stock: number,
    price: number
    }): void => {
        console.log(product)
    }


    //SYNTAX2 -> 
    //the below syntax is used to define the type of the function
    type GetDataType = (product:{
        name:string,
        stock: number,
        price: number
    }) => void

    //the below syntax uses the type definition of our function to define a function taking an object an parameter with the structure of object defined above
    const datatget:GetDataType = (product) => {
        console.log(product)
    }


    //SYNTAX USAGE

    //DEFINIGN THE OBJECT
    const productOne: {
        name: string,
        stock: number,
        price: number
    } = {
        name: "Macbook",
        stock: 10,
        price: 99999,
    }

    //USING THE OBJECT IN FXN
    datatget(productOne)


    //BETTER WAY
    //can be done using type definition also
    interface Product {
        name: string,
        stock: number,
        price: number
    }

    const productTwo: Product = {
        name: "Macbook pro",
        stock: 20,
        price: 150000
    }

    datatget(productTwo)


    //never type

    // const err = new Error() //type error


    //throw -> never
    //return -> error
    const errorHandler = ():never => {
        throw new Error()
    }

    //type aliasiing a variable

    type themeMode = "light" | "dark"

    const theme:themeMode = "light"
    const theme2:themeMode = "dark"
    // const theme3:themeMode = "djdbnad" //givwes error as we can only assign light or dark to our variable as its type is set to themeMode
