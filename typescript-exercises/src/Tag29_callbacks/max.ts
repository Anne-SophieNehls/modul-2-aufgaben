export function  showMaximum(numbers: number[], callback: (maxNumber: number) => number): void {
    const maxNumber = Math.max(...numbers)
    console.log("die höchste zahl ist " + maxNumber)


  const result = callback(maxNumber);
  console.log(`die Callback funktions hat diese ergebnis: ${result} 🤷‍♀️`);
  console.log("Finished with shoxMaximum");
}

export let zahlenArray: number[] = [1, 3, 5, 7, 9, 11, 13, 15];

export function powerOfTen(number: number): number {
    return Math.pow(number, 10);
  }

