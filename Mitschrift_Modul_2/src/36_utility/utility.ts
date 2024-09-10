//$ OOP - Unitiy -> abändern von objects im nachhinein

interface Person {
    name: string,
    age: number,
    adress?: string,
}

const p1: Person ={
    name: "Joe",
    age: 54
}

// ! Partial => macht alle Eigenschaften optional
type PertialPErson = Partial<Person>

const p: PertialPErson ={
    name: "jio"
}

//! Required => macht alle eigenschaften zu Pflichtfeldern
type RequiredPerson = Required<Person>

const p2: RequiredPerson = {
    name: "Bob",
    age: 23,
    adress: "12345 Musterstad, musterstraße2"
}

//! Pick => kann eine spezifische Eigenschaft aus einem Interface extrahieren
//& also die mit pick ausgewälten eigenschaften wierden nun zu den Pflichtfeldern und die nicht angewählten dürfen gar nicht verwendet werden

type PickPerson = Pick<Person, "name" | "adress">

const p3: PickPerson = {
    name: "Alice",
    adress: "12345 Musterstad, musterstraße 6"
}

// ! Omit => entfernt bestimmte Eigenschaften (gegenteil von Pick)

type PersonOmit = Omit<Person, "name">

const p4: PersonOmit ={
    age: 34,
}

//! Record => erstellt eine Strucktur, bei der bestimmte Schlüssel Typen zugeordnet werden
//& 

type PermissionsLevel = "admin" | "editor" | "viewer"

type Permission = Record<PermissionsLevel, string[]>

const userPermission: Permission ={
    admin: ["create", "delete", "update"],
    editor: ["update", "view"],
    viewer: ["view"]
}

if (!userPermission?.admin){
    console.log("you are admin");
    userPermission?.admin.find((el)=>{
        if (el === "create"){
            console.log("you can create new user");
        }
    })
} else if (!userPermission.editor){
    console.log("you are editor");
} else if (userPermission.viewer){
    console.log("you are viewer");
}

// ! Readonly => macht alle eigenschaften eines Types unveränderlich
//& in einem normalen type-object kann man die eigenschaften im nachhinein ansprechen uns ändern. mit einem Readonly gehts nicht, da  die sachen dann nur noch ein mal angelegt werden können und danach nur gelesen werden können

type readonlyType = Readonly<Person>

const readonlyPerson: readonlyType = {
    age: 4,
    name: "lel",
    adress: "23856 muster muster etc"

}

readonlyPerson.name ="nunu" //-> geht nicht da read only