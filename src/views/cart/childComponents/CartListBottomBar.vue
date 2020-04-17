<template>
  <div class="button-bar">
    <div class="check-content">
      <check-button class="check-button" :isChecked="isSelectAll"
      @click.native="SelectAllItem"></check-button>
      <span class="check-size">全选</span>
      <span class="check-price">合计：¥{{getTotalPrice}}</span>
      <span class="goCommit">结账({{getCheckedLength}})</span>

    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: "CartListBottomBar",
    components: {
      CheckButton,

    },
    data() {
      return {
        isCheckAll: false
      }
    },
    computed: {
      getTotalPrice() {
        return this.$store.state.cartList.filter((item) => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      getCheckedLength() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if (this.$store.state.cartList.length === 0) {
          return false
        }
        return !this.$store.state.cartList.find(item => !item.checked)

      }

    },
    methods: {
      SelectAllItem(){
        console.log('---');
        if (this.isSelectAll) {
          this.$store.state.cartList.forEach(item=>item.checked=false)
        }else {
          this.$store.state.cartList.forEach(item=>item.checked=true)
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
    line-height: 30px;
    margin-right: 5px;

  }
  .check-size{
    font-size: 20px;
  }
  .check-price{

    margin-left: 30px;
    font-size: 14px;
    flex: 1;
  }
  .goCommit{
    width:90px;
    background: red;

text-align: center;
    height: 40px;
    line-height: 40px;
    margin-left: 77px;
  }
</style>
