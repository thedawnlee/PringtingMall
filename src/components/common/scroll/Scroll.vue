<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "scroll",
    data(){
      return {
      scroll:null
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
          probeType: 3,
          click:true,
        pullUpLoad:true,
       op: 20

      })
      console.log(this.scroll)
      //滚动监听事件
      this.scroll.on('scroll',(position)=>{
        //console.log(position);
        this.$emit('scrollEvent',position)
      })
      //下拉监听事件
      this.scroll.on('pullingUp',()=>{
        console.log('到底了，内裤都要出来了')
        this.$emit('pullingUpLoadData')
      })

    },
    methods:{
      backTop(x,y,time){
        this.scroll&&this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll.refresh()
        console.log('加载图片');
      }

    }
  }
</script>

<style scoped>

</style>