// Step1 schema pro buch anlegen

type BookSchema = {
    titel:string,
    author:string,
    genre:string,
    year: number,
    pages: number,
    id: number,
}


//step2 Liste der Bücher anlegen
let bookList: BookSchema[]=[]

// step3 alle HTLM Elemente holen

const bookForm = document.getElementById('book-form') as HTMLFormElement;
const titleInput = document.getElementById('title-input') as HTMLInputElement;
const authorInput = document.getElementById('author-input') as HTMLInputElement;
const genreSelect = document.getElementById('genre-select') as HTMLSelectElement;
const yearInput = document.getElementById('year-input') as HTMLInputElement;
const pagesInput = document.getElementById('pages-input') as HTMLInputElement;
// ? Error und die Liste
const bookErrorOutput = document.getElementById('error-text') as HTMLDivElement;
const bookListOutput = document.getElementById('book-list');


function createBook(): BookSchema{
 console.log("ein neues Buche wurde hinzugefügt")
 const newBook: BookSchema = {
    titel: titleInput.value,
    author: authorInput.value,
    genre: genreSelect.value,
    year: Number(yearInput.value),
    pages: Number(pagesInput.value),
    id: bookList.length
 }
 return newBook
}

function validateBook(book: BookSchema):string{
    if(book.titel.length <=2){
    return "Titel mehr als zwei Zeichen sein"
    }
    return ""
}


bookForm?.addEventListener("submit", (event:Event)=>{
    event.preventDefault()
    console.log("Form was submitted");

    const newBook = createBook()

    const errorMassage= validateBook(newBook)
    console.log(errorMassage)
    if (errorMassage === ""){
        //bookList.push(newBook)

        //variante 2
        addBookToArray(newBook)
        showBook(newBook)
    }
})

//funktion für variante 2
 function addBookToArray(newBook:BookSchema){
    bookList.push(newBook)
} 

function showBook(book: BookSchema){
    const liElement = document.createElement("li") as HTMLElement
    liElement.innerHTML= `${book.titel} by ${book.author} - in Genre ${book.genre} - written in Year ${book.year} - with the size of ${book.pages} Pages`
}