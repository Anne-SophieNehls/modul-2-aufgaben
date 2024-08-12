// Selektieren

const formElement = document.getElementById("form_todo") as HTMLFormElement
const InputElement = document.getElementById("form_todo") as HTMLInputElement
const outputElement = document.getElementById("output") as HTMLDivElement


// Objectdefinition

type TodoSchema ={
    todoName: string,
    done: boolean,
    id: number
}

let todoList: TodoSchema[]=[]

// funktion

formElement?.addEventListener("submit", (event:Event)=>{
    event.preventDefault()
    const inputValue = InputElement.value
    if (inputValue){
        const todoObj:TodoSchema = {
            todoName: inputValue,
            done: false,
            id: todoList.length
        }
        todoList.push(todoObj)
        InputElement.value =""
        showToDos()
    } else{
        console.error("Du musst ein to do eingeben")
    }
})

function showToDos() {
    outputElement.innerHTML =""
    todoList.forEach((todo: TodoSchema)=>{
        const checkboxElement = document.createElement("input") as HTMLInputElement 
        checkboxElement.type = "checkbox"
        checkboxElement.checked = todo.done
        checkboxElement?.addEventListener  
        ("change", () => {
            todo.done =checkboxElement.checked
        })// diese letze Zeile ist wichtig, um die Checkbox auch im html reagieren zu lassen, sonst kann man sie im HTML nicht abharken
        outputElement.appendChild(checkboxElement)

        // Text Paragraph
        const todoElement = document.createElement("p") as HTMLParagraphElement
        todoElement.innerText = todo.todoName
        if(todo.done){
            todoElement.style.textDecoration = "line-through"
        }
        outputElement.appendChild(todoElement)

        //delete button
        const deleteBtn = document.createElement("button") as HTMLButtonElement
        deleteBtn.textContent = "❌"

        deleteBtn?.addEventListener("click", () => {
            if (todo.done){
            todoList.filter((el:TodoSchema) => el.id !== todo.id)
            showToDos()
            } else{
                window.alert("du must dein Todo erst abharken bevor ud es löschen kannst")
            }


        }) // wenn man bestimmte elemente löschen will, kann man es immer mit filter machen

        outputElement.appendChild(deleteBtn)

    })
}