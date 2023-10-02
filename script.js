// Preloader
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display ="none";
})

// To Display Time 
let time = document.getElementById("time");

setInterval(() =>{
    let d = new Date();
time.innerHTML = d.toLocaleTimeString();
},1000)

// To Add Tasks in To Do List
const input = document.querySelector('input');
const btn = document.querySelector('.AddTask > button');
btn.addEventListener('click', AddList);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? AddList(e) : null);
})

function AddList(e){
    const NotCompleted = document.querySelector('.NotCompleted');
    const Completed = document.querySelector('.Completed');

    const NewLi = document.createElement('li');
    const CheckBtn = document.createElement('button');
    const DelBtn = document.createElement('button');
    
    CheckBtn.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    DelBtn.innerHTML = '<i class="fa-solid fa-square-xmark"></i>';


    if(input.value !==''){
        NewLi.textContent = input.value;
        input.value = '';
        NotCompleted.appendChild(NewLi);
        NewLi.appendChild(CheckBtn);
        NewLi.appendChild(DelBtn);                    
    }

    CheckBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        CheckBtn.style.display = 'none';
    });
    DelBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });
}