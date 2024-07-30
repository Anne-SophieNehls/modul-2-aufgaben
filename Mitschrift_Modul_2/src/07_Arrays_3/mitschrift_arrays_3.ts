import{eightiesHits} from "./hits";

console.log(eightiesHits);


// 01. lastindexOf()  => gibt uns den Index des letzten vorkommens zurück

const lastIndexRio: number = eightiesHits. lastIndexOf("Rio")

console.log(lastIndexRio)
  

//02. includes()  => gibt und ein boolean wert zurück, ob das elemente enthalten ist. heirmit kann man also testen, ob man nach seinem Element in dem Richtigen Array sucht oder z.b. ob man es schon hinzugefügt hat etc...

const tailLoveWhatever: boolean = eightiesHits.includes("Tainted love")
if(tailLoveWhatever){
    console.log("Dein Lied wurde gefunden")
} else {
    console.log("Sorry, dein lied ist nicht hier")
}
// hier muss auch wie die schreibweise das gesammten Sting nachdem man suchen will richti sein 


///03. find() => gibt einem immer den ersten wert den er findet zurück und stellt dann die suche ein
//

const firstHitWithDont: string = eightiesHits.find((hit) => hit.startsWith ("Dont"))

console.log(firstHitWithDont)

//! es folgt eine vernüftige Metode zum suchen!:
//04. filter() => das filtert ALLE Elemnten heraus, die den kriterien entsprechen. Das Ergbnis wir in einem NEUEN Array ausgegeben (find z.b. gibt nur strings zurück)

const firstHitWithDontFilter: any = eightiesHits.filter((hit: string) => hit.startsWith("Dont"))
console.log(firstHitWithDontFilter)
// bei der Typisierung kann man entweder nichts angeben, oder man gibt :any an, da hier bei Filter jeder Datentyp vwerwendet werden kann

const SongsWithLove = eightiesHits.filter((hit: string) => hit.includes("Love"))

const loveSearch: string = "Love"
const SongsWithLoveLowerCase = eightiesHits.filter((hit: string) => {
    return hit.toLowerCase().includes(loveSearch.toLowerCase)
})
// hier wird mit "toLowerCase" in der Carlberg funtction alles im Array auf kleine buchstaben gemacht, sowie auch den input für die suche, um hier auf jeden fall das wort zu finden

// das gleiche kann man auch mit toUpperCase machen

// und wir können nicht nur nach einer sache filtern, man kann auch mehrere miteinander verknüpfen mit dem zeichen für oder "||" hier wird geguckt ob das element e die eine oder die andere bedingung hat

const allHitsWithDontAndEnjoy = eightiesHits.filter((hits:string) =>{
    return hits.startsWith("Dont") || hits.startsWith("Enjoy")
})
console.log(allHitsWithDontAndEnjoy)

// mit && kann man auch suchen, aber dann MÜSSEN beide bedingungen zutreffen (wie beim online schopping, wenn man eine farbe UND eine größe anwählt, da muss auch beides zutreffen)
const allHitsWithDontOrEnjoy = eightiesHits.filter((hits:string) =>{
    return hits.startsWith("Dont") && hits.startsWith("Enjoy")
})

console.log(allHitsWithDontOrEnjoy)

//__________________________

// 04 map => greift auf das ursprungs Array zu, kann die Elemente darin bearbeiten und gibt uns dann ein neues Array mit den bearbeideten Elementen zurück

const edit80Hits = eightiesHits.map ((hit: string) =>{
    return hit +"!"
})

console.log(edit80Hits)

const hitsToUpperCase: string[] = eightiesHits.map((hit :string) => hit.toUpperCase())

console.log(hitsToUpperCase)

//______________________________

const fruits: string[] = ["Kiwi", "Wassermelone", "Apfel", "Birne", "Kiwi"]

const emojiFruits: string[] = fruits.map((fruit: string) =>{

    //! v1.
    switch(fruit){
        case "Birne" :
            return "🍐"
        case "Kiwi" :
            return "🥝"
            case "Wassermelone" :
                return "🍉"
            case "Apfel" :
                return "🍎"
                default :
            return "Kein Obst gefunden"
    }

    //!v2. if else

    }
    )

    console.log(emojiFruits)


//____________ 
// 05 forEach() => druchläuft alle Array Elemente und gibt im gegebsatz zu Map KEIN neues Array zurück. Es wird genutzt um direkt ein neues Element auszugeben.
// es wird auch nicht in einer neuen Variablen geschrieben sondern direkt der befehl an den ursprünglichen Variablennamen weitergegeben

eightiesHits.forEach((hit: string) =>{
    if (hit.includes("Blue")){
        console.log(`best Song ${hit}`)
    }  else if (hit.includes("rio")){
        console.log(`worst Song ${hit}`)
    } else {
        console.log(`good Song ${hit}`)
    }
    console.log()
})
///__________________-

//**** Nehr-Dimensional Array ****/


const shoppingListWeek: string[][] = [["Water", "beer", "Putzmittel"], 
                                      ["Tea", "Coffee", "Cola"]]

const beer = shoppingListWeek [0] [1]
console.log(beer)
const cola = shoppingListWeek [1] [2]
console.log(cola)