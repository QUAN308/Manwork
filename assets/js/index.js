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
                    <div class="control_task">
                        <i class="bi bi-circle"></i>
                    </div>
                    <p>${data[i].content}</p>
                </div>
            `
        }
        viewDisplayContent.innerHTML += renderData;
        document.getElementById('inputValue').value = "";

    }
})
var getControlTask = document.querySelector('.control_task');
getControlTask.addEventListener("click", (e) => {
    console.log(e);
})