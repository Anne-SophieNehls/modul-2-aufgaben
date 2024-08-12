const inputBetrag = document.getElementById("betrag") as HTMLInputElement ;
const inputPersonen = document.getElementById("Personen")as HTMLInputElement ;
const inputService = document.getElementById("service")as HTMLInputElement;

const btnAusrechnen = document.getElementById("btn_ausrechnen") as HTMLElement;
btnAusrechnen?.addEventListener("click", (event) => {
    let trinkgeld;
    let gesammtbetrag;
    let ergebnisProPerson;
    event.preventDefault()
    if(Number(inputService.value) === 0/* Schlecht */){
         ergebnisProPerson =Number(inputBetrag.value) / Number(inputPersonen.value)
    } else if (Number(inputService.value) === 1/* mittel */){
         trinkgeld = Number(inputBetrag.value) /20
         gesammtbetrag = Number(inputBetrag.value)+trinkgeld
         ergebnisProPerson = gesammtbetrag / Number(inputPersonen.value)
    } else if (Number(inputService.value) === 2/* mittel */){
         trinkgeld = Number(inputBetrag.value) /10
         gesammtbetrag = Number(inputBetrag.value)+trinkgeld
         ergebnisProPerson = gesammtbetrag / Number(inputPersonen.value)
    } else  {
         trinkgeld = Number(inputBetrag.value) /7
         gesammtbetrag = Number(inputBetrag.value)+trinkgeld
         ergebnisProPerson = gesammtbetrag / Number(inputPersonen.value)
    }

document.getElementById("trinkgeld")!.innerText = `Trinkgeld: ${trinkgeld?.toFixed(2)} €`;
document.getElementById("gesamtbetrag")!.innerText = `Gesammtbetrag: ${gesammtbetrag?.toFixed(2)} €`;
const outputteilBetrag = document.getElementById("teilBetrag")!

outputteilBetrag.style.color="red"
outputteilBetrag.innerText = `Jede Person zahlt: ${ergebnisProPerson?.toFixed(2)} €`;
})

