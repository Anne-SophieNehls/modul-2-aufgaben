//beim import con class brauchen wir keine geschweiften klammern

import Bauplan from "./bauplan";



/* type Bauplan = {
    raeume: number;
    farbe: string;
    tiefGarage: boolean
}

const haus1: Bauplan ={
    raeume:1,
    farbe: "White",
    tiefGarage: false
}
 */
//! Classes */

const newHouseMitClass = new Bauplan (2, "red", true)
console.log(newHouseMitClass)
newHouseMitClass.renovieren("gelb")