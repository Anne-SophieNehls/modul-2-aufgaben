console.log("%c ==== Bom-TS-Level-1_1 ====", "color: orange");
//! ============= Bom-TS-Level-1_1 =============

console.log("start: warte nun 3 Sek");

window.setTimeout(() => {
    console.log("3 Sek warten");
  }, 3000);

//# Countdown

function Countdown () {
  let counter = 11;

  const interval = setInterval(() => {
    counter--;
    console.log(counter);

    if (counter === 0) {
      console.log("Endlich Feierabend");
      clearInterval(interval);
    }
  }, 1000);
}

Countdown()

console.log("%c ==== Bom-TS-Level-1_2 ====", "color: orange");
//! ============= Bom-TS-Level-1_2 =============

const button = document.getElementById('btn') as HTMLButtonElement;
const zeitDiv = document.querySelector('.zeit') as HTMLDivElement;

function countdownPercent() {  
    let count = 100;

    const intervalId = setInterval(() => {
        zeitDiv.textContent = `${count}%`;

        count--;

        if (count < 0) {
            clearInterval(intervalId);
        }
    }, 100); 
}

button.addEventListener('click', () => {
    countdownPercent();   
});

console.log("%c ==== Bom-TS-Level-1_3 ====", "color: orange");
//! ============= Bom-TS-Level-1_3 =============

const button1_3 = document.getElementById('btn_daten_holen') as HTMLButtonElement;
const datenDiv = document.getElementById('daten') as HTMLDivElement;


    button1_3.addEventListener('click', () => {
        const hight = window.innerHeight
        const width = window.innerWidth
        const Farbtiefe = window.screen.colorDepth
        const Pixeltiefe = window.screen.pixelDepth
        const browserName = window.navigator.userAgent;
        const Architektur = window.navigator.userAgent;
        const browserVersion = window.navigator.userActivation; 
        const Aufloesung = `${window.innerWidth}x${window.innerHeight}`;
    

        datenDiv.innerHTML = `<p><b> Browserfensterhöhe:</b> ${hight}</p> </br>
        <p><b> Browserfensterbreite:</b> ${width}</p> </br>
        <p><b> Farbtiefe:</b> ${Farbtiefe}</p> </br>
        <p><b> Pixeltiefe:</b> ${Pixeltiefe}</p> </br>
        <p><b> der name des Browser:</b> ${browserName}</p> </br>
        <p><b> die Betriebssystem-Architektur  :</b> ${Architektur}</p> </br>
        <p><b> die Browserversion:</b> ${browserVersion}</p> </br>
        <p><b> die Auflösung:</b> ${Aufloesung}</p> </br>`;   
    });


console.log("%c ==== Bom-TS-Level-2_1 ====", "color: orange");
//! ============= Bom-TS-Level-2_1 =============

const countElement = document.getElementById('count') as HTMLDivElement;

function countdown() {
    let count = 10;

    const intervalId = setInterval(() => {
        count--;
        countElement.textContent = count.toString();

        if (count === 0) {
            clearInterval(intervalId);
            const messageElement = document.querySelector('.message') as HTMLDivElement;
            messageElement.style.display = 'none';
        }
    }, 1000); 
}
window.onload = countdown;
