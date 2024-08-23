import Unicorns from "./ unicorn";
import Car from "./car";
import ElectricCar from "./electric-car";

class InstanceChecker{

    static isUnicorn(objectToCheck: any): boolean {
        return objectToCheck instanceof Unicorns;
      }
      static isCar(objectToCheck: any): boolean {
        return objectToCheck instanceof Car;
      }
      static isElectricCar(objectToCheck: any): boolean {
        return objectToCheck instanceof ElectricCar;
      }
}



export default InstanceChecker