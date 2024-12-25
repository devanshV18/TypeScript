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
