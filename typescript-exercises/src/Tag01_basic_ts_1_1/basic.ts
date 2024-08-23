import IShape from "../contracts/IShape";

console.log('Welcome :)');

let dogName: string = "Leon";

console.log(`${dogName}`);

let zahl: number = 78

let seventeen: number = 17;

const sum = seventeen + 44;
console.log(sum);

let x: number = 20;
let y: number = 30;

console.log(x + y)

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

let multivar: number = x * y

console.log(multivar)

let z: number = 10

let resultOne: number = multivar / z

console.log(resultOne)
class Rectangle implements IShape {
    name: string;
}
