function store(key, value){
    localStorage.setItem(key, value);
}

function get(key){
    return localStorage.getItem(key);
}


export default {store, get}