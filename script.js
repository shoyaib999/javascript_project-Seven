const noteContainer = document.querySelector(".nots-container");
const createBtn = document.querySelector(".btn");
let nots = document.querySelectorAll(".input-box");

createBtn.addEventListener("click",function(){
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = 'input-box';
    inputbox.setAttribute("contenteditable", "true");
    img.src = 'img/3687412.png';
    noteContainer.appendChild(inputbox).appendChild(img);
})

noteContainer.addEventListener('click',function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
   
})