import {createStore} from 'vuex'
import {reducePrice} from './actions'
import {reducePriceMutation} from './mutations'
import {saleProducts} from './getters'
import {products} from './states'

const store = createStore({
    state() {
        return {
            products
        }

    },
    devtools: true,
    strict: true,
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

