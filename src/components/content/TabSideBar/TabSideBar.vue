<template>
  <div class="tab-side-bar">
    <div v-for="(item,index) in titles"
    class="tab-side-bar-item"
    :class="{active:index===currentIndex}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabSideBar",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index
        this.$emit('TabSideBarClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-side-bar{
    display: flex;
    position: absolute;
    z-index: 99999;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
.active{
  color:var(--color-high-text);
  border-bottom: 3px solid #ff5777;
}
  .tab-side-bar-item{
    flex: 1;
  }
  .tab-side-bar-item span{
    padding: 5px;
  }

/*.active span{*/
  /*border-bottom: 3px solid var(--color-tint);*/
/*}*/
</style>