//! Array-TS-Iteration-Level-1_2 (map)

const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']

const upperDrinks: string[] = drinks.map((drink :string) => drink.toUpperCase())

console.log(upperDrinks)


const iLikeDrinks = drinks.map ((drink: string) =>{
    return "I like " + drink 
})

console.log(iLikeDrinks)


//! Array-TS-Iteration-Level-1_4 (map)

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius = fahrenheit.map((zahl: number)=>{
    return Math.round((zahl-32)/ 1.8 )     
})
//celsius = (℉ - 32) / 1.8

console.log(celsius)


//! Array-TS-Iteration-Level-1_5 (map)

let checkNumber: number[] = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];

const durch3 = checkNumber.map((zahl: number) =>{
    if(zahl % 3 === 0){
       return zahl += 100
    } return zahl
})

console.log(durch3)

//! Array-TS-Iteration-Level-1_6 (map oder forEach)

let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];