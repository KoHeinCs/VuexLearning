import { createApp } from 'vue'
import App from './App.vue'
import index from './store/modules/product'

createApp(App).use(index).mount('#app')
