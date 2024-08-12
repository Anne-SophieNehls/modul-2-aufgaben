// Loops-TS-Level-3_6


//step by step
// 1. Funtion Deklarieren +Parameter (number)festlegen
// 2. Durchnutt berechnen
//      - summe aller punkte mit einem loop 
//      - berechnung = summe / teilnehmer
// 3. Bewertung ausgeben => if/else 

const results: number [] = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46]

// was ist es
//          wie heist es
//                   wie heisten die elemente
//                                          was soll am ende rauskommen
function calAverage(myResults: nummber[]) :string{
    //? summe aller punkte
    let sum: number =0; // <- hier ist die null für die position ab welche gezählt wird
    for (let i: number = 0; i < myResults.length; i++){
        sum += myResults[i]
    }
    console.log({sum})

    //? Durchschnitt berechenen
    const average: number = sum / results.length
    console.log({average})

    //? Bewerung ausgeben
    let level: string;

    if (average < 50) {
        level ="ungenügend"
    } else if (average < 60) {
        level = "mangelhaft"
    } else if (average < 70) {
        level = "ausreichend"
    } else if (average < 80 ){
        level = "befridigend"
    } else if (average < 90) {
        level = "gut"
    } else {
        level = "sehr gut"
    }
    return level
} 

const resultOfExam =  calcAverage(results);
console.log({resultOfExam})


// level 3_7

const allGermanLetters: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  function encodeInROT13(inputSentence: string) : string {
    const outputArray : String[]=[];
    const upperCaseInput =  inputSentence.toUpperCase();

    for (const letter of upperCaseInput) {
        const indexOfLetters = allGermanLetters.indexOf(letter)

        if (indexOfLetters === -1)  /* leerzeichen sind -1  */ {
            outputArray.push(letter)
        } else {
            const newIndex = (indexOfLetters + 13) % 26 // der mudulu % sogrt hier für dass die verschiebung wieder von vorne aunfängt, wenn es mit index +13 über der zahl 26 landet
        }
    }
    console.log({outputArray})
    return outputArray.join("")
  }

  const encodedSentens = encodeInROT13("hello World")

  /* Beispiel zum Modulo 26
  buchstabe a 
  der hat im indesx des Alphabets = 0
  die verschiebung ist um 13 also -> 0 +13 = 13
  nun prüft der Modulu % ob es die 26 überträgt, also ist 13>26 = nein also bleibt 13 
  der index ist 13 also der buchstabe N
  
  nächster buchstabe O
  index im Aphaet =14
  die verschiebung ist 14 +13 =27
  prüfung des mudulu 27>26 = ja, also fange bei der 26 wieder von vorne an zu zählen. also 26 = 0 und 27 =1
  neuer index ist also 1 und somit der Buchstabe B*/



  //! DOM Tag1

  //im HTML elemente ansteuern

  //*v1 
  const container1 = document.getElementById("container")!
  container1.innerHTML =`<p> Hello World</p>`

  //*v2 elemente im html erstellen
  const container2 = document.getElementById("container2")!
  const paragraph = document.createElement("p")
  paragraph.textContent = "Hallo World"
  container2.appendChild(paragraph)

  //const container_2.appendChild(paragraph)
  //document.body.appendChild

  // immer nach creatElement braucht man ein appendChild

  //*v3 Neuer weg im HTML zu selektieren: hier werden immer die elemente verschachtel erstellt, merhere Elternund kind elemente

  const container3 = document.getElementById("container3") as HTMLElement

  const obstSalat: string[] = ["Kiwi", "Apfel", "Birne"]

  const ungeordneteListe = document.createElement("ul")
  container3.appendChild(ungeordneteListe)

  obstSalat.forEach((element)=>{
    const li = document.createElement("li") // kindelement erstellt
    li.textContent = element
    li.style.listStyle = "none"
    li.style.color = "green"
    ungeordneteListe.appendChild(li) // Elernelemnt "holt das" Kindelemnet ab 
  })

  // beispiel2

  const shoppingList = ["gemüse", "obst", "snacks", "trinke", ["schampoo", "Spühlung", "seife"]]

  const buttonElement = document.getElementById("button")

  function showShoppingList() {
    const eineListe = document.createElement ("ol")

    shoppingList.forEach((item) => {
        console.log(item);
        const LiElement = document.createElement("li")
        if(Array.isArray(item)) {
            const innerUL = document.createElement("ul")
            item.forEach((el)=> {
                const innerLi = document.createElement("li")
                innerLi.textContent =el
                innerUL.appendChild(innerLi)
            })
            LiElement.appendChild(innerUL)
        } else{
            LiElement.textContent = item
        }
        eineListe.appendChild(LiElement)
    })
    document.body.appendChild(eineListe)
  }
buttonElement?.addEventListerner("click", showShoppingList)