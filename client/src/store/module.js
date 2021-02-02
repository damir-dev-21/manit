import axios from 'axios'

export default {
    state:{
        token:null,
    },
    mutations:{
        setToken(state,token){
            state.token = token;
        }
    },
    actions:{
       async fetchAuth({commit},newData){
           const data = await axios.post('http://localhost:5000/admin/',newData);
            const jwt = localStorage.setItem('jwt',data.data.token)
           commit('setToken',jwt)
       }
    },
    getters:{
        getToken(state){
            return state.token
        }
    },
}