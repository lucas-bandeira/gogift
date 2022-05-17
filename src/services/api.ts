import axios from 'axios';


export const api = axios.create({
    //definir rota para o banco de dados
    baseURL: 'http://localhost:3000',
});
