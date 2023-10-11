import instance from "../axios/index-dev";

export function passwordLogin(username, password) {
  const data = {
    username,
    password,
  }
  return instance({
    url: '/login',
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