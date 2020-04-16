<template>
  <div class="button-bar">
    <div class="check-content">
      <check-button class="check-button"></check-button>
      <span class="check-size" @click="allCheckItem">全选</span>
      <span class="check-price">合计：¥{{getTotalPrice}}</span>

    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: "CartListBottomBar",
    components:{
      CheckButton,

    },
    data(){
      return {
        isCheckAll:true
      }
    },
    computed:{
      getTotalPrice(){
       return this.$store.state.cartList.filter((item)=>{
         return item.checked
       }).reduce((preValue,item)=>{
         return preValue+item.price*item.count
       },0)
      }
    },
    methods:{
      allCheckItem(){
        if (this.isCheckAll){
          for(item of this.$store.state.cartList){
            item.checked=false
          }
        }
       else{
          for(item of this.$store.state.cartList){
            item.checked=true
          }
        }
      }
    }
  }
</script>

<style scoped>
.button-bar{
  height: 40px;
  background-color: #eee;
  display: flex;
  position: relative;
  /*line-height: 40px;*/
}

  .check-content{
    display: flex;
    /*line-height: 40px;*/
    align-items: center;
    margin-left: 10px;
  }

  .check-button{
    width: 30px;
    height: 30px;
  }
  .check-size{
    font-size: 20px;
  }
  .check-price{

    margin-left: 30px;
    font-size: 20px;
  }
</style>
