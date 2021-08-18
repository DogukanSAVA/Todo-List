//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);


//Funcions

function addTodo(event) {
          event.preventDefault();



          const todoDiv = document.createElement('div');
          todoDiv.classList.add("todo");

          const newTodo = document.createElement('li');
          newTodo.innerText = todoInput.value;
          newTodo.classList.add('todo-item');
          todoDiv.appendChild(newTodo);
          //Add Todo to localstorage
          saveLocalTodos(todoInput.value);

          //Check Mark Button
          const completedButton = document.createElement('button');
          completedButton.innerHTML = '<i class="fas fa-check"></i>';
          completedButton.classList.add("complete-btn");
          todoDiv.appendChild(completedButton);
          //Check Trash Button
          const trashButton = document.createElement('button');
          trashButton.innerHTML = '<i class="fas fa-trash"></i>';
          trashButton.classList.add("trash-btn");
          todoDiv.appendChild(trashButton);
          //Append To List
          todoList.appendChild(todoDiv);
          //Clear Todo INPUT VALUE
          todoInput.value = "";

}

function deleteCheck(e) {
          const item = e.target;
          //Delete 
          if (item.classList[0] === "trash-btn") {
                    const todo = item.parentElement;
                    todo.classList.add("fall");
                    todo.addEventListener('transitionend', function () {
                              todo.remove();

                    });
          }

          //Check 

          if (item.classList[0] === "complete-btn") {
                    const todo = item.parentElement;
                    todo.classList.toggle("completed");
          }
}

function filterTodo(e) {
          const todos = todoList.childNodes;
          todos.forEach(function (todo) {
                    switch (e.target.value) {
                              case "all":
                                        todo.style.display = "flex";
                                        break;
                              case "completed":
                                        if (todo.classList.contains("completed")) {
                                                  todo.style.display = "flex";
                                        } else {
                                                  todo.style.display = "none"
                                        }
                                        break;
                              case "uncompleted":
                                        if (!todo.classList.contains("completed")) {
                                                  todo.style.display = "flex";

                                        } else {
                                                  todo.style.display = "none"
                                        }
                                        break;
                    }

          });
}

function saveLocalTodos(todo) {
          let todos;
          if (localStorage.getItem("todos") === null) {
                    todos = [];
          } else {
                    todos = JSON.parse(localStorage.getItem('todos'));
          }


          todos.push(todo);
          localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
        let todos;  
}