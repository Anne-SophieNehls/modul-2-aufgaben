import { movies } from "./movie";

let copiedMovies: Movie[] = [...movies]

type Movie = [string, string, string, string, string[], string]

const movie_gallery = document.getElementById("movies") as HTMLElement

function showMovies(movieInput: Movie[]){
    movieInput.forEach((movie)=> {
        const card = document.createElement("div") as HTMLElement
        movie_gallery.appendChild(card)

        const titel = document.createElement("h2") as HTMLElement
        titel.textContent = movie[0]
        card.appendChild(titel)


        const year = document.createElement("p") as HTMLElement
        year.textContent = movie[1]
        card.appendChild(year)


        const director = document.createElement("b") as HTMLElement
        director.textContent = movie[2]
        card.appendChild(director)

        const time = document.createElement("p") as HTMLElement
        time.textContent = movie[3]
        card.appendChild(time)

        //__Array in Array

        if (Array.isArray(movie)){
            const genreUL = document.createElement("ul") as HTMLElement
            movie[4].forEach(genre) => {
                const liGenre = document.createElement("li") as HTMLElement
                liGenre.textContent = genre
                genreUL.appendChild(liGenre)
            }
        }

        //___End Array

        const rating  = document.createElement("p") as HTMLElement
        rating.textContent = movie[5]
        card.appendChild(rating)
    })
}

showMovies(movies)

function restDOM(){
    movie_gallery.innerHTML = ""
}


const searchInput = document.getElementById("search_input") as HTMLInputElement

const searchButton = document.getElementById("btn_search") as HTMLInputElement

function suche(){
    console.log(searchInput.value)
    const filterMovie = copiedMovies.filter((movie)=>{
        return movie[0].toLowerCase().includes(searchInput.value.toLowerCase())
    })
    //! diese funktion mit restDOM sollte immer aufgerufen werden um die alten ausgaben zu entfernen und nur die neuen anzuzeigen
    restDOM()
    showMovies(filterMovie)
}

searchButton.addEventListener("click", suche)

function sortYearUp(){
    restDOM()
    copiedMovies.sort((yearA, yearB)=>{
        return Number(yearA[1]) - Number(yearB[1])
    })
    showMovies(copiedMovies)
}

document?.getElementById("btn_Year_up")?.addEventListener("click", sortYearUp)