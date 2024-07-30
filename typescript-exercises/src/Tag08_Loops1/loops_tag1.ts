//! Loops-TS-Level-1_1

/* for(let index:number = 1; index <=10; index ++){
    console.log("Hello World"+ index)
} */

//! Loops-TS-Level-1_2

let numbersToTen: number[]  = [];

for (let i: number = 1; i <= 10; i++){
    numbersToTen.push(i)
//    console.log(numbersToTen)
}

//! Loops-TS-Level-1_3

let counter: number = 0;

while (counter < 10) {
    console.log("hello world" +counter);
counter++;
console.log({ counter });
}

console.clear
//! Loops-TS-Level-1_4


const friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]

for (const friend of friendNames) {
    console.log(friend)
}

console.clear
//! Loops-TS-Level-1_7

document.getElementById("1_7")

let doWhileCounter: number = 0;

do {
  console.log("Number is "+ doWhileCounter);
  doWhileCounter++;
} while (doWhileCounter <= 5);

// console.clear
//! Loops-TS-Level-1_8


// console.clear
//! Loops-TS-Level-2_1


// console.clear
//! Loops-TS-Level-2_2