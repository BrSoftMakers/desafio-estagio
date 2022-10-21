const getAllVehicles = async () => {
    try {
        const dataResponse = await fetch('http://localhost:3000/api/vehicles', {
            method: 'GET',
            mode: 'cors',
        });
        const data = await dataResponse.json();
        return data;
    } catch (error) {
        console.log('ERROR!');
    }
};

const getVehicle = async (id) => {
    try {
        const dataResponse = await fetch(`http://localhost:3000/api/vehicles/${id}`, {
            method: 'GET',
            mode: 'cors',
        });
        const data = await dataResponse.json();
        return data;
    } catch (error) {
        console.log('ERROR!');
    }
};

const createVehicle = async (bodyData) => {
    try {
        const dataResponse = await fetch('http://localhost:3000/api/vehicles', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(bodyData)
        });
        const data = await dataResponse.json();
        return data;
    } catch (error) {
        console.log('ERROR!');
    }
};

const editVehicle = async (id, bodyData) => {
    try {
        const dataResponse = await fetch(`http://localhost:3000/api/vehicles/${id}`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(bodyData)
        });
        const data = await dataResponse.json();
        return data;
    } catch (error) {
        console.log('ERROR!');
    }
};

const deleteVehicle = async (id) => {
    try {
        const dataResponse = await fetch(`http://localhost:3000/api/vehicles/${id}`, {
            method: 'DELETE',
            mode: 'cors',
        });
        const data = await dataResponse.json();
        return data;
    } catch (error) {
        console.log('ERROR!');
    }
};

/*
let myVehicleLibrary = [];

getAllVehicles().then( (vehiclesArray) => {
    console.log(vehiclesArray);
    for (let i = 0; i < vehiclesArray.length; i += 1) {
        myVehicleLibrary.push(vehiclesArray[i]);
    }
    console.log("DONE");
})
*/

class Vehicle {
    constructor(id, model, brand, type, availability) {
        this.id = id
        this.model = model;
        this.brand = brand;
        this.type = type;
        this.availability = availability;
    }
}

async function addVehicleToLibrary(model, brand, type, availability) {
    console.log("ADD VEHICLE")
    await createVehicle( {model, brand, type, availability} );
    //const newVehicle = new Vehicle(id, model, brand, type, availability);
    //myVehicleLibrary.push(newVehicle);
}

function createCard(vehicle, index) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const vehicleId = document.createElement('p');
    const vehicleModel = document.createElement("h3");
    const vehicleBrand = document.createElement("h4");
    const vehicleType = document.createElement("p");
    const vehicleAvailabilityDiv = document.createElement("div");
    const vehicleAvailabilityText = document.createElement("p");

    vehicleId.innerHTML = vehicle.id;
    vehicleModel.innerHTML = vehicle.model;
    vehicleBrand.innerHTML = vehicle.brand;
    vehicleType.innerHTML = vehicle.type;
    vehicleAvailabilityDiv.className = "vehicle-available";
    vehicleAvailabilityText.innerHTML = "Veículo disponível?";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.dataset.index = index;
    deleteButton.addEventListener('click', e => {
        console.log("DELETE");
        //myLibrary.splice(e.target.dataset.index, 1);
        //showLibrary();
    })

    const availableCheckbox = document.createElement("input");
    availableCheckbox.type = "checkbox";
    availableCheckbox.checked = vehicle.availability;
    availableCheckbox.dataset.index = index;
    availableCheckbox.addEventListener("change", e => {
        console.log("CHANGE");
        //myLibrary[e.target.dataset.index].wasBookRead = e.target.checked;
    })

    vehicleAvailabilityDiv.appendChild(vehicleAvailabilityText);
    vehicleAvailabilityDiv.appendChild(availableCheckbox);

    cardContainer.appendChild(vehicleId);
    cardContainer.appendChild(vehicleModel);
    cardContainer.appendChild(vehicleBrand);
    cardContainer.appendChild(vehicleType);
    cardContainer.appendChild(vehicleAvailabilityDiv);
    cardContainer.appendChild(deleteButton);

    return cardContainer;
}

function cleanInputs() {
    document.getElementById("vehicle-model").value = "";
    document.getElementById("vehicle-brand").value = "";
    document.getElementById("vehicle-type").value = "";
    document.getElementById("isAvailable").checked = false;
}

async function showVehicleLibrary() {
    const myVehicleLibrary = await getAllVehicles();
    console.log(myVehicleLibrary);

    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (let i = 0; i < myVehicleLibrary.length; i++) {
        container.appendChild(createCard(myVehicleLibrary[i], i));        
    }

}

showVehicleLibrary();

const addVehicleBtn = document.querySelector("#add-vehicle");
addVehicleBtn.addEventListener("click", () => {
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

const vehicleForm = document.querySelector(".vehicle-form");
vehicleForm.addEventListener("submit", () => {
    addVehicleToLibrary(document.getElementById("vehicle-model").value,
                     document.getElementById("vehicle-brand").value,
                     document.getElementById("vehicle-type").value,
                     document.getElementById("isAvailable").checked);

    document.getElementById("modalOne").style.display = "none";
    showVehicleLibrary();
    cleanInputs();
});