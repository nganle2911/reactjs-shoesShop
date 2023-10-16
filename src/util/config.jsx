import axios from 'axios';
export const ACCESS_TOKEN = 'accessToken';
export const USER_LOGIN = 'userLogin';

export const { saveStore, saveStoreJson, getStore, getStoreJson, removeStore } = {
    saveStore: (storeName, stringValue) => {
        localStorage.setItem(storeName, stringValue);
        return stringValue; 
    },
    saveStoreJson: (storeName, value) => {
        let newValue = JSON.stringify(value); 
        localStorage.setItem(storeName, newValue); 
        return value; 
    },
    getStore: (name) => {
        if (localStorage.getItem(name)) {
            return localStorage.getItem(name); 
        }
        return null; 
    },
    getStoreJson: (name) => {
        if (localStorage.getItem(name)) {
            return JSON.parse(localStorage.getItem(name));
        }
        return null; 
    }, 
    removeStore: (name) => {
        if (localStorage.getItem(name)) {
            localStorage.removeItem(name);
        }
    }
}

const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1OCIsIkhldEhhblN0cmluZyI6IjAyLzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzI4NjQwMDAwMCIsIm5iZiI6MTY5MDM5MDgwMCwiZXhwIjoxNzE3NDM0MDAwfQ.I_5jTmaP4oPXDl-5EqRjQqnodRT3qKLF9_hDUjhDwFQ'; 

// Config for all request api 
export const http = axios.create({
    baseURL: 'https://shop.cyberlearn.vn',
    timeout: 30000 // millisecondes 
}); 

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        ['Authorization']: `Bearer ${getStore(ACCESS_TOKEN)}`,
        TokenCybersoft: TOKEN_CYBERSOFT
    };
    return config; 
}, (err) => {
    return Promise.reject(err);
}); 
// 1 FE can request many BE via API 


// Config for all response api 