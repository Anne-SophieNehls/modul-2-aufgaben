type PersonMitType = {
    userName: string;
    age: number
}

const person1: PersonMitType ={
    userName: "name",
    age:45,
}

console.log(person1)

//! interfaceses 
//& Keyword ist: interface
//% vorteil 1 man kann das interface wierderholen um neue bedingungen später zu schrieben

interface PersonMitInterface {
    userame: string;
    age: number;
}