import {createStore} from 'vuex'
import {reducePrice} from './actions'

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
        saleProducts: state => state.products.map(product => {
            return {
                name: '**' + product.name + '**',
                price: product.price / 2
            }
        })
    },
    mutations:{
        reducePriceMutation : (state,payload) => state.products.forEach(product => product.price -= payload)
    },
    actions:{
        reducePrice
    }
})

export default store

