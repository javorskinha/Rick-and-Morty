import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

const api = axios.create ({
    baseURL: baseURL
});

export async function getCharacters() {
    try {
        const response = await api.get('characters');
        return response.data
    } catch (error) {
        console.error('Erro ao obter personagens:', error);
        throw error;
    }
}

export async function getCharacter(id) {
    try {
        const response = await api.get(`characters/${id}`)
        return response.data
    } catch (error) {
        console.error('Erro ao obter personagem', error);
        throw error;
    }
}
