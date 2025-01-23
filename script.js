//global variablesand will create empty area with name task
let taskv = [];
//create add task function
function addTask(){
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    console.log(task);
    if(task!=""){
        taskv.push(task);
        input.value='';
        displayTask();
    }
    console.log(taskv)
}
function remove(index){
    taskv.splice(index,1);
    displayTask();
}
//edit task
function edit(n){
    const newTask = prompt("edit task ",taskv[n]);
    console.log(newTask)
    console.log(n)

    taskv[n]=newTask.trim();
    displayTask()
}
//display task
function displayTask(){
    const tasklist = document.getElementById('taskList');
    let html='';
    for(let i=0;i<taskv.length;i++){
        html +=`
        <div class="task-item">
            <span class="task-text">${i+1}.${taskv[i]}</span>
        
        <div class="button-group">
        <button class="edit-btn" onclick="edit(${i})">edit</button>
        <button class="delete-btn" onclick="remove()">delete</button>
        </div>
        </div>
        `;
    }
    tasklist.innerHTML=html;
}