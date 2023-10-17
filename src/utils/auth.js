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
    // console.log(`output->get`, JSON.parse(Cookies.get(UserData)) )
    // console.log(`output->`,userData)
    const userData = Cookies.get(UserData)
    if (userData) {
        return JSON.parse(userData)
    } else {
        return null
    }

}

export function setUserData(userData) {
    console.log(`output->setdata`)
    console.log(`output->`,userData)
    return Cookies.set(UserData, userData)
}

export function removeUserData() {
    return Cookies.remove(UserData)
}