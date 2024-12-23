//works fine -> auto detection
const obj = {
    height: 157,
    weight: 65
}


//Syntax1
const obj1:{
    height: number,
    weight: number,
    gender:boolean
} = {
    height: 165,
    weight: 65,
    gender: true
}


//Syntax2 -> type defined object

type customobjtype = {
    height: number,
    weight: number,
    gender?: boolean //makes the property optional
}

const obj2:customobjtype = {
    height: 165,
    weight:65,
    gender:false
}

//did not specify gender
const obj3:customobjtype = {
    height: 170,
    weight: 73
}


//Syntax 4
interface custom {
    height: number,
    weight: number,
    gender?: boolean
}

const obj4: custom = {
    height: 180,
    weight: 81,
    gender: false
}


//with interface we can extend unlike with type definition alone



interface newcustom extends custom {
    scholar:boolean //no ques mark means mandatory
    func?: (n: number, m:number) => void
}

//gender optional
const obj5:newcustom = {
    height: 181,
    weight:89,
    scholar:true,
    func: (n,m)=> {
        console.log(n,m)
    }
}