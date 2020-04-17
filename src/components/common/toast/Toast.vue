<template>
  <div class="toast" v-show="isShow">
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      msg:{
        type:String,
        default(){
          return ''
        }
      },
      isShow:{
        type: Boolean,
        default(){
          return false
        }
      }
    }
  }
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,0.8);
  display: block;
  font-size: 40px;
  color: #fff;


}
</style>
