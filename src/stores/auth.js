import Cookies from 'js-cookie'
import axios from 'axios'
import { apiKey, authUrl, baseUrl, registerUrl } from '../../env.js'

export const auth =   {
  namespaced :true,
  state() {
    return {
      token : null,
      tokenExpiredDate : null,
      userLogin : {},
      isLogin : false
    }
  },
  getters : {
    getToken(state) {
      return state.token
    }
  },
  mutations : {
    setToken(state, {idToken, expiresIn, loginStatus}) {
      state.token = idToken
      state.tokenExpiredDate = expiresIn
      Cookies.set("tokenExpirationDate", expiresIn)
      Cookies.set("jwt", idToken)
      state.isLogin = loginStatus
    },
    setUserLogin(state, {userData, loginStatus}) {
      state.userLogin = userData
      state.isLogin = loginStatus
    },
    setUserLogout(state){
      state.token = null
      state.userLogin = {}
      state.tokenExpiredDate = null
      Cookies.remove("jwt")
      Cookies.remove("tokenExpirationDate")
      Cookies.remove("UID")
    }
  },
  actions : {
    async getRegisterData({commit, dispatch}, payload) {
      try {
        const {data} = await axios.post(registerUrl + apiKey, {
          email : payload.email,
          password : payload.password,
          returnSecureToken : true
        })
        commit("setToken", {
          idToken : data.idToken,
          expiresIn : new Date().getTime() + Number.parseInt(data.expiresIn) * 1000
        })
        const newUserData = {
          user_id : Math.random(),
          fullName: payload.fullName,
          username: payload.username,
          email : payload.email,
          imageLInk : payload.imageLInk
        }
        Cookies.set("UID", newUserData.userId)
        await dispatch("addNewUser", newUserData)
      } catch (e) {
        console.error(e)
      }
    },
    async addNewUser ({commit, state}, payload) {
      try {
        const {data} = await axios.post( baseUrl + `user.json?auth=${state.token}`, payload )
        commit("setUserLogin", {userData : payload, loginStatus:true})
      } catch (e) {
        console.error(e)
      }
    },
    async getLoginData({commit, dispatch}, payload) {
      try {
        const {data} = await axios.post(authUrl + apiKey, {
          email : payload.email,
          password : payload.password,
          returnSecureToken : true
        })
        commit("setToken", {
          idToken : data.idToken,
          expiresIn : new Date().getTime() + Number.parseInt(data.expiresIn) * 1000,
          loginStatus: true
        })
        await dispatch("getUser", data.localId)
      } catch (e) {
        console.error(e)
      }
    },
    async getUser({commit}, payload) {
      try{
        const {data} =  await axios.get(baseUrl + `user.json`)
        for (let key in data) {
          if (data[key].userId === payload) {
            Cookies.set("UID", data[key].userId)
            commit("setUserLogin", {
              userData : data[key], loginStatus: true
            })
          }
        }
        console.log(data)
      } catch (e) {
        console.error(e)
      }
    },

  }
}