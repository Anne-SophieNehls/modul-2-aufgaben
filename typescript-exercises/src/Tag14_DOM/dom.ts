//!_______Dom-Elements-TS-Level-1_1______

const button = document.getElementById("btn_add")as HTMLButtonElement ;
const inputText = document.getElementById("inputText")as HTMLInputElement ;
const Einkaufsliste = document.getElementById("myList")as HTMLUListElement ;


button?.addEventListener("click", (zurEinkaufsliteHinzufügen)=>{
    let EinkaufsElement = inputText.value
    zurEinkaufsliteHinzufügen.preventDefault()
   let article = document.createElement("li")
   article.textContent = EinkaufsElement
   Einkaufsliste.appendChild(article)
   EinkaufsElement = ""
})

//!____________DOM-TS-Level-1_3__________

const image1 = document.createElement("figure") as HTMLImageElement
image1.setAttribute("src", "https://picsum.photos/id/237/800/1200")
image1.setAttribute("alt", "hier könnte Ihre Werbung stehen!!")

const image2 = document.createElement("img") as HTMLImageElement
image2.setAttribute("src", "https://picsum.photos/id/237/600/1000")
image2.setAttribute("alt", "hier könnte Ihre Werbung stehen!!")

const image3 = document.createElement("img") as HTMLImageElement
image3.setAttribute("src", "https://picsum.photos/id/237/400/200")
image3.setAttribute("alt", "hier könnte Ihre Werbung stehen!!")

const gallery = document.getElementById("gallery") as HTMLElement
gallery.appendChild(image1)
gallery.appendChild(image2)
gallery.appendChild(image3)
