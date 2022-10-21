let btn_add = document.querySelector('.input-todo button');
let data = [];
let countID = 0;

btn_add.addEventListener('click', (e) => {
    console.log(e);
    var getInput = document.querySelector('.input-todo input');
    var getMessage = document.querySelector('.message')
    let inputValue = document.getElementById('inputValue').value;
    let viewDisplayContent = document.querySelector('.content_todo');
    if(!inputValue){
        getInput.style.border = '2px solid red';
        getMessage.innerHTML = "* Bạn chưa nhập nội dung";
    }else if(inputValue){
        getMessage.innerHTML = ""
        getInput.style.border = 'none';
        var dataPush = {
            id: countID = countID + 1,
            content: inputValue
        }
        data.push(dataPush);
        for(let i=0;i<data.length;i++){
            var loadData = `
                <div class="view-content">
                <p>${data[i].content}</p>
                <i class="bi bi-three-dots more-option"></i>
                </div>
            `
        }
        viewDisplayContent.innerHTML += loadData;
        document.getElementById('inputValue').value = "";
    }
})
btn_add.addEventListener('keydown', (e) => {
    console.log(e.code)
});