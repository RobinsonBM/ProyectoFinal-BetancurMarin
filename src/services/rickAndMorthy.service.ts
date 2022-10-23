import axios, { AxiosResponse } from 'axios';

export default class PokemonServices {
    getAll(): Promise<AxiosResponse> {
        return axios.get('https://rickandmortyapi.com/api/character');
    }

    getPersonaje(id): Promise<AxiosResponse> {
        return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    }
}

