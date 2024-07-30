//* Array-TS-Level-1_1

const  bucketList: string[] =["Irland", "Norwegen", "Island"]
const luckyNumbers: number[] =[89, 90, 32] 
const favoritePeople: string[] =["Lotta", "Nicolai", "Yu"]

console.log(bucketList)
console.log(luckyNumbers)
console.log(favoritePeople)


//* Array-TS-Level-1_2


bucketList[0]
bucketList[1]
bucketList[2]

luckyNumbers[0]
luckyNumbers[1]
luckyNumbers[2]

favoritePeople[0]
favoritePeople[1]
favoritePeople[2]


//* Array-TS-Level-1_3 (length)


console.log("länge des Länder-Arrays", bucketList.length)
console.log("länge des Number-Arrays", luckyNumbers.length)
console.log("länge des People-Arrays", favoritePeople.length)


//* Array-TS-Level-1_4 (push)


bucketList.push("Grichenland", "Portugal")
console.log(bucketList)

luckyNumbers.push(5, 68, 9)
console.log(luckyNumbers)

favoritePeople.push("Aylin", "Lisa")
console.log(favoritePeople)


//* Array-TS-Level-1_5 (pop)


const spain = bucketList.pop()
console.log(spain)
console.log(bucketList)

const missingNumber = luckyNumbers.pop()
console.log(missingNumber)
console.log(luckyNumbers)

const missingFriend = favoritePeople.pop()
console.log(missingFriend)
console.log(favoritePeople)


//* Array-TS-Level-1_6 (shift)


const missingVacation = bucketList.shift()
console.log(missingVacation)
console.log(bucketList)

const missingNr = luckyNumbers.shift()
console.log(missingNr)
console.log(luckyNumbers)

const missingBestFriend = favoritePeople.shift()
console.log(missingBestFriend)
console.log(favoritePeople)


//* Array-TS-Level-1_7 (unshift)


const vacationBack = bucketList.unshift("Irland", "Spanien")
console.log(vacationBack)
console.log(bucketList)

const numberBack = luckyNumbers.unshift(45, 8)
console.log(numberBack)
console.log(luckyNumbers)

const friendsBack = favoritePeople.unshift("Lisa", "Lotta")
console.log(friendsBack)
console.log(favoritePeople)


//* Array-TS-Level-1_8 (slice)


const landSlice = bucketList.slice(0, 3)
console.log(landSlice)
console.log(bucketList)

const specialNumber = luckyNumbers.slice(3, 5)
console.log(specialNumber)
console.log(luckyNumbers)

const besties = favoritePeople.slice(1, 3)
console.log(besties)
console.log(favoritePeople)


//* Array-TS-Level-1_9 (push/pop shift/unshift)


const nextNumbers: number[] =[23, 54, 75] 
console.log(nextNumbers)

const pushNr = nextNumbers.push(1, 2, 3, 4, 5)
console.log(pushNr)
console.log(nextNumbers)

const unshiftNr = nextNumbers.unshift(6, 7, 8, 9, 10)
console.log(unshiftNr)
console.log(nextNumbers)

const popNr = nextNumbers.pop()
const pop2Nr = nextNumbers.pop()
console.log(pop2Nr)
console.log(nextNumbers)

const shiftNr = nextNumbers.shift()
const shift2Nr = nextNumbers.shift()
console.log(shift2Nr)
console.log(nextNumbers)


//* Array-TS-Level-1_10 (split)


const futuramaQuote = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

const buchstaben = futuramaQuote.split("")
console.log(buchstaben)

const words = futuramaQuote.split(" ")
console.log(words)

const satz = futuramaQuote.split(",")
console.log(satz)



//* Array-TS-Level-3_2

const toDoItems: string[]= []

 
function addItem(toDo:string, addTheBack:boolean){
    if (addTheBack){
        toDoItems.push(toDo)
    }
    else{
        toDoItems.unshift(toDo)
    }
} 

addItem("Wäsche aufhängen", true)
addItem("Küche Putzen", false)
addItem("Bad Putzen", true)
addItem("Sport machen", false)
addItem("Pulli nähen", true)
addItem("Emails beantworten", false)
console.log(toDoItems)

//______________

function removeItem(addTheBack:boolean){
    if (addTheBack){
        toDoItems.pop()
    }
    else{
        toDoItems.shift()
    }
}

removeItem(false)
removeItem(true)
console.log(toDoItems)

//______________

function addItemAt (toDoItem: string , index: number){
 toDoItems.splice(index, 0, toDoItem)
}

addItemAt( "weiteres To Do", 1)
console.log(toDoItems)

//______________

function removeItemAt(indexToRemove: number){
    const deleteThings = toDoItems.splice(indexToRemove,1)
    console.log(deleteThings)

}
removeItemAt(1)
console.log(toDoItems)

//______________

const inHTML = document.getElementById("todo")
function printList(){
    inHTML.innerHTML = `<p>${toDoItems}</p>`
}
printList


//________ *Bonus*______-


function askForInput():void {
    let userInput = window.prompt("Bitte hier To Dos eintragen, und mit eienm Komma trennen")
    if (userInput){
        const itemsArray: string[] = userInput.split(",")
        console.log(itemsArray)
        console.log("To Dos sind nun gespeichert")

        if (itemsArray.length === 5){
        toDoItems.push(itemsArray[0]);
        console.log(toDoItems)
        }
        else{
            console.error("Es müssen 5 to dos sein")
        }
    }
    else {
        console.error("Eingabe war leer. Bitte die to Dos eintippen")
    }
}

askForInput()