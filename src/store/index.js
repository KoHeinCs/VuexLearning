import {createStore} from "vuex";
import productModule from "@/store/modules/product";


const store = createStore({
    devtools: true,
    strict: true, // not allow mutation/modification to  store's state without using mutation handlers
    modules:{
        productModule
    }
})

export default store;