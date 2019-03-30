

    export const retrieveData = (key) => {
        const data = localStorage.getItem(key);
        if(data == null){
            return []
        }
        return JSON.parse(data);
    };

    export const storeData = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

