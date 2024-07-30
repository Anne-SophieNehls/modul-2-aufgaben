console.log(Math.PI)



let randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];

console.log(Math.round(3.14));
console.log(Math.round(193.4464));
console.log(Math.round(0.8596433607));
console.log(Math.round(-2.940629089));
console.log(randomNumbers)



const random10: number = Math.floor(Math.random() + 10 + 1) 
const random100: number = Math.floor(Math.random() + 100 + 1) 

console.log(random10);
console.log(random100);




const rateMal: number = Number( window.prompt("Schätze eine nummer zwischen 1 und 10")) 

const computerChoise: number = Math.floor(Math.random() * 10 ) + 1

if(rateMal === computerChoise){
    console.log(`richtig die Nummer ist ${computerChoise}`)
}
else{
    console.log(`Falsch die ummer ist ${computerChoise}`)
}