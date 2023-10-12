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
