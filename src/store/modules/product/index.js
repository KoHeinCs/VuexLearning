

import productsState from './states'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'


const productModule = {
    state:productsState,
    getters,
    mutations,
    actions
}

export default productModule

