// * add Event Listener

let counter: number = 0
const h2 = document.getElementById("counter")

const button = document.getElementById("button-count")!

function handleCountButtonClicked(event: MouseEvent){
    event.preventDefault()
    counter++
    console.log(counter)
    if (h2){
        h2.textContent = Counter.toString()
        //counternist eine Zahl und darf nicht zugewisen werden, da html nur mit strings umgehen kann, sonst müsste man es vorher umwandeln
    }
}


if(h2 && button){
button.addEventListener("click", handleCountButtonClicked)
} else {
    console.error("h2 und button wurden nicht gefunden")
}



//* Alternativ Variante 2 Nullisch  Coalescing Operator

let counter2: number = 0

const counterElement2 = document.getElementById("counter") ?? new HTMLElement() //! kombination aus fragezeichen und HTMLElement sorgt dafür, dass sie 

button.addEventListener("click", handleCountButtonClicked)