import Vue from 'vue'
import Vuex from 'vuex'
import {login} from "@/api/login"
import local from './local'

Vue.use(Vuex)

const  index = new Vuex.Store({
    state:{
        token: null,
        userInfo: null
    },
    getters:{},
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token = token
        },
        SET_USERINFO:(state,userInfo)=>{
             state.userInfo = userInfo
        }
    },
    actions:{
        login({commit},loginUser){
            return new Promise((resolve,reject)=>{
                login(loginUser).then(res=>{
                    if(res) {
                        console.log("res==", res)
                    }
                    commit('SET_TOKEN',res.data.token)
                    commit('SET_USERINFO',res.data)
                    local.setToken(res.data.token)
                    local.setUserInfo(res.data)
                    resolve(res)
                    console.log(res)
                    console.log(res.data)
                    console.log(res.data.token)

                }).catch(error=>{
                    console.log(error)
                    reject(error);
                })
            })
        }
    }
});

export default index