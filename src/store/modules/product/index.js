

import productsState from './states'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'


const productModule = {
    namespaced:true, // all the state, getters, mutations, and actions within that module are scoped under that namespace.
    state:productsState,
    getters,
    mutations,
    actions
}

export default productModule

