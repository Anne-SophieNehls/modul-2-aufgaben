import { TextTools } from "./text-tools";

const Beispieltext1 = "Hear me, see me what I tried to find was; Emancipation of the human mind, cause"
const Beispieltext2 = "Hear me, see me put your life on the line; A confirmation of your strife; You leave everything behind"

console.log(Beispieltext1)
console.log(TextTools.grossbuchstaben(Beispieltext1))
console.log(TextTools.rueckwaerts(Beispieltext1))

console.log(Beispieltext2)
console.log(TextTools.grossbuchstaben(Beispieltext2))
console.log(TextTools.rueckwaerts(Beispieltext2))