//import Student from "./classes/student-class"
import { generateLottoNumber } from "./functions/lotto-numbers"
import { greetUser } from "./functions/user-input"
import IStudent from "./interfaces/student"
import { Alcohol, Mixer } from "./types/alcohol"

//- Augfabe OOP-TypeCast-Level-1_1
console.log("OOP-TypeCast-Level-1_1")

function processStudent(student: IStudent){
    console.log(`Processing ${student.name}`) 
}

const student1 = {
    name: "Phillip",
    age: 23
} as IStudent

processStudent(student1)

const student2 = {
//    name: "Hannah",
    age: 30,
} as IStudent

processStudent(student2)

//- Augfabe OOP-UnionType-Level-1_1
console.log("OOP-UnionType-Level-1_1")

type Result = "success" | "error" | "pending"

const result1: Result = "success"
const result2: Result = "error"
const result3: Result = "pending"



function handleResult(value: string){
    if("success"){
        console.log(`the code is ${value}`)
    } else if("error"){
        console.log(`the code is an ${value}`)
    } else{
        console.log(`the code is ${value}`)
    }
     
}

handleResult(result1)
handleResult(result2)
handleResult(result3)

//- Augfabe OOP-IntersectionType-Level-1_1
console.log("OOP-IntersectionType-Level-1_1")

const cocktail: Alcohol & Mixer = {
    name: "Lynchburg Lemonade",
    percentage: 11,
    type: ["4 cl Jack Daniel's Tennessee Whisky", "1 cl Triple Sec (Orangenlikör)", "1,5 cl Zitronensaft,", "1,5 cl Limettensaft ", "Zitronenlimonade"],
    carbonated: true,
  };
     
 console.log(cocktail);
 
 //- Augfabe TS-ErrorHandling-Level-1_1
console.log("TS-ErrorHandling-Level-1_1")

//greetUser()

 //- Augfabe TS-ErrorHandling-Level-2_1
 console.log("TS-ErrorHandling-Level-2_1")
//// ich mag die aufgabe nicht ... mimimi

generateLottoNumber()

const lottoResults: number[] = []

while (lottoResults.length < 7) {
    try {
      const number = generateLottoNumber();
        lottoResults.push(number);
      }
     catch (error) {
      const errorMessage = (error as Error).message;
      console.error(errorMessage);
    }
}
  
console.log("Ihre Lottozahlen sind:", lottoResults);