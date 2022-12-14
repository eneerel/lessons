

const col4 = document.getElementsByClassName("col4")[0];
const change =() =>{
    for(let i =0; i< col4.length; i++){
        let color= colors();
        col4[i].style.backgroundColor=color;
    }
}
const colors = () =>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    col4.style.backgroundColor = `rgb(${r},${g},${b})`;
}

myBtn.addEventListener("click",change);
