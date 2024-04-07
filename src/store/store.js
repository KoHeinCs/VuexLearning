import {createStore} from 'vuex'

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
        reducePrice : (state,payload) => state.products.forEach(product => product.price -= payload)
    },
    actions:{
        reducePrice: (store,payload) => {
            setTimeout(function (){
                store.commit('reducePrice',payload)
            },2000)

        }
    }
})

export default store

