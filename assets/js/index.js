let getBtnAdd = document.querySelector('.input-todo button');
getBtnAdd.addEventListener("click", (e) => {
    let getTitleInput = document.getElementById('valueInput').value;
    let getContentInput = document.getElementById('valueContentInput').value;
    let getTitleContent = document.querySelector('.todo-content_title');
    let content = document.querySelector('.todo-content_description');
    let addContent = document.querySelector('.content-todo .content-row');
    let addContentTodo = document.querySelector('.content-todo');
    addContentTodo.style.visibility = 'visible';
    let box_content = `
        <b class="todo-content_title">${getTitleContent.innerHTML += getTitleInput}</b>
        <div class="todo-content_description">${content.innerHTML = getContentInput}</div>
        <div class="todo-button_group">
            <button class="todo_add">Thêm</button>
            <button class="todo_remove">Xóa</button>
            <button class="todo_edit">Chỉnh sửa</button>
        </div>
    `
    addContent.innerHTML = box_content;
})