const emptyArray: string[] = []
console.log(emptyArray)
emptyArray[5] = "ich bin ein neues Kind"
console.log(emptyArray)
emptyArray[0] = "ich bin das erste Kind"


//* Kopieren

let priecesItem: number =69.99
console.log("ppreis", priecesItem)
let kopiedPrices = priecesItem
console.log("kopie ohne änderung", kopiedPrices)
kopiedPrices = 29.99
console.log("nun mit reduziertem preis", kopiedPrices)

//+++ der veraltete weg des kopierens

const fruits: string[] = ["a", "b", "c", "D"]
let kopieFruits = fruits
console.log("ein mal ungeändert", kopieFruits)
kopieFruits.pop()
console.log("eine frucht weniger", kopieFruits)
console.log("shit, das wurde auch geändert, das soll ja nicht sein", fruits)

// RICHTIG KOPIEREN
// 01. slice                   //!  HIER IST DER WICHTIGE TEIL
const realKopieFruits: string[] = fruits.slice()
realKopieFruits.pop()

// 02.01. concat() ... nicht wie .concat bei den string-Metoden, ist nicht das selbe und macht ganz andere wilde sachen. 
//* => Ohne Parameter angeben, dann funktioniert es wie eine Kopie

const KopieConcatFruits: string [] = fruits.concat()

KopieConcatFruits.shift() //=> gucken was sich nun bei der Kopie im vergleich zu den anderen ändert
console.log({fruits})
console.log({KopieConcatFruits})


// 02.02. concat mit parametern, das sorgt für die verbindung zwei oder noch mehr arrays
const vegetables: string[] = ["erbsen", "karotten", "Broccoli"]
const vegetables2: string[] = ["gurke", "bohne"]
const mischmasch: string[] = fruits.concat(vegetables, vegetables2, "randim item")
console.log mischmasch


// 03. spread operator "...." => kopiert alle Elemente und natürlich am Ende sollte immer geschrieben werden

const spredKopie: string[] = [...fruits]
spredKopie.push("traube")
console.log({ fruits })
console.log({ spredKopie })

/// das ... ist so ein plarthalter fürs script, hier weis das system "Aha, hier kommt ein inhalt" dieser inhalt dar sich nur auf Objecte und arrays beziehen, nicht auf number, string oder boolean. das heist für den spread operator ist es ein wesentlicher bestandteil, bei andern operatoren machen wir das aber auf keinen fall


// 03.02. spred operator kannn direkt mehrere arrays hinterianernder hängen
//! nachtragen aus dem git  :(



//? Find Metoden - neues thema

// 01 index0f => gint die position des vorkommendes Array Element zurück

const autoMarke: string[] =["benz", "BMW", "tesla", "volvo"]

const positionTesla: number = autoMarke.index0f("tesla")
console.log(positionTesla)



// 02 find() => ist eine Einfache Suchmaschiene und gibt uns das erste gesuchte Index wieder
const songs: string[] =['lied1', 'lied2', 'lied3', 'lied4' ,'lied5', 'lied6']

const findSong: string  | undefined = songs.find((oldie) => oldie === 'lied3')
console.log(findSong)
// ein find braucht immer eine Funktion inform einer "Carlberg-function", heist innerhlab, siehe in den klmammwern nach find. hier schrieben wie ein abgekürztes if else
//der nachteil an find ist, dass man hier immer nur das erste elemente fidet ( also wnen ich nur nach lied suchen würde, würde es mit nur das lied1 rauswerfen)

// find geht die Strings einzelnt durch, testet aufs muster und guckt in seiner funktion, die den parameter (in dem fall oldie) enspricht (in dem fall === 'lied3') und sicht nachdem er diese Zeichenabfolge gefunden hat nicht mehr weiter


//? fond 02 = man kann auch einfach.startsWith hinzu fügen




//! SORT METHODEN

//01 reverse => kann die Reihenfolge umdrehen

 const colors: string[] = ["red", "blue", "green", "yellow"]

 colors.reverse()

const newPrices: number[] = [ 45, 9, 1200, 111 ]

 //02.1 sort() sortiert die elemente nach dem Aphabeth, wenn es strings sind, bei number ist  dieser operator etwas dümmer und sortiert nur von 1-9 nach den ziffern und nicht nach den Zahlen. wenn wir z.b. 45, 9, 1200, 111 haben, würde es so sortiert werden: 111, 1200, 45, 9 und nicht logisch nach aufsteigender größe. damit das nicht passiert brauchen wir eine Carlberg-function:
 const numbersRichtigSortieren = newPrices.sort((a: number, b: number) a - b )
 console.log(numbersRichtigSortieren)
 // hier sortiert er sie nun rihtig mit kleiner als und größer als



 //20.2 sort()

 colors.sort((a: string, b: string) =>{
    return a.localeCompare(b)
 }
)

console.log(colors);

colors.sort((a: string, b: string) =>{
    return b.localeCompare(a)
 }
)

console.log(colors);



 // => funktionen mit => nennen sich arrow functions (weil das aussieht wie ein pfeil)