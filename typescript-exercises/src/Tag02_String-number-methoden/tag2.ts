// const meinString: string ="Heyho, das Wetter ist schön und bald ist Wochenende"


// ! String-Methods-TS-Level-1_3 */

let oceanQuote = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

const semikolon: number = oceanQuote.search(";")
console.log({semikolon})

const oceanGreen: number = oceanQuote.search("green")
console.log({oceanGreen})

const oceanBlue: number = oceanQuote.search("blue")
console.log({oceanBlue})

// ! String-Methods-TS-Level-1_4 */

const susisStatus = 'Susi is going to codingschool' 

const susisLength: number = susisStatus.length
console.log({susisLength})

const susi: string = susisStatus.slice(0,4)

const is: string = susisStatus.slice(5,7)

const isGoingTo: string = susisStatus.slice(5,16)

const school: string = susisStatus.slice(23)

const isGoingToSchool: string = isGoingTo.concat(" ").concat(school)

const susiIsSchool: string = susi.concat(" ").concat(is).concat(" ").concat(school)
const susiId = document.getElementById("string1_4")!

susiId.innerHTML = `<p>${susi}</p></br><p>${is}</p></br><p>${isGoingTo}</p> </br><p>${isGoingToSchool}</p> </br><p>${susiIsSchool}</p>`






// ! String-Methods-TS-Level-1_5 */

const whereIsSusi = 'Susi is back from codingschool'

const susi1_5: string = whereIsSusi.substring(0,4)

const is1_5: string = whereIsSusi.substring(5,7)

const school1_5: string = whereIsSusi.substring(23)

const susiId1_5 = document.getElementById("string1_5")!

const susiIsSchool1_5: string = susi1_5.concat(" ").concat(is1_5).concat(" ").concat(school1_5)

susiId1_5.innerHTML = `<p>${susi1_5}</p></br><p>${is1_5}</p></br><p>${school1_5}</p> </br><p>${susiIsSchool1_5}</p>`

// ! String-Methods-TS-Level-1_6 */

const samsJob: string = "Sam is working at codingschool"


const sam1_6: string = samsJob.substring(0,3)

const is1_6: string = samsJob.substring(4,7)

const at1_6: string = samsJob.substring(15,18)

const school1_6: string = samsJob.substring(24)

const samIsSchool1_6: string = sam1_6.concat(" ").concat(is1_6).concat(" ").concat(at1_6).concat(" ").concat(school1_6)

const samClass1_6 = document.querySelector(".samsJob1")!

samClass1_6.innerHTML = `<p>${samIsSchool1_6}</p>`

//document.write(samsJob1  + "<br>")

// ! String-Methods-TS-Level-1_7 

const samsStatus = "Sam is good at codingschool"

const badSam: string = samsStatus.replace("good", "bad")

const SamSusi: string = samsStatus.replace("Sam", "Susi")

const tennis: string = samsStatus.replace("codingschool", "tennis")

const samClass1_7 = document.getElementById("string1_6")!

samClass1_7.innerHTML = `<p>${badSam}</p></br><p>${SamSusi}</p></br><p>${tennis}</p> </br>`

// ! String-Methods-TS-Level-1_8

const whereIsSam: string = "Sam is going to school" 

const bigSamsSatz: string = whereIsSam.toUpperCase()

const smallSamsSatz: string = whereIsSam.toLowerCase()

const samClass1_8 = document.getElementById("string1_8")!

samClass1_8.innerHTML = `<p>${whereIsSam}</p></br><p>${bigSamsSatz}</p></br><p>${smallSamsSatz}</p> </br>`


// ! String-Methods-TS-Level-1_9

const Sam: string = "Sam " 
const isGoing: string = " is going to "
const toSchool: string = " school "
const Susi9: string = "Susi " 
const and: string = " and "
const movie: string = " the movie theater."
const gym: string = " the gym."
const areGoing: string = " are going to "

const SamSchoolMovie: string = Sam.concat(isGoing).concat(toSchool).concat(and).concat(movie).concat(" ")

const SamMovie: string =  Sam.concat(isGoing).concat(movie)

const SamSusiSchool: string =  Sam.concat(and).concat(Susi9).concat(areGoing).concat(toSchool)

const SamSusiGymMovie: string = Sam.concat(and).concat(Susi9).concat(areGoing).concat(gym).concat(and).concat(movie)

const SusiSchoolMovie: string = Susi9.concat(isGoing).concat(toSchool).concat(and).concat(movie)


const samClass1_9 = document.getElementById("string1_9")!

samClass1_9.innerHTML = `<p>${SamSchoolMovie}</p></br><p>${SamMovie}</p></br><p>${SamSusiSchool}</p> </br>p>${SamSusiGymMovie}</p></br><p>${SusiSchoolMovie}</p> </br>`

// ! Number-Methods-TS-Level-1_2

const funfzehn: number = 15.16698;
const sieben: number = 7.78714; 
/* const dreihundert: string =  "321" */;
 
console.log(funfzehn.toFixed(2));

console.log(sieben.toFixed(2));

/* console.log(dreihundert.toFixed(2)); */



// ! Number-Methods-TS-Level-1_3


// ! Number-Methods-TS-Level-1_4
const zwoelf: string = "12.3"
const drei: string ="3.14"
const dreiZweiEins: string ="321"

const zwoelfNum: number = Number(zwoelf)
const dreiNum: number = Number(drei)
const dreiZweiEinsNum: number = Number(dreiZweiEins)

console.log({zwoelfNum})
console.log({dreiNum})
console.log({dreiZweiEinsNum})

// ! String-Methods-TS-Level-1_1



// ! String-Methods-TS-Level-1_2


// const earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean."

