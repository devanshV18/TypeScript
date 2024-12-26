//DOM MANIPULATION

//type assertion -> dont give the control to ts

//SYNTAX1 -> BELOW LINE TREATS BTTN AS AN HTMLELEMENT OR NULL
const bttn = document.getElementById("btn") as HTMLElement //type assertion //type of entity -> HTML element | null

//SYNTAX 2 -> BELOW LINE TREATS BTTN2 ONLY AND ONLY AS HTMLELEMENT 
const bttn2 = <HTMLElement> document.getElementById("btn")


//SYNTAX3 ->
const bttn3 = document.getElementById("btn")! //treats bttn3 as an html element only


const img = document.getElementById("imgmy") as HTMLImageElement //type assertion as HTML image element now we can use attributes of image element with the img variable


const img2 = document.querySelector("img") //by using query selector, we dont need to use type assertion as it already knows the type of element -> hover to check, also it can be null still which can be dealt using !


const form = document.getElementById("myform") as HTMLFormElement
const input = document.querySelector("form > input") as HTMLInputElement

//a brief example of dom manipulation : -

form.onSubmit = (e:SubmitEvent) => {
    e.preventDefault()
    const val = Number(input.value)

    //crating a new html element
    const h2 = document.createElement("h2")
    h2.textContent = String(val + 20)

    //appending the created element to the body
    const body = document.querySelector("body")
    body?.append(h2)
}

//cann also use type
interface Person {
    name: string
    email: string
}

const myObj: Person = {
    name: "Devansh",
    email:"devanhsverma@google.dev"
}

console.log(myObj)
console.log(myObj.email)
console.log(myObj.name)

//in case of looping an array of objects

const getName = (): string => {
    return myObj["name"]
}

const getEmail = ():string => {
    return myObj["email"]
}

//a common function to get email and name from object -> problem case

// const getDatafrom = (key:string) : string => {
    // return myObj[key] //this poses a problem
// }


//solution1 -> index signature
interface PersonNew {
    [key:string]: string
}

const myObjNew: PersonNew = {
    name: "Verma",
    email: "abndfa@fsan"
}

//works fine -> this works well but it can fail if user/developer tries to access a key which is not present in the object.
//in this case we can either simply handle the situation using if else that if key exists only then return the value or else we can use the third method below
const getDatafrom = (key:string) : string => {
    return myObjNew[key]
}


//impractical method -> but works
interface PersonNew2 {
    name: string,
    email: string
}

const myObjNewAgain: PersonNew2 = {
    name: "Verma",
    email: "abndfa@fsan"
}

//this time no problem occurs in fxn as we know either name or email could be passed. -> the error might occur if we call the function with a parameter that simply is not specified
const getDataAgain = (key: "email" | "name"): string => {
    return myObjNewAgain[key]
}

// the above method is obviously impractical as we cannot specify all the keys in the interface and then use them in the function. -> so we use the third method below


//key of operator method

// now the below mthod automatically knows the keys of the object and we can use them in the function
const getDataKeyOf = (key: keyof PersonNew2): string => {
    return myObjNewAgain[key]
}

//extra bits
const key = "name"
myObjNewAgain[key] //this will give no error


//error case -> using let

let keyNew = "name"
// myObjNewAgain[keyNew] //this gives error

//fix -> use type assertion
myObjNewAgain[keyNew as keyof PersonNew2] //this works fine as we specify the let variable keyNew is to be trated as a keyof PersonNew2 interface
//or -> when we dont have an access to the interface PersonNew2 (ex -> APi data which is an array of objects)
myObjNewAgain[keyNew as keyof typeof myObjNewAgain] //this also works fine as we specify the let variable keyNew is to be trated as a keyof PersonNew2 interface