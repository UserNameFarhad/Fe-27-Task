let inputField = document.getElementById('inputField');
let addToDo = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');

addToDo.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    inputField.focus();
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })
}) 