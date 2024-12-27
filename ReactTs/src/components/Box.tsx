import { Dispatch, SetStateAction } from "react"

//M1
// const Box = ({heading, subheading}:{heading:string, subheading:string}) => {
//   return (
//     <div>

//         <h1>{heading}</h1>
//         <h2>{subheading}</h2>
//     </div>
//   )
// }

// export default Box


//M2 type defining props

// type propsType = {
//     heading: string
// }

// const Box = (props:propsType) => {
//     return (
//         <div>
//             <h1>{props.heading}</h1>
//         </div>
//     )
// }

// export default Box


//DESTRUCTURED PROPS

// type propsType = {
//     heading: string
//     count: number
//     func1: (a:string) => void
// }

// const Box = ({heading, count, func1}:propsType) => {
//     func1("adbahd")
//     return (
//         <div>
//             <h1>{heading}</h1>
//             <p>{count}</p>
//         </div>
//     )
// }

// export default Box



//Demonstrating children as props

// type propsType = {
//     heading: string
//     count: number
//     children: ReactNode
// }

// const Box = ({heading, count, children}:propsType) => {
//     return (
//         <div>
//             <h1>{heading}</h1>
//             <p>{count}</p>
//             {children}
//         </div>
//     )
// }

// export default Box


//default value assigning to props
//NOTE - > FOR DEFAULT ASSIGNING THE FIELDS MUST BE MARKED OPTIONAL AS IT INFORMS TS TO NOT THROW ERROR WE DEFAULT PROPS ARE NOT PASSED TO THE COMPONENT AND USE THE DEFAULT ONES SET IN THE COMPONENT ITSELF, MARKING OPTIONAL ALSO MAKES IT ASSERTIVE THAT IT IS ABSOLUTELY OK TO NOT SEND ANY DATA FOR THAT PROPS NEITHER EXPLICIT PASSING NOR DEFAULT PASSING


//for the below syntax count is marked optional has a default value :- 
// 1. if no value is passed to it explicitly, default value set here is passed.
// 2. if a value is passed explicitly and it also has a default value set, the explicit value will be considered.
//3. if no value altogether is passed, neither explicit nor default value, then it wont throw any error as we have marked it optional.

// type propsType = {
//     heading?: string
//     count?: number
//     children: ReactNode
// }

// const Box = ( {heading = "New Head", count, children} : propsType ) => {
//     return (
//         <div>
//             <h1>{heading}</h1>
//             { count && <p>{count}</p>}
//             {children}
//         </div>
//     )
// }

// export default Box



//VVVIIII DEMONSTRATING GENERIC

type InputValType = string | number

const Box = <T extends InputValType>( {label, value, setter} : {label:string, value:T, setter: Dispatch<SetStateAction<T>>} ) => {
    return (
        <form>
            <label>{label}</label>
            <input type="text" value={value} onChange={(e) => setter(e.target.value as T)}/>
        </form>
    )
}

export default Box

