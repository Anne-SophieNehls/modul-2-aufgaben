const inputBetrag: number = Number(document.getElementById("betrag")).value ;
const inputPersonen: number = Number(document.getElementById("Personen") ).value ;
const inputService: number = Number(document.getElementById("service")).value;

const btnAusrechnen = document.getElementById("btn_ausrechnen") as HTMLElement;
btnAusrechnen?.addEventListener("click", () => {
    if(inputService === 0/* Schlecht */){
        let ergebnisProPerson =inputBetrag / inputPersonen
    } else if (inputService === 1/* mittel */){
        let trinkgeld = inputBetrag /20
        let gesammtbetrag = inputBetrag+trinkgeld
        let ergebnisProPerson = gesammtbetrag / inputService
    } else if (inputService === 1/* mittel */){
        let trinkgeld = inputBetrag /10
        let gesammtbetrag = inputBetrag+trinkgeld
        let ergebnisProPerson = gesammtbetrag / inputService
    } else  {
        let trinkgeld = inputBetrag /7
        let gesammtbetrag = inputBetrag+trinkgeld
        let ergebnisProPerson = gesammtbetrag / inputService
    }

const outputTrinkgeld = document.getElementById("trinkgeld").innerText = `Trinkgeld: ${trinkgeld} €`;
const outputGesamtbetrag = document.getElementById("gesamtbetrag").innerText = `Gesammtbetrag: ${gesammtbetrag} €`;
const outputteilBetrag = document.getElementById("teilBetrag").innerText = `Jede Person zahlt: ${ergebnisProPerson} €`;



})

