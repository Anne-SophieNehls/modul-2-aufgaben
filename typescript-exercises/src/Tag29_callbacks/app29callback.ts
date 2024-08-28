import { addNumbers, showErgebnis } from "./add-numbers";
import { binary, calculateSumAndMore, dobble } from "./callback-cascade";
import { powerOfTen, showMaximum, zahlenArray } from "./max";


// *  ___________callback-TS-Level-1_1 ___________
console.log("%c callback-TS-Level-1_1 ", "background: teal; color: white");

addNumbers(45, 87, showErgebnis);

// * ___________callback-TS-Level-1_2 ___________
console.log("%c callback-TS-Level-1_2 ", "background: darkblue; color: white");

function showAlert(sum: number): void {
    window.alert(`Sum is: ${sum}`);
  }

//  addNumbers(23, 65, showAlert);

  // * ___________callback-TS-Level-1_4 ___________
console.log("%c callback-TS-Level-1_4 ", "background: darkred; color: white");
showMaximum(zahlenArray,powerOfTen)


// * ___________callback-TS-Level-2_1 ___________
console.log("%c callback-TS-Level-2_1 ", "background: darkgreen; color: white");

console.log(calculateSumAndMore(1, 2, dobble, binary))

console.log(calculateSumAndMore(76, 3, dobble, binary))

console.log(calculateSumAndMore(57, 32, dobble, binary))

// * ___________callback-TS-Level-3_2 ___________
console.log("%c callback-TS-Level-3_2 ", "background: darkorange; color: white");

//- elemente abholen
const randomBtn = document.getElementById("randomButton") as HTMLButtonElement;
const h1 = document.getElementById("headline") as HTMLHeadingElement;

//- einzelne funktionnen
function randomNumber(): string {
    const number = Math.floor(Math.random() * 100).toString();
    return number;}

function randomBoolean():any {
    const boolean = Math.random() >= 0.5 ? "true" : "false";
    return boolean;
}

function randomEmoji(): string {}

function randomText(): string {}

//- button funktion
randomBtn.addEventListener("click", () => {})