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

function randomEmoji(): string {
    const emojiArray: string[] = ["🧇","🥨", "🥦", "🍱", "🍔", "🥟", "🍭", "🍫"]
    const randomIndex = Math.floor(Math.random() * emojiArray.length);
    return emojiArray[randomIndex];}

function randomText(): string {
    const textArray: string[] =["Ich muss Raus", "Frag nicht was für Saft. Einfach Orangensaft", "Jetzt mal Butter bei die Fische!", "Nordisch by Nature", "step on Lego!", "Wer wohnt in der Anananas ganz tief im Meer", "Kann es sein, dass du dumm bist oder so?", "du hast Dreck auf der Nase. sieht nicht schön aus. Genau hier!", "moin kleines Schwibbel Schabbel"]
    const randomIndex = Math.floor(Math.random() * textArray.length);
    return textArray[randomIndex];}

//- headline
function updateHeadline(randomiseHOne: () => string): void {
    const headlineElement = document.getElementById(
      "headline"
    ) as HTMLHeadElement;
    if (headlineElement) {
      headlineElement.innerText = randomiseHOne();
    }
  }  

//- button funktion
randomBtn.addEventListener("click", () => {
    const functions = [randomNumber, randomText, randomBoolean, randomEmoji];
    const randomFN = functions[Math.floor(Math.random() * functions.length)];
    updateHeadline(randomFN);
  });
