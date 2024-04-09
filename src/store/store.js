import {createStore} from 'vuex'

import {products} from './states'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'


const store = createStore({
    devtools: true,
    strict: true,
    state:{products},
    getters,
    mutations,
    actions
})

export default store

