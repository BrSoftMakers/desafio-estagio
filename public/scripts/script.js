let myVehicleLibrary = [];

class Vehicle {
    constructor(id, model, brand, type, availability) {
        this.id = id
        this.model = model;
        this.brand = brand;
        this.type = type;
        this.availability = availability;
    }
}

function addVehicleToLibrary(id, model, brand, type, availability) {
    const newVehicle = new Vehicle(id, model, brand, type, availability);
    myVehicleLibrary.push(newVehicle);
}

function createCard(vehicle, index) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const bookName = document.createElement("h3");
    const bookAuthor = document.createElement("h4");
    const bookPages = document.createElement("p");
    const bookReadDiv = document.createElement("div");
    const bookReadText = document.createElement("p");

    bookName.innerHTML = book.bookName;
    bookAuthor.innerHTML = `Written by ${book.bookAuthor}`;
    bookPages.innerHTML = `${book.bookPages} pages`;
    bookReadDiv.className = "book-read";
    bookReadText.innerHTML = "Have you read the book?";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.dataset.index = index;
    deleteButton.addEventListener('click', e => {
        myLibrary.splice(e.target.dataset.index, 1);
        showLibrary();
    })

    const readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.checked = book.wasBookRead;
    readCheckbox.dataset.index = index;
    readCheckbox.addEventListener("change", e => {
        myLibrary[e.target.dataset.index].wasBookRead = e.target.checked;
    })

    bookReadDiv.appendChild(bookReadText);
    bookReadDiv.appendChild(readCheckbox);

    cardContainer.appendChild(bookName);
    cardContainer.appendChild(bookAuthor);
    cardContainer.appendChild(bookPages);
    cardContainer.appendChild(bookReadDiv);
    cardContainer.appendChild(deleteButton);

    return cardContainer;
}

function cleanInputs() {
    document.getElementById("book-name").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-pages").value = "";
    document.getElementById("wasBookRead").checked = false;
}

function showLibrary() {
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        container.appendChild(createCard(myLibrary[i], i));        
    }

}

showLibrary();

const addBookBtn = document.querySelector("#add-book");
addBookBtn.addEventListener("click", () => {
    document.getElementById("modalOne").style.display = "block";
})

let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
    btn.onclick = function () {
        let modal = btn.closest(".modal");
        modal.style.display = "none";
    };
});

window.onclick = function (event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};

const bookForm = document.querySelector(".book-form");
bookForm.addEventListener("submit", () => {
    addBookToLibrary(document.getElementById("book-name").value,
                     document.getElementById("book-author").value,
                     document.getElementById("book-pages").value,
                     document.getElementById("wasBookRead").checked);

    document.getElementById("modalOne").style.display = "none";
    showLibrary();
    cleanInputs();
});