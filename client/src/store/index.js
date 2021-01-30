import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import dataStore from './module'

Vue.use(Vuex)

const dataState = createPersistedState({
    paths:['data']
})

export default new Vuex.Store({
    modules:{
        dataStore,
    },
    plugins:[
        dataState
    ]
})