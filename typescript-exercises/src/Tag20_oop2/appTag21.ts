
//! OOP-Class-TS-Level-1_3
console.log("%c OOP-Class-TS-Level-1_3")

import Animals from "./classes/Animal";
import Person, { Gender } from "./classes/Person";

const Animal1 = new Animals ("Cat", 3, "orange")

const Person1 = new Person ("Tanja", new Date(1995, 8, 23) , Gender.female)

console.log(Person1.birthday)

//! OOP-Class-TS-Level-1_12 -> siehe tag 20