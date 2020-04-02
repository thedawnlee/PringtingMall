<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div v-bind:style="activeStyle" ><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){

      return {
        // isActive:true
      }
    },
    props:{
      link:{
        type:String,
        default(){
          return '/home'
        }
      },
      activeColor:{
        type:String,
        default(){
          return 'red'
        }

      }

    },
    computed:{
      //计算属性：检查当前路由是否处于活跃状态
      isActive(){
        return this.$route.path.indexOf(this.link)
      },
      //如果处于活跃状态那么转换文字颜色
      activeStyle(){

        return this.isActive?{}:{color:this.activeColor}
      }
    },

    methods:{
      itemClick(){
        console.log('ItemClick'+this.link)
        this.$router.replace(this.link)
      }
    }

  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }

</style>
