export const ACCESS_TOKEN = 'accessToken';
export const USER_LOGIN = 'userLogin';

export const { saveStore, saveStoreJson, getStore, getStoreJson } = {
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
    }
}