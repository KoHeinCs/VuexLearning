
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            products: [
                { name: 'Bana Skin', price: 20 },
                { name: 'Shiny Star', price: 40 },
                { name: 'Green Shells', price: 60 },
                { name: 'Red Shells', price: 80 }
            ]
        }

    }
})

export default store

