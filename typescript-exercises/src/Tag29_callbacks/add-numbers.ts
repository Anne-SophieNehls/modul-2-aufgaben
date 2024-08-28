export function addNumbers (a: number, b: number, callback: (sum: number) => void): void {
const ergebnis = a + b;
callback(ergebnis);
}

 export const showErgebnis = (ergebnis: number) => {
console.log(`die summe ist ${ergebnis}`);
};
