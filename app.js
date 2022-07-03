// Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list"); 
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deletecheck);
filterOption.addEventListener("click", filtertodo);

// Function

function addTodo(event) {

    // To prevent from submitting
    event.preventDefault();

    // todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create list
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;    
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Check mark Button 
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';      //innerHtml will take inpute as html not text
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // trash Button 
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to todo-list
    todoList.appendChild(todoDiv);  
    

}

function deletecheck(e){

    e.preventDefault();
    const item = e.target;

    // Delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
 
    //Checked todo
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed"); 
    }
    
}

function filtertodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } 
                else {
                    todo.style.display = "none";
                }
                break;

            case "uncompleted":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}