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

export default { getAllVehicles, getVehicle, createVehicle, editVehicle, deleteVehicle }