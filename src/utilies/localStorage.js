

    export const retrieveData = (key) => {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    };

    export const storeData = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

