<template>

  <div class="cart-list">
    <scroll class="content" ref="scroll">
        <cart-list-item v-for="(item,index) in cartList"
        :product="item"
        :key="index"
        ></cart-list-item>

    </scroll>

  </div>

</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'

  export default {
    name: "CartList",
    components:{
      Scroll,
      CartListItem,

    },
    data(){
      return {
        cartList:[]
      }
    },
    mounted(){
      this.cartList = this.$store.state.cartList
    },
    activated(){
      this.$refs.scroll.refresh()
    },
    methods:{

    }
  }
</script>

<style scoped>
  .cart-list{
    height: 100vh;
  }
.content{
  height: calc(100% - 49px);
  overflow: hidden;
}
</style>
