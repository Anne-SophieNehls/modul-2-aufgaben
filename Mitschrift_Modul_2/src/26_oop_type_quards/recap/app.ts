// Runden
const rundenAnzeige = document.querySelector(".runden-anzeige") as HTMLElement;
const rundenAnzahl = document.querySelector(".runden-anzahl") as HTMLElement;
const gespielteRunden = document.querySelector(".gespielte-runden") as HTMLSpanElement;
const gesamteRunden = document.querySelector(".gesamte-runden") as HTMLSpanElement;
const resetBtn = document.querySelector(".reset") as HTMLButtonElement;

//Spielstaende
const spielstandSpieler = document.querySelector(".spielstand-spieler") as HTMLDivElement;
const spielstandComputer = document.querySelector(".spielstand-computer")as HTMLDivElement;

//Anzeige - gewonnen, verloren, 'lass uns spielen'
const actionOutput = document.querySelector(".action-output")as HTMLDivElement;

// Button Area mit Buttons: Schere, Stein, Papier
const btnArea = document.querySelector(".choices") as HTMLSelectElement;
const schereBtn = document.querySelector(".schere") as HTMLButtonElement;
const steinBtn = document.querySelector(".stein") as HTMLButtonElement;
const papierBtn = document.querySelector(".papier") as HTMLButtonElement;

const makeYourMove = document.querySelector(".mach-deinen-zug") as HTMLElement;

//Variablen deklarieren

 let aktuelleRunde = 0;
 let spielerPunkte = 0;
 let ComputerPunkte = 0;

 let computerChoise: string = "",

 //- Funktion:
 const zufaelligeCompZahl = () =>{
    const zufaelligeZahl = Math.floor(Math.random()*3)+1;

    if(zufaelligeZahl === 1){
        computerChoise = "Schere";
    } else if (zufaelligeZahl === 2){
        computerChoise = "Stein"
    } else {
        computerChoise ="Papier"
    }
 }


 const spielen = (benutzerAuswahl: string) => {
    event?.preventDefault()
    zufaelligeCompZahl()
    
    let gesamteRundenAnzahlInput = document.querySelector('input[name="num-of-rounds"]:checked') as HTMLSelectElement
    const gesamteRundenanzahl = Number(gesamteRundenAnzahlInput.value)
    gesamteRunden.innerHTML = gesamteRundenanzahl.toString()
    rundenAnzahl.classList.add("diswplay-none")
    rundenAnzeige.classList.add("display-block")

    gespielteRunden.innerText = aktuelleRunde.toString();

    //// das eigneltiche spiel 
    //- 1. Punkte Zählen:
    if((benutzerAuswahl === "Stein" && computerChoise === "Schere") || (benutzerAuswahl === "Schere" && computerChoise === "Papier") ||(benutzerAuswahl === "Papier" && computerChoise === "Stein")) {
        spielerPunkte ++
        actionOutput.innerText = "Du hast die Runde gewonnen"
    } else if (benutzerAuswahl === computerChoise){
        actionOutput.innerText = "Unentschieden"
    } else{
        ComputerPunkte ++
        actionOutput.innerText = " Der Computer hat die runde gewonnen"
    }

    spielstandSpieler.innerText = spielerPunkte.toString()
    spielstandComputer.innerText = ComputerPunkte.toString()

    // bisher gibts unendlich viele runden, damit es endet, muss man hier noch ein if schrieben:
    //- 2. Runden Zählen:
    if (aktuelleRunde === gesamteRundenanzahl){
        gameOver();
        if (spielerPunkte === ComputerPunkte){
            actionOutput.innerText = "ihr habt gleichstand mit gleichvielen Punkten"
        } else if (spielerPunkte > ComputerPunkte){
             actionOutput.innerText = "Spieler hat gewonnen"
        } else { actionOutput.innerText = "computer hat gewonnen"}
    } else {
        aktuelleRunde++
    }

 }

 // Event listener
 schereBtn.addEventListener("click", ()=> spielen ("Schere"));
steinBtn.addEventListener("click", ()=> spielen ("Stein"));
papierBtn.addEventListener("click", ()=> spielen ("Papier"));

//- 3. Game Over funktion:
const gameOver = () => {
    btnArea.classList.add("display-none")
}
// game over muss nun in den rundenzähler intergriert werden


//& am Schluss den reset button machen:

resetBtn.addEventListener("click", (e: Event) =>{
    e.preventDefault()
    spielerPunkte = 0
    ComputerPunkte = 0
    aktuelleRunde = 0
    actionOutput.innerText = "Lass uns spielen!"

    spielstandSpieler.innerText = "0"
    spielstandComputer.innerText = "0"

    btnArea.classList.remove("display-none")
    rundenAnzahl.classList.remove("display-none")
    rundenAnzeige.classList.remove("display-block")
})