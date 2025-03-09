import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

const api = axios.create ({
    baseURL: baseURL
});

export async function getCharacters(url = 'character/?page=1') {
    try {
        const response = await api.get(url);
        return response.data
    } catch (error) {
        console.error('Error getting characters:', error);
        throw error;
    }
}

export async function getLocations(url = '/location?page=1') {
    try {
        const response = await api.get(url)
        return response.data
    } catch (error){
        console.error('Error getting locations', error);
        throw error;
    }
}

export async function getEpisodes(url = '/episode?page=1') {
    try {
        const response = await api.get(url)
        return response.data
    } catch (error){
        console.error('Error getting episodes', error);
        throw error;
    }
}




export async function getCharacter(id) {
    try {
        const response = await api.get(`characters/${id}`)
        return response.data
    } catch (error) {
        console.error('Error getting character', error);
        throw error;
    }
}

