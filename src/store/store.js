import {createStore} from 'vuex'
import {reducePrice} from './actions'
import {reducePriceMutation} from './mutations'
import {saleProducts} from './getters'
import {products} from './states'

const store = createStore({
    devtools: true,
    strict: true,
    state: {
        products
    },
    getters: {
        saleProducts
    },
    mutations: {
        reducePriceMutation
    },
    actions: {
        reducePrice
    }
})

export default store

