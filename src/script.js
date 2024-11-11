function showMenu() {
    const className = "mobile-menu-visible";
    const mobileMenu = document.querySelector(".mobile-menu");
    if (mobileMenu.classList.contains(className)) {
        mobileMenu.classList.remove(className);
    } else {
        mobileMenu.classList.add(className);
    }
}

function addTask(){
    const container = document.querySelector(".main-container");
    const taskInput = document.getElementById("taskInput");

    if(taskInput.value.trim()){
        const card = document.createElement("div");
        card.classList.add("card");
        
        const text = document.createElement("p");
        text.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";

        deleteBtn.onclick = function () {
            container.removeChild(card);
        }

        card.appendChild(text);
        card.appendChild(deleteBtn);
        container.appendChild(card);

        taskInput.value = "";
    }
}