//& einfache standard funktions:

function reversePrintString(array: string[]){
    const reverseArray = array.reverse()
    reverseArray.forEach((element: string)=> console.log(element))
}

reversePrintString(["name1", "name2", "name3", "name4"])

//% hier kann man nur mit strings arbeiten, wenn man diese funktions nun mit anderen datentypen brauchen machen wir wieder en generic mit <T>

//& funktions mit generics

function reverseArray<T>(array:T[]){
    const reverseArray = array.reverse()
    reverseArray.forEach((element: T)=> console.log(element))
}

reverseArray<number>([54, 56, 8, 23])
reverseArray<string>(["name1", "name2", "name3", "name4"])
reverseArray<boolean>([true, false, false, true])

//% geht auch mit objects und co:

type IceCream ={
    name: string,
    price: number
}

reverseArray<IceCream>([
    {name: "Vanilla", price: 1.50},
    {name: "Schoko", price: 1.60},
    {name: "Erdbeer", price: 1.40}
])

function Randomfunk<T,U>(array:T[], id: U){
    const reverseArray = array.reverse()
    reverseArray.forEach((element: T)=> console.log(element))

    reverseArray.filter((id: U)=> console.log(i);)
}