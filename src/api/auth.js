import instance from "../axios/index-dev";

export function passwordLogin(username, password) {
  const data = {
    username,
    password,
  }
  return instance({
    url: '/pwdLogin',
    // headers: {
    //   isToken: false
    // },
    method: 'post',
    data: data
  })
}

export function vcodeLogin(phone, code) {
  const data = {
    phone,
    code,
  }
  return instance({
    url: '/phoneCodeLogin',
    // headers: {
    //   isToken: false
    // },
    method: 'post',
    data: data
  })
}


export function registry(data) {
  return instance({
    url: '/gatewayRegister',
    // headers: {
    //   isToken: false
    // },
    method: 'post',
    data: data
  })
}

export function getInfo() {
  return instance({
    url: '/getUserInfo',
    headers: {
      isToken: true
    },
    method:'get'
  })
}

export function getVerifyCode(phone, type) {
  const data = {
    phone,
    type,
  }
  return instance({
    url: '/sms',
    // headers: {
    //   isToken: false
    // },
    method: 'post',
    data: data
  })
}

export function logOut() {
  return instance({
    url: '/logout',
    headers: {
      isToken: true
    },
    method: 'get',
  })
}