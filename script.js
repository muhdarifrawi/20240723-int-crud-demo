// CRUD : Create, Read, Update, Delete

// data model -> handle how the data is handled
// Create Update Delete


// let appStart = true;

// function App(){
//     while(appStart){
//         console.log("Please enter your choices");
//     }
// }


let todos = [
    {"id": 1, "name":"clean room", "urgency":1},
    {"id":2,"name":"wash laundry", "urgency":2},
    {"id":3,"name":"cook", "urgency":3}
];


function showAllTask(){
    let list = document.querySelector("#list");
    list.innerHTML = "";
    // if array is not empty
    if(todos.length !== 0){
        for(i=0;i<todos.length;i++){
            console.log(todos[i]);
            list.innerHTML+=`<li class="list-group-item">ID:${todos[i].id} Task name: ${todos[i].name}
                                <span class="badge text-bg-danger rounded-pill">${todos[i].urgency}</span>
                            </li>`
        }
    }
    else{
        console.log("List is empty")
    }
}

showAllTask();

function addTaskInterface(){
    // DOM
    // let taskInput = prompt("Enter task here: ");
    // let urgencyInput = prompt("Enter urgency here (1-5): ");
    let taskInput = document.querySelector("#taskName").value;
    let urgencyInput = document.querySelector("#urgency").value;
    addTaskModel(taskInput,urgencyInput);
}

// addTaskInterface();

// event listener here
document.querySelector("#submit").addEventListener("click", addTaskInterface);

function addTaskModel(taskInput, urgencyInput){
    let userTodos = {
        "id":Math.floor(Math.random() * 99),
        "name": taskInput,
        "urgency": urgencyInput
    }

    todos.push(userTodos);
    showAllTask();
}

function deleteTaskInterface(){
    let deleteId = prompt("Select id of task to delete: ");
    deleteTaskModel(deleteId);
}

function deleteTaskModel(deleteId){
    deleteId = parseInt(deleteId)
    for(i=0;i<todos.length;i++){
        if(todos[i].id == deleteId){
            todos.splice(i, 1)
        }
    }
    showAllTask();
}

// deleteTaskInterface();

function modifyTaskInterface(){
    let modifyId = prompt("Select id of task to modify: ");
    let newName = prompt("Enter new name: ");
    let newUrgency = prompt("Enter new urgency:" );
    modifyTaskModel(modifyId, newName, newUrgency);
}

function modifyTaskModel(modifyId, newName, newUrgency){
    modifyId = parseInt(modifyId);
    for(i=0;i<todos.length;i++){
        if(todos[i].id == modifyId){
            todos[i].name = newName;
            todos[i].urgency = newUrgency;
        }
    }
    showAllTask();
}

// modifyTaskInterface();