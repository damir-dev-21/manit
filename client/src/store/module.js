import {fakeServices} from '../assets/fakeData/index'


export default {
    state:{
        data:fakeServices
    },
    mutations:{

    },
    actions:{

    },
    getters:{
        allServices(state){
            return state.data
        }
    },
}