<template>
  <ProductListOne></ProductListOne>
  <ProductListTwo></ProductListTwo>
</template>

<script>
import ProductListOne from './components/ProductListOne';
import ProductListTwo from './components/ProductListTwo'


export default {
  name: 'App',
  components: {
    ProductListOne,
    ProductListTwo
  },
  data(){
   
  }
}
</script>