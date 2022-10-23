let btn_add = document.querySelector('.input-todo button');
let data = [];
let countID = 0;
btn_add.addEventListener('click', (e) => {
    var getInput = document.querySelector('.input-todo input');
    var getMessage = document.querySelector('.message')
    var inputValue = document.getElementById('inputValue').value;
    var viewDisplayContent = document.querySelector('.content_todo');
    if(!inputValue){
        getInput.style.border = '2px solid red';
        getMessage.innerHTML = "* Bạn chưa nhập nội dung";
    }else if(inputValue){
        getMessage.innerHTML = ""
        getInput.style.border = 'var(--border-input)';
        var dataPush = {
            id: countID = countID + 1,
            content: inputValue
        }
        data.push(dataPush);
        for(var i=0;i<data.length;i++){
            var renderData = `
                <div class="view-content">
                    <p>${data[i].content}</p>
                    <div class="control_function">
                        <i class="bi bi-pencil-square edit"></i>
                        <input class="trash" type="button" value="${data[i].id}">
                    </div>
                </div>
            `
        }
        // Hiển thị ra màn hình và clear ô input
        viewDisplayContent.innerHTML += renderData;
        document.getElementById('inputValue').value = "";
        // Xóa task
        var getTrash = document.querySelectorAll('.trash');
        for(var i=0;i<getTrash.length;i++){
            var trash = getTrash[i];
            trash.addEventListener("click", () => {
                console.log(trash.value);
                data = data.filter((item) => {
                    return item.id != trash.value;
                })
            })
        }
    }
})
