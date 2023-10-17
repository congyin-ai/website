import { passwordLogin, vcodeLogin, getInfo, logOut } from '@/api/auth'
import { getToken, setToken, removeToken, getUserData,setUserData } from '@/utils/auth'
import { Message } from 'element-ui'
import { removeUserData } from '../../utils/auth'
const auth = {
    state: {
        token: getToken(),
        // userData: {
        //     username: '',
        //     fullname: '',
        //     company: '',
        //     phone: '',
        //     email: '',
        // }
        userData: getUserData()

    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USERDATA: (state, userData) => {
            state.userData = userData
        },
        // SET_FULLNAME: (state, fullname) => {
        //     state.userData.fullname = fullname
        // },
        // SET_COMPANY: (state, company) => {
        //     state.userData.company = company
        // },
        // SET_PHONE: (state, phone) => {
        //     state.userData.phone = phone
        // },
        // SET_EMAIL: (state, email) => {
        //     state.userData.email = email
        // }
    },
    actions: {
        PasswordLogin({ commit }, userinfo) {
            const username = userinfo.username
            const password = userinfo.password
            return new Promise((resolve, reject) => {
                passwordLogin(username, password).then(
                    res => {
                        if (res.data.code == 200) {
                            setToken(res.data.token)
                            commit('SET_TOKEN', res.data.token)
                            resolve(res)
                        } else
                        {
                            Message.error(res.data.msg);
                            }
                    }
                ).catch(err => reject(err))
            })
        },
        VcodeLogin({ commit }, vcodeinfo) {
            const tele = vcodeinfo.tele
            const vcode = vcodeinfo.vcode
            console.log(`output->tt1`)
            return new Promise((resolve, reject) => {
                console.log(`output->tt2`)
                vcodeLogin(tele, vcode).then(
                    res => {
                        console.log(`output->res`,res)
                        if (res.data.code == 200) {
                            console.log(`output->tt3`, res)
                            setToken(res.data.token)

                            commit('SET_TOKEN', res.data.token)
                            resolve(res)
                        } else {
                            Message.error(res.data.msg);
                        }

                    }
                ).catch(err => reject(err))
            })
        },
        GetInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    const user = res.data.user
                    // console.log(`output->user`, user)
                    const userString = JSON.stringify(user);
                    setUserData(userString)
                    commit('SET_USERDATA', user)
                    // const avatar = (user.avatar == "" || user.avatar == null) ? require("@/assets/images/profile.jpg") : user.avatar;
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 退出系统
        LogOut({ commit, state }) {
            return new Promise((resolve, reject) => {
                logOut(state.token).then((res) => {
                    if (res.data.code == 200) {
                        console.log(`output->推出了已经！！！`)
                        commit('SET_TOKEN', '')
                        commit('SET_USERDATA', {})
                        removeToken()
                        removeUserData()
                        resolve(res)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }

    }
}


export default auth