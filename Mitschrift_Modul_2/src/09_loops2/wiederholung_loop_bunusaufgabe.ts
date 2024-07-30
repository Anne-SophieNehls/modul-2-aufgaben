console.log('%c Aufgabe 1_8', 'background:white; color;red');

// v1.
const containerElement = document.getElementById("1_8")!

// v2.   const containerElement = document.getElementById("1_8") ?? new HTMLElement()

// v3. in der funktion noch ein if zufügen mit if(containerElemente = true){ und dhier die finktion mit dem inner HTML einfügen}


let zahl: number = 0

do {
    zahl++
    if(zahl % 2 === 0){
        containerElement.innerHTML +=`<p>${zahl}</p>`
    }
} while (zahl <= 20)


//___________________________________________________________________________________________________

//Loops TS Level 2_1

function createImageFile(){
    const resultArray:  string[] = []
    for (let i: number = 1; i <= 100; i++) {
        let fileName: string = ""
        if(i < 10) {
            fileName = `imgage_00${i}.jpg`
        } else if(i < 100){
            fileName = `imgage_0${i}.jpg`
        } else{
            fileName = `imgage_${i}.jpg`
        }
        resultArray.push(fileName)
    }
    return resultArray
}
const resultVon2_1 = createImageFile()
console.log(resultVon2_1)

//___________________________________________________________________________________________________

//Loops TS Level 3_3

const countInputElement = document.getElementById("count-input") as HTMLInputElement
const loopButton = document.getElementById("loop-button")
const loopOutput = document.getElementById("loop-output")

function handleLoopButton(event: Event){
    event.preventDefault()
    console.log("wurde geklickt")
    if (countInputElement.value){
        const countLoop: number = Number(countInputElement.value)
        let resultString: string = ""
        for(let index: number = 0 ; index < countLoop; index++){
            resultString = resultString + "o"
        } 
        if(loopOutput){
            loopOutput.style.color = "green"
            loopOutput.textContent = "L" + resultString + "p"
        }
    }
}

loopButton?.addEventListener("click", handleLoopButton)
