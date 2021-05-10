import LocalStorageUtil from './LocalStorageUtil'

function storeToken(token){
    LocalStorageUtil.store("jwt", token);
}

function getToken(){
    return LocalStorageUtil.get("jwt");
}

export default {storeToken, getToken}