import Unicorns from "./classes/ unicorn";
import Car from "./classes/car";
import ElectricCar from "./classes/electric-car";
import InstanceChecker from "./classes/instance-checker";


//*___________ OOP-Class-TS-Level-1_7____________
console.log("OOP-Class-TS-Level-1_7")

const Objectxy ={}
console.log(InstanceChecker.isUnicorn(Objectxy))

const pinkypie = new Unicorns( "Pinkypie",["pink"])
console.log(InstanceChecker.isUnicorn(pinkypie))


//*___________ OOP-Class-TS-Level-1_8____________
console.log("OOP-Class-TS-Level-1_8")

const Car1 = new Car();
const ElectricCar1 = new ElectricCar();

console.log(InstanceChecker.isCar(Car1));
console.log(InstanceChecker.isCar(ElectricCar1));

console.log(InstanceChecker.isElectricCar(Car1));
console.log(InstanceChecker.isElectricCar(ElectricCar1));

//*___________ OOP-Class-TS-Level-1_11____________
console.log("OOP-Class-TS-Level-1_11")

