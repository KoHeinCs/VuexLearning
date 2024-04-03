<template>
  <ProductListOne :products="products"></ProductListOne>
  <ProductListTwo :products="products"></ProductListTwo>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductListOne from './components/ProductListOne';
import ProductListTwo from './components/ProductListTwo'


export default {
  name: 'App',
  components: {
    ProductListOne,
    ProductListTwo
  },
  data(){
    return {
      products:[
        {name:'Bana Skin',price:20},
        {name:'Shiny Star',price:40},
        {name:'Green Shells',price:60},
        {name:'Red Shells',price:80}
      ]
    }
  }
}
</script>

<style>
#app {
  
}
</style>
