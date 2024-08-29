import WeatherType from "./weather-type";

// *  ___________Promises-TS-Level-1_2___________
console.log("%c Promises-TS-Level-1_2 ", "background: teal; color: white");

// forecast.ts mache ich nicht, das kommt jetzt in die app.ts

function getWeatherForecast(): Promise<WeatherType> {
    return new Promise((resolve, reject) => {
        const randomNumber: number = Math.floor(Math.random() * 10);
        if (randomNumber <= 6) {
            resolve(randomNumber as WeatherType); 
          } else {
            reject("Fehelerhaftes Wetter");
          }
        }, );
    }

console.log(typeof WeatherType)

getWeatherForecast()
  .then((weather) => {
    console.log(`The weather is: ${WeatherType[weather]}`);
  })
  .catch((error) => {
    console.error(error ); console.log("Weather forecast could not be determined")
  });

 

  // *  ___________ Promises-TS-Level-1_3___________
console.log("%c  Promises-TS-Level-1_3 ", "background: darkblue; color: white");

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
  
  // *  ___________ Promises-TS-Level-1_3___________
  console.log("%c  Promises-TS-Level-1_3 ", "background: darkred; color: white");

  function generateRandomNumbers(): Promise<number[]> {
    return new Promise((resolve, reject) => {  
        const randomNumbers = [
            Math.ceil(Math.random() * 130),
            Math.ceil(Math.random() * 130),
            Math.ceil(Math.random() * 130),
          ];
          console.log(randomNumbers)
        const allNumbersUnder100 = randomNumbers.every(number => number <= 100);

        if (!allNumbersUnder100) {
        // Mindestens eine Zahl ist größer als 100
        reject('Ein Wert ist größer als 100');
          }else{
             resolve(randomNumbers)
          }
    })}
  
  generateRandomNumbers()
    .then((numbers: number[]) => {
      // Addiere 7
      const result = numbers.map(num => num + 7);
      console.log(result)
      return result
    })
    .then((numbers) => {
      // Multipliziere mit 2
      const result = numbers.map(num => num * 2);
      console.log(result)
      return result
    }) 
    .then((numbers) => {
        // minus 1
        const result = numbers.map(num => num -1);
        console.log(result)
        return result
    })
    .then((numbers) => {
        //  Modulo 2 
        const result = numbers.map(num => num % 2);
        console.log(result)
        return result
    })
    .then((numbers) => {
        //  console log
        return console.log(numbers)
    }) 
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Finished");
    });
