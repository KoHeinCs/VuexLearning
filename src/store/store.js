import {createStore} from 'vuex'
import {reducePrice} from './actions'
import {reducePriceMutation} from './mutations'
import {saleProducts} from './getters'

const store = createStore({
    state() {
        return {
            products: [
                {name: 'Bana Skin', price: 20},
                {name: 'Shiny Star', price: 40},
                {name: 'Green Shells', price: 60},
                {name: 'Red Shells', price: 80}
            ]
        }

    },
    devtools: true,
    strict:true,
    getters: {
        saleProducts
    },
    mutations:{
        reducePriceMutation
    },
    actions:{
        reducePrice
    }
})

export default store

