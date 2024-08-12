function intro1(){
    console.log("Hello simple function")
}

intro1()


const ArrowFunkction = ()=> {
    console.log("Hello Arrow function");
    
}
ArrowFunkction()

//***Functions-TS-Grundlagen-Level-1_2 */

const imHTML =()=> {
    const htmlP = document.getElementById("Ausgabe_1_2") as HTMLParagraphElement
    htmlP.innerText = `Hallo`
}
imHTML()


const drei = 3
const vier = 4
const sechs = 6

const summe =()=>{
    console.log(drei+vier)
    
}
summe()

const multiplizieren = ()=>{
    const multi = sechs*drei
    console.log(multi)
    window.alert(`das ergebnis ist ${multi}`)
}
multiplizieren()

//const productOf2 = (zahl1: number, zahl2: number) =>    window.alert(zahl1 * zahl2);

const keysOfObject = (object: Object) => console.log(Object.keys(object));


//***This-TS-Level-1_2 */


