import axios, { AxiosResponse } from 'axios';

export default class PokemonServices{
    getAll(): Promise<AxiosResponse> {
        return axios.get('https://pokeapi.co/api/v2/pokemon?&limit=10');
    }

    getPokemon(pokemon): Promise<AxiosResponse> {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    }
    
    getImg(pokemon) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokemon}`)
    }

    getEncounters(pokemon) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/encounters`)
    }

    getLocation(location) {
        return axios.get(`${location}`)
    }
}

