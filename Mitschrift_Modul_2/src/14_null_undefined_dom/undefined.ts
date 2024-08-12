//* undifined Arrays

type PlantsSchema={name: string, color: string}

const plants: PlantsSchema[] = [
    {name:"Rose", color: "red"},
    {name:"Ivy", color: "green"},
    {name:"Lavender", color: "Purble"},
]

let user = null

type UserSchema ={
    id: number,
    name: string
}

const users: UserSchema[] =[
    {id: 1, name: "Ahmed"},
    {id: 2, name: "Steve"},
    {id: 3, name: "Victoria"},
]

function findUserByID(id: number){
    for(let user of users)
}