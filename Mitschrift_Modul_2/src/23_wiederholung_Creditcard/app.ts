import CreditCard from "./classes/CreditCard";


//HTML Elemente
const cardOutput = document.getElementById("card-output") as HTMLOutputElement;
const cardNumberInput = document.getElementById(
  "card-number-input"
) as HTMLInputElement;
const cardHolderInput = document.getElementById(
  "card-holder-input"
) as HTMLInputElement;
const dateInput = document.getElementById("date-input") as HTMLInputElement;
const cvvInput = document.getElementById("cvv-input") as HTMLInputElement;
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

const allCreditCards: CreditCard[]=[];

const createNewCard = (event: MouseEvent) =>{
    event.preventDefault()

    //aktuellen values speichern
    const cardNumber = cardNumberInput.value;
    const cardHolder = cardHolderInput.value;
    const expDate = newDate(dateInput.value);
    const cvv = cvvInput.value;

    //- Bedingung 1: Kartennummer
    const isCardNumberValid = cardNumberValidation(cardNumber)
    //# Bedungung 2: Ablaufdatum in der zukunft???
    const expDateValidation = (cardExpDate):boolean =>{
        const currentDate = new Date()
        if(cardExpDate < currentDate){
            window.alert("Ablaufdatum muss in der zukunft liegen")
            return false
        } 
    }
    //// Bedinung 3: 
    const isCvvValid = cvvValidations(cvv);

    if (isCardNumberValid && isExpDateValid && isCvvValid){
        const newCard = new CreditCard(

        )
    }

}

//- Bedingung 1 Funktions
const cardNumberValidation = (value: string): boolean =>{
    if(value.length !== 16) {
        window.alert("Die nummer muss 16 zahlen haben")
        return false
    } 

    //!Regular expression (regex) -> noch mal genauer angucken, man kann viele spannende sachen testen
    if(!/^\d+$/.test(value)){
        window.alert ("kleine zeichen erlaubt")
        return false
    }
}

    //// Bedinung 3: funktion
const cvvValidations = (cvvNum: string) : boolean => {
    if (cvvNum.length !==3){
        window.alert("die länge von cvv muss 3 zeichen sein")
        return false
    }
}

const updateHTML = (): void =>{
    cardOutput.innerHTML = ""

    allCreditCards.forEach((card, index) =>{
        const outputCard = document.createElement("div")

        //// card header
        const cardHeader = document.createElement("div")
        
        const chipImg = document.createElement("img")
        chipImg.src = "./chip.png"
        chipImg.style.width ="50px"
        cardHeader.appendChild(chipImg)

        const visaImg = document.createElement("img")
        visaImg.src = "./visa_logo.png"
        visaImg.style.width ="50px"
        cardHeader.appendChild(visaImg)

        //card number
        const cardNumber = document.createElement("p")
        cardNumber.innerText = card._creditCardNumber.toString()

        //card holder details
        const cardHolderDetails = document.createElement("div")
        cardHolderDetails.style.display

        const cardHolderLable = document.createElement("p")
        cardHolderDetails.appendChild(cardHolderLable)

        .
        .
        . //(von elisa nehmen)

        //delete eventlistener
        outputCard.addEventListener("dbclick", ()=> deleteCard(index))
    })
}


const deleteCard = (i: number): void =>{
    allCreditCards.splice(i, 1);
    updateHTML()
}