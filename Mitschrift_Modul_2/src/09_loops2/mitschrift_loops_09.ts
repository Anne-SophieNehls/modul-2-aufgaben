//**** Break *****

for (let i: number = 0; i <10; i++){
    console.log(i);
    if (i === 7){
        break
    }
}

function teilbarSieben(startNumber: number, endNumber: number): number[] {
    let result: number[] =[]
    for(let i: number = startNumber; i < endNumber; i++) {
        if (i %7 === 0){
            console.log(i)
            result.push(i)
            continue
        }
    }
    return result
}

const resulltVonFunction = teilbarSieben(14, 23)
console.log(resulltVonFunction)

//berak bricht eine den aktuellen Schleifendruchlauf ab ab sobald die bedingung das erste mal zugetroffen ist. (in diesem Beispiel rechnet ts nur die erste zahl durch 7, danach ist die bedingung erfüllt und der Loop wird gestoppt, bevor alle zahlen berechnet wurden) um das wieder rückgängig zu machen wird ein continue verwendet. wenn man von vornerein kein brak benutzt hat, braucht man kein continue


//_____________ Wiederholung Arrays  zusatz____________

const todos: string[] = ["Cook", "bake", "Read", "Dance", "ride", "Play"]

const todoIng = todos.map((todo: string)=>{
    // return: bei den geschweiften klammern ohne weiteren inhalt mit map in kombi immer return verwenden
    if(todo.endsWith("e")) {
        console.log(todo);
        let todoStringArray = todo.split("")
            console.log(todoStringArray);
            todoStringArray.pop()
            console.log(todoStringArray);
            todo = todoStringArray.join("")
        
    }
    return todo +"ing"
})

console.log(todoIng)


const fruits: string[] = ["Apfel", "Brine", "Wassermelone", "Kiwi"]
console.log(fruits);
const emojiFruits = fruits.map((fruit: string)=> {
    if (fruit  === "Apfel"){
        return "🍏"
    }
}).filter((emoji) => emoji !== undefined)

console.log(emojiFruits)
//filter sorgt dafür dass nur das aus der funktion gesucht wird. das ist die "mordernste Vatiante für diese funktion"
// so werden später suchfilter aufgebaut in onlineshops. mit map geben wir an, was wir suchen, z.b. Smartphones und mit filter können wir weitere angeben wie Preis und Marke weiter rausfiltern