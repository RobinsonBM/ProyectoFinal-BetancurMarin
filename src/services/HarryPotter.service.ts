import axios, { AxiosResponse } from 'axios';

export default class HarryPotterService {
    getAll(): Promise<AxiosResponse> {
        return axios.get('https://hp-api.herokuapp.com/api/characters');
    }

    getStudents(): Promise<AxiosResponse> {
        return axios.get('https://hp-api.herokuapp.com/api/characters/students');
    }
}

