const lista = document.querySelector(".listaTareas");
const nuevaTarea = document.querySelector(".nuevaTarea");
const btnAgregar = document.querySelector(".addTask");
const btnClean = document.querySelector(".clean");

let taskId = localStorage.length;

function display() {

    for (let i = 0; i < localStorage.length; i++){
        let storedChild = document.createElement("li")
        let storedCheckBox = document.createElement("input");
        storedCheckBox.type = "checkbox";
        storedChild.classList.add("elementoLista");
        storedChild.textContent = localStorage.getItem(i.toString());    
        lista.appendChild(storedChild);
        storedChild.appendChild(storedCheckBox);
    }
}

btnAgregar.addEventListener("click", () => {

    if (nuevaTarea.value != "") {
        const child = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        child.classList.add("elementoLista");
        child.textContent = nuevaTarea.value;
        lista.appendChild(child);
        child.appendChild(checkBox);
        localStorage.setItem(taskId.toString(), nuevaTarea.value);
        taskId++;
    }

    nuevaTarea.value = "";

})

btnClean.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload(true);
}
)

display();

