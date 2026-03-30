import { API_URL } from "./configApi.js";

export async function getPeople() {
    try {
        const response = await fetch(`${API_URL}/people`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching people:', error);
        throw error;
    }
}

export async function createPerson(person) {
    try {
        const response = await fetch(`${API_URL}/people`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(person),
        });
    } catch (error) {
        console.error('Error creating person:', error);
        throw error;
    }
};

export async function updatePerson(id, person) {
    try {
        const response = await fetch(`${API_URL}/people/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(person),
        });
        return response.json();
    } catch (error) {
        console.error('Error updating person:', error);
        throw error;
    }
};

export async function deletePerson(id) {
    try {
        const response = await fetch(`${API_URL}/people/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error deleting person:', error);
        throw error;
    }
};

