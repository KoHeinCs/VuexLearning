import {createStore} from 'vuex'

import productsState from './states'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'


const index = createStore({
    devtools: true,
    strict: true,
    state:productsState,
    getters,
    mutations,
    actions
})

export default index

