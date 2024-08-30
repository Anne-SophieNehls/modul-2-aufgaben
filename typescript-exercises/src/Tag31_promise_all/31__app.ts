

// *  ___________callback-TS-Level-1_3 ___________
console.log("%c callback-TS-Level-1_3 ", "background: teal; color: white");

function sayHello(name: string, callback: (message: string) => void):void {
    const greeting = `Hallo, ${name}!`;
    callback(greeting);
  }

function greetingCallback(message: string) {
    console.log(message);
  }
  sayHello('Max', greetingCallback);
sayHello('Maria', greetingCallback);
sayHello('Tim', greetingCallback);


// *  ___________Promises-TS-Level-1_4 ___________
console.log("%c Promises-TS-Level-1_4", "background: darkred; color: white");
// # Copy pase aus der gestrigen Datei
const homeworkOutout = document.getElementById("homework") as HTMLDivElement

const exercise1 =  new Promise((resolve, reject) => {
      setTimeout(() => {
        const success: boolean = true;
        if (success) {
          resolve("Exercise 1 done.");
        } else {
          reject("Excercise 1 failed");
        }
      }, 1000 * 20);
    });
  
  
const exercise2 =  new Promise((resolve, reject) => {
      setTimeout(() => {
        const success: boolean = true;
  
        if (success) {
          resolve("Exercise 2 done.");
        } else {
          reject("Exercise 2 failed.");
        }
      }, 1000 * 30);
    });
  
  
const exercise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        const success: boolean = true;
  
        if (success) {
          resolve("Exercise 3 done.");
        } else {
          reject("Exercise 3 failed.");
        }
      }, 1000 * 40);
    });
// # ENDE Copy pase aus der gestrigen Datei

//& NEU mit promise
Promise.all([exercise1, exercise2, exercise3])
    .then((resp)=>{
    homeworkOutout.textContent = `${resp}`
    })
    .catch((err)=>{
        homeworkOutout.textContent = `${err}`
    })
    .finally(()=>{ setTimeout(()=>{
        homeworkOutout.textContent = `Homework done`
    },1500)
    })
    //// hab das finally verzögert um zu gucken ob der rest läuft
    
    //-The old shit
/* 
exercise1.then((resp)=>{
    homeworkOutout.textContent = `${resp}`
})
exercise1.catch((err)=>{
    homeworkOutout.textContent = `${err}`
})

exercise2.then((resp)=>{
    homeworkOutout.textContent = `${resp}`
})
exercise2.catch((err)=>{
    homeworkOutout.textContent = ` ${err}`
})

exercise3.then((resp)=>{
    homeworkOutout.textContent = `${resp}`
})
exercise3.catch((err)=>{
    homeworkOutout.textContent = ` ${err}`
})
 */



// *  ___________callback-TS-Level-2_2 ___________
console.log("%c callback-TS-Level-2_2", "background: blueed; color: white");


//-funktion in funktion in funktion
function processData(numbers: number[], sortCallback: (numbers: number[]) => number[], doubleCallback: (numbers: number[]) => number[]): Map<number, string> {
    const sortedNumbers = sortCallback(numbers);
    const doubledNumbers = doubleCallback(sortedNumbers);
  
    const result = new Map<number, string>();
    doubledNumbers.forEach(number => result.set(number, number.toString(16)));
  
    return result;}

    // funktionen für die callbacks
    function sortDescending(numbers: number[]): number[]{
        return numbers.sort((a, b) => b - a);
    }

    function doubleNumbers(numbers: number[]): number[]{
        return numbers.map(number => number * 2);
    }
    
    //Arrays
    const array1 = [3, 7, 2, 9];
    const array2 = [10, 5, 15, 8];
    const array3 = [ 63, 9, 60, 47, 82 ]
    const array4 = [ 543, 932, 71, 669, 28, 123 ]

    //alles aufraufen
    const result1 = processData(array1, sortDescending, doubleNumbers);
    const result2 = processData(array2, sortDescending, doubleNumbers);
    const result3 = processData(array3, sortDescending, doubleNumbers);
    const result4 = processData(array4, sortDescending, doubleNumbers);
    
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
