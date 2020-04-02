<template>
  <div class="product-show">
    <print-product-show-item v-for="item in printProduct" :product="item"></print-product-show-item>
  </div>
</template>

<script>
  import PrintProductShowItem from './PrintProductShowItem'
  export default {
    name: "PrintProductShow",
    props:{
      printProduct:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      PrintProductShowItem
    }

  }
</script>

<style scoped>
.product-show{
  padding-bottom: 44px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 2px;
  padding-right: 2px;
}

</style>