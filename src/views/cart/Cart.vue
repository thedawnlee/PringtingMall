<template>
  <div>
   <nav-bar class="navbar">
     <div slot="center">购物车{{getTotalCount}}</div>
   </nav-bar>
    <cart-list></cart-list>
    <cart-list-bottom-bar class="bottom-bar"></cart-list-bottom-bar>
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComponents/CartList'
  import CartListBottomBar from './childComponents/CartListBottomBar'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartListBottomBar
    },
    computed:{
      getTotalCount(){
        return this.$store.state.cartList.length
      }
    }
  }
</script>

<style scoped>
.navbar{
  margin-top: -44px;
  color: #fff;
  background-color: var(--color-tint);

}
  .bottom-bar{
    position: fixed;
    bottom: 49px;
    width: 100%;
    }
</style>
