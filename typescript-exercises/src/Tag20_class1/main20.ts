//!OOP-Class-TS-Level-1_1
console.log("%c OOP-Class-TS-Level-1_1 ")

import IceCreamFlavor from "./IceCreamFlavor";

const flavors: IceCreamFlavor[] = [
new IceCreamFlavor("Vanilla", 1.2, true, "Sweet and Classic Vanilla Flavor"),
new IceCreamFlavor("Chocolat", 1.3, true, "rich chocolate taste with little chocolate chips"),
new IceCreamFlavor("After Aight - Chocolat-Mint", 1.4, false, "Sweet mint Ice cream with big dark chockolate chunks"),
new IceCreamFlavor("Cookie Daugh", 1.4, true),
new IceCreamFlavor("Pistazie", 1.3, false),
new IceCreamFlavor("Himbeer-Sorbet", 1.2, false),
new IceCreamFlavor('Strawberry', 2.00, true),
]

flavors.forEach((flavor) => {
    if (flavor._isPopular) {
      console.log(flavor._name);
    }
  });

//! HTML TEIL VERSUCHEN
const container = document.getElementById('ice_cream_data');


 // flavors.forEach((ice) => {  const iceBox = document.createElement("div");  iceBox.className = "box";})

    if (container) {
        flavors.forEach(flavor => {
            const flavorDiv = document.createElement('div');
            flavorDiv.className = 'ice-cream-flavor';
    
            //* Eissorten-Informationen hinzufügen
            flavorDiv.innerHTML = `
                <h5> ${flavor._isPopular ? '⭐' : ''}</h5>
                <h4> ${flavor._name}</h4>
                <b>Preis: ${flavor._price.toFixed(2)} Euro</b>
                <p>${flavor._description}</p>`;

            const scoopsElement = document.createElement("p") as HTMLParagraphElement
            scoopsElement.innerText = `Number of Scoops: ${flavor._scoops}`
            flavorDiv.appendChild(scoopsElement)

            const plusBtn = document.createElement("button") as HTMLButtonElement
            plusBtn.innerText ="+1"
            flavorDiv.appendChild(plusBtn)

            const totalPricePerIce = document.createElement("p")as HTMLParagraphElement
            totalPricePerIce.innerText = "0"
            flavorDiv.appendChild(totalPricePerIce)

            //* Event Listener für den Button hinzufügen
            plusBtn.addEventListener("click", () => {
                flavor.increaseScoops()
                scoopsElement.innerText = `Number of Scoops: ${flavor._scoops}`
                totalPricePerIce.innerText = flavor.getTotalPrice().toFixed(2).toString()
            })

            /* const button = flavorDiv.querySelector('.add-scoop');
            if (button) {
                let numberOfScoops = 0;
                button.addEventListener('click', () => {
                    numberOfScoops++;
                    const totalPrice = flavor.getTotalPrice(numberOfScoops);
                    const priceDisplay = document.getElementById(`totalPrice-${flavor._name}`);
                    if (priceDisplay) {
                        priceDisplay.textContent = `Gesamtpreis: ${totalPrice.toFixed(2)} Euro`;
                    }
                });
            } */
    
            container.appendChild(flavorDiv);
        });
    }







    