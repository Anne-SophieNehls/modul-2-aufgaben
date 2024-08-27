import Dog from "./classes/dog";
import Owner from "./classes/owner";


const Joe = new Owner("Joe", "Straße 23", "10943", "Stadt")  

const wuffi = new Dog("Wuffi", 1 ,Joe)

//console.log(wuffi._name)

    wuffi.age =2

wuffi.sleep()

console.log(wuffi.isHungry())

wuffi.eat()
wuffi.eat()
wuffi.eat()
wuffi.eat()