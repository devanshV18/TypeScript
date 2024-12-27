import { useState, FormEvent, createContext } from "react"
// import Box from "./components/Box"



// props demonstration ;- 

// function App(){
//   return (
//     <>

//       <div>
//         <Box children = {<h1>Wow Nice</h1>}/>
//       </div>

//     </>
//   )
// }

// export default App


//note since we have defined the type of children props as ReactNode in Box component, we can use Box component as wrapper and send any component, string, etc wrapped around the box component and it will still be treated as children

// wrapper demonstration

// function App(){
//   return (
//     <>

//       <div>
//         <Box heading={"HELLO WORLD"} count={34}>
//           {/* anything written below inside the braces will be treated as choildren, we can send it as props too in a self closing tag also */}
//           {<button>Click</button>}
//         </Box>
//       </div>

//     </>
//   )
// }

// export default App


//Demonstrating Generic

// function App(){

//   const [val, setVal] = useState<string>("")

//   return (
//     <>

//       <div>
//         <Box label="Search" value = {val} setter={setVal}/>
//       </div>

//     </>
//   )
// }

// export default App





//form handling
// interface Person{
//   name: string
//   age: number
// }

// function App(){

//   const [user, setUser] = useState<Person>() //user can be person or undefined, to handle undefined add a dummy obj as initial value or use ! in prev operator as done below

//   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     console.log(user)
//   }

//   return (
//     <>
//       <div>
//         <form onSubmit={submitHandler}>

//           <input type="number"
//            value={user?.age || ""} //for maintaining type safety as initially the value changes from undefined to efined so we give an empty string by default
//            placeholder="Age"
//            onChange={ (e) => setUser((prev) => ({...prev!, age:Number(e.target.value) }))} //using the spread operator to use setUser as its an objec so we need to spread the entire existing obj (empty -> in case of first input and prev values in case we enter again) and then make changes using setUser in the age field
//           />

//           <input type="text"
//            value={user?.name || ""} //for maintaining type safety as initially the value changes from undefined to efined so we give an empty string by default
//            placeholder="Name"
//            onChange={ (e) => setUser((prev) => ({...prev!, name:(e.target.value) }))} //using the spread operator to use setUser as its an objec so we need to spread the entire existing obj (empty -> in case of first input and prev values in case we enter again) and then make changes using setUser in the name field
//           />

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   )
// }

// export default App




//use context in react with ts

type ThemeType = "light" | "dark"

interface ThemeContextType{
  theme: ThemeType,
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light", //default val
  toggleTheme: () => {}
})



function App(){
  return <div>Hello</div>
}

export default App