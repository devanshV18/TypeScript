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


//ME -> DESTRUCTURED PROPS
type propsType = {
    heading: string
    count: number
    func1: (a:string) => void
}

const Box = ({heading, count, func1}:propsType) => {
    func1("adbahd")
    return (
        <div>
            <h1>{heading}</h1>
            <p>{count}</p>
        </div>
    )
}

export default Box
