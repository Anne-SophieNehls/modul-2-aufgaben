// ? Array
//                                    0       1       2              3        4
const shoppingList: string[]=["Erdnüsse", "Brot", "Brokkoli", "Kaffee", "Tomaten"]
console.log(shoppingList)


const prices: number[] = [1.45, 3.19, 2.99, 7.99, 3.45]

const booleanArray: boolean[]= [true, true, true, false, false]

const BrokkoliVar: string = shoppingList[2]

shoppingList[2] = "Schokolade"
console.log(shoppingList)

console.log("länge des Arrays", shoppingList.length)

shoppingList.push("Pasta")
console.log(shoppingList)
