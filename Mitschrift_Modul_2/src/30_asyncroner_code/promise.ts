const myPromise = new Promise((resolve, reject) =>{
    //-dieser text kommt in eine Art Datenbank
    let seccess = true // funktioniert wie eine art API/Datenbank(backend
    if(seccess){
        resolve("Die Operation war erfolgreich")
    } else {
        reject("Es gibt ein PRoblem")
    }
})

myPromise.then((response)=>{
    console.log(response)
})

myPromise.catch((error)=>{
    console.log(error)
})

myPromise.finally(()=>{
    console.log("myPromise is bis zum ende Durchgeführt")
})

function firstStep(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Erster Schritt");
        const success: boolean = Math.random() < 0.5;
        console.log(success);
        if (success) {
          resolve();
        }
      }, 3000);
    });
  }
  
  function secondStep(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Zweiter Schritt!");
        const success: boolean = true;
        if (success) {
          resolve();
        } else {
          reject("Fehler im zweiten Schritt");
        }
      }, 1000);
    });
  }
  
  function thirdStep(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Dritter Schritt abgeschlossen...");
        resolve();
      }, 1000);
    });
  }

  //! Nutzung  der Verketteten Promises mit Fehlerbehebung

  firstStep().then(()=> secondStep())
             .then(()=>thirdStep())
             .then(()=>{
                console.log("Alle schritte abgeschlossen")
             })
             .catch((error)=>{
                console.error("Ein Fehler ist aufgetrieten", error)

             })


  //! beispiel 3

  const dogAgePromise: Promise<number> = new Promise((resolve, reject) =>{
    const randomAge = Math.floor(Math.random()*30)
    console.log("RandomAge in Promise ist aktuell " + randomAge)
    if(randomAge <= 20) {
        resolve(randomAge)
    } else {
        reject("No age availeble")
    }
  })

  dogAgePromise.then((resp)=>{
    console.log(resp)
  }).catch((error)=> console.error(error))

  //! shu beispeil


  const showPromise: Promise<string[]> = new Promise ((resolve, reject) =>{
    const areShoesAvilible = true
    const showVomDatenbank: string[] = ['Black High Heels', 'Adidas Samba', 'Green Crocs', 'Nike Air Max', 'Red Converse'];
    setTimeout(()=>{
        if(areShoesAvilible){
            resolve(showVomDatenbank)
        } else{
            reject("Sorry, nix da")
        }
    }, 3000)
  })



// ? Elemente aus HTML holen
const orderButton = document.getElementById('order-button') as HTMLButtonElement;
const shoeOutput = document.getElementById('shoe-output') as HTMLDivElement;
const loadingIndicator = document.getElementById('loading') as HTMLDivElement;

if (orderButton) {
    orderButton?.addEventListener("click", ()=>{
        loadingIndicator.style.display ="block"
        showPromise.then((shoes: string[])=>{
            shoes.forEach((shoe: string)=>{
                const shoeItem = document.createElement("div")
                shoeItem.textContent = shoe
                shoeOutput.appendChild(shoeItem)
            })
        }).catch((error)=>{
            console.error(error)
        }).finally(()=>{
            loadingIndicator.style.display = "none"
        })
    })
}