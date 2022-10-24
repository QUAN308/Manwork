const taskApi = 'http://localhost:3000/task';

function start(){
    renderTasks();
    handleCreateTask();
}
start();

// Render Task
function renderTasks(){
    let locationView = document.querySelector(".content_todo");
    fetch(taskApi)
    .then((respone) => {
        return respone.json();
    })
    .then((tasks) => {
        tasks.map((task) => {
            let render = `
                <div class="view-content">
                    <p>${task.content}</p>
                    <div class="control_function">
                        <i class="bi bi-pencil-square edit"></i>
                        <i class="bi bi-trash trash"></i>
                    </div>
                </div>
            `
            locationView.innerHTML += render;
        })
        
    });
}
function handleCreateTask(){
    let btnAddTask = document.querySelector(".input-todo button");
    btnAddTask.addEventListener("click", () => {
        let inputValue = document.querySelector(".input-todo input").value;
        let value = {
            content: inputValue
        }
        createTask(value);
    })
}

function createTask(data, callback){
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(taskApi, options)
    // Hiển thị dữ liệu ra màn hình khi task được thêm vào db
        .then((respone) => {
            return respone.json();
        })
        .then(callback);
}
