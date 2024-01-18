import axios from 'axios';

// axios = librairie qui permet de formuler des requêtes HTTP 
// et intéragir avec une API

export const API = axios.create( {
    baseURL: 'https://restcountries.com/v3.1',
    timeout: 10000,
    headers: {
        accept: 'application/json'
    }
})

