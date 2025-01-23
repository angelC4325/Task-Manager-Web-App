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
//display task
function displayTask(){
    const tasklist = document.getElementById('taskList');
    let html='';
    for(let i=0;i<taskv.length;i++){
        html +=`
        <div class="task-item">
            <span class="task-text">${i+1}.${taskv[i]}</span>
        
        <div class="button-group">
        <button class="delete-btn" onclick="remove()">delete</button>
        </div>
        </div>
        `;
    }
    tasklist.innerHTML=html;
}