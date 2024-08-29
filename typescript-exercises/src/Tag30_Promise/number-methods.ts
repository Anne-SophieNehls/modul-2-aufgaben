function generateRandomNumbers(): Promise<number[]> {
    return new Promise((resolve, reject) => {  
        const randomNumbers = [
            Math.floor(Math.random() * 130) + 1,
            Math.floor(Math.random() * 130) + 1,
            Math.floor(Math.random() * 130) + 1,
          ];

        const allNumbersUnder100 = randomNumbers.every(number => number <= 100);

        if (!allNumbersUnder100) {
        // Mindestens eine Zahl ist größer als 100
        reject('Ein Wert ist größer als 100');
          }else{
            return randomNumbers
          }
    })}
  
  generateRandomNumbers()
    .then((numbers) => {
      // Addiere 7
      return numbers.map(num => num + 7);
    })
    .then((numbers) => {
      // Multipliziere mit 2
      return numbers.map(num => num * 2);
    })
    .then((numbers) => {
        // minus 1
        return numbers.map(num => num -1);
    })
    .then((numbers) => {
        //  Modulo 2 
        return numbers.map(num => num % 2);
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

export default generateRandomNumbers()
