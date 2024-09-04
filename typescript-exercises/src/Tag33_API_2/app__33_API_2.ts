import IToDo from "./interfaces/IToDo";

//= fetch-level-2_2
console.log("%c fetch-Level-2_2 ", "background: teal; color: white");

//HTML ELemente abholen

const todoList = document.getElementById('todo-list') as HTMLUListElement;
const searchInputToDos = document.getElementById('searchInput') as HTMLInputElement;
const btnToDos = document.getElementById('show-btn') as HTMLButtonElement;

// URL speichern

const ToDo_URL = "https://jsonplaceholder.typicode.com/todos"

// button
btnToDos?.addEventListener("click", (event: Event)=>{
    event.preventDefault
    console.log("to do was clicked");
    fetchAndDisplay(ToDo_URL)})

//fetch function

function fetchAndDisplay(url: string,){
    fetch(url)
    .then((resp: Response) => {
        console.log(resp);
        return resp.json()
    })
    .then((toDos: IToDo[]) => {
        console.log(toDos)
        // sortieren
        const sortieren = toDos.sort((a, b) => a.title.localeCompare(b.title));

        todoList.innerHTML = createTodoOutput(sortieren)
    })
    .catch((error:Error) =>{
        console.error(error)
    })}


// funktionen für die Listendastellung
function createTodoOutput (toDos: IToDo[]):string{
    
    const resultTodo = toDos.map((toDo: IToDo)=>{
        if(toDo.completed){
            return `
        <ul class="green">
        <li><p>ID: ${toDo.id}</p></li>
        <li><p>User ID: ${toDo.userId}</p></li>
        <li><b>Titel: ${toDo.title}</b></li>
        <li><p>Done?: ${toDo.completed}</p></li>
        </br>
        </ul>`; 
        }
        else{
            return `
            <ul class="red">
            <li><p>ID: ${toDo.id}</p></li>
            <li><p>User ID: ${toDo.userId}</p></li>
            <li><b>Titel: ${toDo.title}</b></li>
            <li><p>Done?: ${toDo.completed}</p></li>
            </br>
            </ul>`; 
        }
    })


//-serch

// Suchfunktion beim Eingeben in das Eingabefeld
searchInputToDos.addEventListener('input', (event) => {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    const filteredTodos = IToDo.todos.filter(todo => todo.title.toLowerCase().includes(searchTerm));
  
    // Aufgabenliste aktualisieren
    todoList.innerHTML = '';
    createTodoOutput(filteredTodos)
    });
  }


//= fetch-level-3_1
console.log("%c fetch-Level-3_1 ", "background: darkblue; color: white");



