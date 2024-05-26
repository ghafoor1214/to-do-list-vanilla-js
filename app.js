var input = document.getElementById("inputbox");
var text = document.querySelector(".text");

// function deleteAll() {
//     var todoParent = document.getElementById("todoParent")
//     console.log(todoParent.innerHTML)
//     todoParent.innerHTML = ""
// }
// var link = "abdul-todo-app.surge.sh"

function Add() {
    if (input.value === "") {
        alert("Please add Text");
    } else {
        var newEle = document.createElement("li");
        newEle.innerHTML = `${input.value} <i class="fa fa-pencil edit" aria-hidden="true"></i> <i class="del fa fa-trash removeBtn" aria-hidden="true"></i>`;
        text.appendChild(newEle);
        input.value = "";

        addEventListeners(newEle);
    }
}

function deleteAll() {
    var ul = document.getElementById("lists")
    ul.innerHTML = ""
}

function addEventListeners(newEle) {
    newEle.querySelector(".edit").addEventListener("click", function() {
        var editi = prompt("What do you want to change?");
        newEle.innerHTML = `${editi} <i class="fa fa-pencil edit" aria-hidden="true"></i> <i class="del fa fa-trash" aria-hidden="true"></i>`;
        addEventListeners(newEle);
    });

    newEle.querySelector(".del").addEventListener("click", function() {
        newEle.remove();
    });
}

input.addEventListener("keypress" , function(event){
    if(event.key === "Enter"){
        Add()
    }
})