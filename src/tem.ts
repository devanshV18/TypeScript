//WHy generic is needed?

//Generics in TypeScript

// Generics are a powerful feature in TypeScript that allows you to write more flexible and reusable code. They enable you to create components that work with a wide range of data types without sacrificing type safety.   

// Why are generics needed?

// Type Safety:

// Without generics, you might need to write separate functions or classes for each data type you want to work with. This leads to code duplication and increases the risk of errors.   
// Generics allow you to define a single component that can handle different data types while maintaining type safety. The compiler can still check for type mismatches and provide helpful error messages.   
// Code Reusability:

// Generics make your code more flexible and reusable. You can create generic components that can be used with various data types, reducing the need to write similar code repeatedly.   
// Improved Readability:

// By using generic type parameters, you can make your code more expressive and easier to understand. The type parameters clearly indicate the expected types of data that a component can handle.   


// i know that i have to send a parameter of number type so below syntax works
const funcNaya = (n:number) => {
    return n
}

const ans = funcNaya(20)


// when i am unknown or un assertive about the type of parameter i have to pass

//this works but using any dissolves the entire point of using typescript
const merafunc = (n:any) => {
    return n
}


//solution -> make the function generic -> basically tht CustomType is a type which will take the type of variable passed. i.e. if a number is passed, customtype takes the type number, same goes for string, boolean etc
//NOTE -> we can name the type anything like T, Q, CustomType etc
const myGenericFunc = <CustomType>(n: CustomType): CustomType => {
    const test: CustomType = n; //storing the customtype parameter being sent in a custom type variable (Kind of a placeholder)
    return n
}


//VVVII -> WHEN WE PASS A TYPE OD DATA THAT IS PROVIDED OR AVAILABLE IN ts -> NO pROBLEM  EX - STRING NUM BOOLEAN ETC, t, CUSTOMTYPE AUTOMATICALLLY RESOLVES IT
const ans2 = myGenericFunc(20)
const ans3 = myGenericFunc("Devansh")
const ans4 = myGenericFunc(true)

//PASSING A CUSTOM DATA TYPE

type Petronas = {
    name: string,
    age: number
}

const petronasObj:Petronas = {
    name: "Lweis",
    age: 38
}

const customgenericfunc = <T>(n:T): T => {
    return n
}

const ans5 = customgenericfunc(petronasObj)
// ans5. now we can even access the name and age field using dot as ans5 is resolved with the type we specified


//third party api case when we dont know the type
//this time ans6 is converted to string
const ans6 = customgenericfunc<string>("PetronasObj") //now ans6 contains a string as we are explicitly resolving it as string, so the parameter paassed should also be of string type only.
//OR
//better practice
//ans7 is again of type Petronas
const ans7 = customgenericfunc<Petronas>(petronasObj) //better practice to specify the expected type


//example 2 : VVVVVIIIII

const genericexample = <T,U>(n: T, o:U)=> {
    // return n+o //cant do this as we are not sure if they will be concatanable or addable
    return {n,o}
}

const ans8 = genericexample<number, string>(20, "Lol") //specified that n that is of type T should be a string and o that is of type U should be a number and as per function we are simply returning them as object.
//note -> in this case ans8 cant access n and o using dot operator, to enable that we need to specify the return type of genericexample functiona as : {n:T, o:U} explicityly



//using extend keyword

const extendgeneric = <T, U extends T>(n:T, o:U): {n:T, o:U} => {
    return {n,o}
}


//now we cant randomly assign types to T and U i.e -> genericexample<number, string> = randomly assigneed number (T) and string (U), 

const ans9 = extendgeneric<number,number>(20,40) //now since U is extending T we can only pass a number to it, its just like adding a bit more limitations

//example 3 -> more clarity on extend

type Human = {
    name: string,
    weight: number
}

type Human2 = {
    name: string,
    weight: number,
    age: number
}

const humanop: Human = {
    name: "Devansh",
    weight: 65
}


const humanop2: Human2 = {
    name: "Devansh",
    weight: 65,
    age: 22
}
const extendgenericHuman = <T, U extends T>(n:T, o:U): {n:T, o:U} => {
    return {n,o}
}

const ans10 = extendgenericHuman<Human,Human2>(humanop, humanop2)


//more complex example

type Humanoid = {
    name: string,
    weight: number
}

const humans:Humanoid[] = [
    {
        name: "Devansh",
        weight: 65
    },
    {
        name: "Abhishek",
        weight: 70
    },
    {
        name: "Tillu",
        weight: 75
    },
    {
        name: "Bhanu",
        weight: 80
    }
]

const filtrByPeoples = <T, K extends keyof T>(arr: T[], property:K,value:T[K]): T[]  => {
    
    return arr.filter((item) => item[property] === value)
}

const filteredPeopleByName = filtrByPeoples(humans, "name", "Nahar")

//Break down of above function :- 
// 1. specifying the first parameter to be of type array of T i.e an array of humans(objects)
//2. specifying K to be the keyof T, where T is -> type humans -> so theore fore should be key of humans type. -> therefore with such specification that property can be kry of human type object => we asserted that property can only be name or weight
//3. value is the the target i.e humans["name"], humans["age"], therefore =>
// when we specify property as "name", value becomes T[K] i.e. humans[name] -> hence we can pass only the right datatype in value to match 
//4. Making the above function completely generic = its overhelming and this logic can also be performed without using generic but to demonstrate.






























