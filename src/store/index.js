import {createStore} from "vuex";
import productModule from "@/store/modules/product";


const store = createStore({
    devtools: true,
    strict: true,
    modules:{
        product:productModule
    }
})

export default store;