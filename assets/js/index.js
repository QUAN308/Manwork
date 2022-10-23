const taskApi = 'http://localhost:3000/task';

function start() {
    getTasks(renderCourses);
    handleCreateTask();
}
start();

// Step 2
function getTasks(callback) {
    fetch(taskApi)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}
//Step 3
function renderCourses(tasks) {
    let localRender = document.querySelector('.content_todo');
    tasks.map((task) => {
        var renderClient = `
            <div class="view-content">
                <p>${task.content}</p>
                <div class="control_function">
                    <i class="bi bi-pencil-square edit"></i>
                    <i class="bi bi-trash trash"></i>
                </div>
            </div>
        `;
        localRender.innerHTML += renderClient;
    });
}
// Step 4
function handleCreateTask() {
    let btnAddTask = document.querySelector('.input-todo button');
    btnAddTask.addEventListener('click', () => {
        let value = document.querySelector('#inputValue').value;
        if (!value) {
            console.log('Bạn chưa nhập nội dung');
        } else {
            let data = {
                content: value,
            };
            createTask(data);
        }
    });
}
// Step 5
function createTask(data, callback) {
    console.log(callback);
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    fetch(taskApi, options)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}
