const database = [
    {
        id: 1,
        title: 'Nguyễn Tiến Quân',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis iure tempore officia! Reiciendis officiis, maiores quae, recusandae exercitationem excepturi, non quas cum fuga facilis cupiditate totam alias! Officiis, saepe beatae.',
    }
];

// Tạo vào hiển thị công việc
let getBtnAdd = document.querySelector('.input-todo button');
getBtnAdd.addEventListener("click", () => {
    let getTitleInput = document.getElementById('valueInput').value;
    let getContentInput = document.getElementById('valueContentInput').value;
    let addContentTodo = document.querySelector('.content-todo');
    addContentTodo.style.display = 'block';
    let box_content = `
    <div class="content-row" style="width: 300px;">
        <p  class="todo-content_title" style="width: 300px; text-transform: uppercase; font-weight: bold; font-size: 20px; overflow-wrap: break-word; color: #fff;">${getTitleInput}</p>
        <div class="todo-content_description" style="width: 300px; margin-bottom: 20px; overflow-wrap: break-word; color: #fff;">${getContentInput}</div>
        <div class="todo-button_group" style="width: 300px; display: flex; justify-content: space-between;">
            <button style="width: 30%; height: 30px; border: none; background-color: rgb(255, 255, 255); color: #000; border-radius: 5px;" class="todo_add">Thêm</button>
            <button style="width: 30%; height: 30px; border: none; background-color: rgb(255, 255, 255); color: #000; border-radius: 5px;" class="todo_remove">Xóa</button>
            <button style="width: 30%; height: 30px; border: none; background-color: rgb(255, 255, 255); color: #000; border-radius: 5px;" class="todo_edit">Chỉnh sửa</button>
        </div>
    </div>
    `
    addContentTodo.innerHTML = box_content;

})