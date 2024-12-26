//Utility classes OR Utility type
//ease of access classes provided by TS itself


//1 Partial<Type> -> makes all the properties of a type optional

type User = {
    name: string,
    age: number
}

//making all properties partial -> optional by this method -> impractical -> cant be performed for each key
type User2 = {
    name?: string,
    age?:string
}

//using utility type:-

//user3 has all fields of user in partial form
type User3 = Partial<User>

//2 Required<Type> -> makes all the properties of a type required | opposite of partial

type Driver = {
    name: string,
    rating: number
}

//you know what it does!!
type Driver2 = Required<Driver>

//an example of using both partial and required

//1
const newDriver: Driver2 = {
    name: "Devansh",
    rating: 4
}

//or

//2
const newDriver2: Required<Driver> = {
    name: "verma",
    rating: 4
}

//both methods are same -> but the first one is more practical and easy to use although both works.


//3 Readonly<Type> -> makes all the properties of a type readonly

const driverCheck: Driver2 = {
    name: "Pranav",
    rating: 5
}

//the above is an obj which obeys the Driver2 type

driverCheck.name = "Amrit" //can be accessed and changed

const driverCheckNew: Readonly<Driver2> = {
    name: "Pranav",
    rating: 5   
}
//vvvi
// driverCheckNew.name = "Amrit" //cant be accessed and changed -> throws an error


//4 Record<Keys, Type> -> creates an object type whose keys are Keys and values are Type

type teacher = {
    name: string,
    monthofJoining: string
}

type teacher2 = Record<"name" | "monthofJoining" | "gender", string> //teacher 2 is a type created with name, monthofJoin, gender withg all values as string

//a practical example of Record usage

// an interface
interface UserInfo{
    age: number
}

// a simple type asserted variable
type UserNameNew = "john" | "doe" | "smith"

//mixed usage -> all entires are mandatory
const users: Record<UserNameNew, UserInfo> = {
    john: {
        age: 20
    },
    doe: {
        age: 30
    },
    smith: {
        age: 40
    }
}


//4 Pick<Type, Keys> -> creates a type by picking the keys from Type/interface

//can be type also
interface OrderInfo{
    readonly id: string,
    user: string,
    city: string,
    state: string,
    country: string,
    status: string
}

type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">



//5 Omit<Type, Keys> -> creates a type by omitting the keys from Type/interface -> opposite of Pick

//can be type also
interface ShippingInfoNew{
    city: string,
    state: string,
    country: string,
}

//creates a type Random with all keys except city
type Random = Omit<ShippingInfoNew, "city">


//6 Exclude<Type, ExcludedUnion> -> creates a type by excluding the ExcludedUnion from Type

//koi kaam ka nahi h ye
type Randomness = Exclude<string | number, number> //number excluded it is aof type string hover to check


//7 Extract<Type, Union> -> creates a type by extracting the Union from Type
type MyUnion = string | number | boolean
type Randomness2 = Extract<MyUnion, number> //number extracted it is aof type number hover to check


//8 NonNUllable<Type> -> creates a type by excluding null and undefined from Type
type MyUnion2 = string | number | boolean | null | undefined
type Randomness3 = NonNullable<MyUnion2> //removes null or undefined from a uninon type


//8 Parameters<Type> -> gets the parameters of a function type in a tuple

const funcy = (a: number, b:string) => {
    console.log(a+b)
}

type Params = Parameters<typeof funcy> //params will become a tuple of [number, string] which is the parameters of funcy 
//note -> here typeof funcy resolves the typeof funcy in context of the type of the parameters of the function as it is used inside the utility Paramters type.


//9 COnstructorParameters<Type> -> gets the parameters of a constructor function type in a tuple

class Personas{
    constructor(public name: string, public id: string){}
}

type ConstructorParams = ConstructorParameters<typeof Personas> //params will become a tuple of [string, string] which is the parameters of the constructor of Person class


//10 ReturnType<Type> -> gets the return type of a function type
const myfunc = (a:number) : number => {
    return a+10
}

type funcParams = ReturnType<typeof myfunc>


//11 InstanceType<Type> -> gets the instance type of a constructor function type

class PersonasNew{
    constructor(public s: string, public t: string){}
}

type Unknown = InstanceType<typeof PersonasNew> //Unknown will become the instance type of PersonasNew class

const testNew: Unknown = {
    s: "Devansh",
    t: "Verma"
}
