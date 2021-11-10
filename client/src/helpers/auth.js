import { getCookie, setCookie } from "./cookies"
import { getLocalStorage, setLocalStorage } from "./localStorage";


export const setAuthentification=(token,user)=>{
    setCookie('token',token);
    setLocalStorage('user',user);
}
export const isAuthentificated=()=>{
    if(getLocalStorage('user')&& getCookie('token')){
        return getLocalStorage('user')
    } else {
        return false
    }
}