const notesContainer=document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorge() {
    localStorage.setItem("notes",notesContainer.innerHTML)
}

createbtn.addEventListener("click" ,()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className ="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="delete.png";
inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

})

// delete function======

    notesContainer.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorge();

    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorge();
            }
        })
    }
})



document.addEventListener("keydown",event =>{
    if (event.key==="Enter"){
        document.execCommand("insertlineBreak");
        event.preventDefault();
    }
})