let btnAdd = document.querySelector('.input-todo button');
let data = [];
let countId = 0;
btnAdd.addEventListener('click', createTask);
function createTask(){
    var titleValue = document.getElementById('titleInput').value;
    var contentValue = document.getElementById('contentValue').value;
    var viewRender = document.querySelector('.content-todo');
    let codeId = countId + 1;
    countId++;
    var getData = {
        id: codeId,
        title: titleValue,
        content: contentValue
    }
    console.log(codeId);
    data.push(getData);
    for(let i=0;i<data.length;i++){
        var contentRender = `
            <div class="content-row">
                <p  class="todo-content_title">${data[i].title}</p>
                <div class="todo-content_description">${data[i].content}</div>
                <div class="todo-button_group">
                    <button>Thêm</button>
                    <button>Xóa</button>
                    <button>Chỉnh sửa</button>
                </div>
            </div>
        `
    }
    viewRender.innerHTML += contentRender;
    document.getElementById('titleInput').value = "";
    document.getElementById('contentValue').value = "";
    console.log(data);
}