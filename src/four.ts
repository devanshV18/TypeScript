type Functype = (n:number, m:number, l?:number) => number

const funcNew:Functype = (a,b,c) => {
    if(typeof c === "undefined"){
        return a*b
    }
    return a*b*c
}

funcNew(2,3,4)


//handling the above case using a defaulti parameter
const anotherFunc = (n:number, m:number, l:number = 20) : number => {
    return n*m*l
}

anotherFunc(2,3)



//REST OPERATOR
const restfunc = (...m:number[]) => {
    return m
}