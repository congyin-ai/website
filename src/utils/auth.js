import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
    // console.log(`output->`,'调用了getToken')
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}


const UserData = 'userData'

export function getUserData() {
    // console.log(`output->`,'调用了getToken')
    return Cookies.get(UserData)
}

export function setUserData(userData) {
    return Cookies.set(UserData, userData)
}

export function removeUserData() {
    return Cookies.remove(UserData)
}