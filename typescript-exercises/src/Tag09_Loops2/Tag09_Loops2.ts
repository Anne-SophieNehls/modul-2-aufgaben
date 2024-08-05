function getHighestNumber(numbers: number[]): number {
    let highest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > highest) {
        highest = numbers[i];
      }
    }
    return highest;
  }
  console.log(getHighestNumber([1, 2, 3, 9, 4, 5]));
  
