const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");

const cardItem = (text) =>{ 
    const item = `
                <div class="task">
                    <input type="text" class="text" readonly value="${text}" />
                    <div class="actions">
                        <button class="edit" oncilck="editleh(this)"><i class="fas fa-pen"></i></button>
                        <button class="done"><i class="fas fa-check"></i></button>
             
                        <button class="delete" onclick="ustgah(this)"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
    return item;
}

const taskAdd = () => {
    let text = inputText.value;
    if(text === ""){
        alert("Ta utga oruulaagui baina");
    }else{

        taskList.innerHTML += cardItem(text);
    }
}

addBtn.addEventListener("click",taskAdd);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        taskAdd();
    }
});
const ustgah = (e) => {
    const parent = e.parentNode.parentNode.parentNode;
    const child = e.parentNode.parentNode;
    parent.removeChild(child)
};
const editleh = (edited) =>{
 const editText = inputText.value+edited.value;
 
}