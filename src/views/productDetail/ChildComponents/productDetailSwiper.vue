<template>
  <swiper class="productDetailSwiper">
    <!--<swiper-item v-for="item in topImages">-->
      <!--<img :src="item" alt="">-->
    <!--</swiper-item>-->
    <swiper-item>
      <img :src="topImages[0]" alt="">
    </swiper-item>
    <swiper-item>
      <img :src="topImages[1]" alt="">
    </swiper-item >
    <swiper-item v-if="topImages[2]!==null">
      <img :src="topImages[2]" alt="">
    </swiper-item>
    <swiper-item v-if="topImages[3]!==null">
      <img :src="topImages[3]" alt="">
    </swiper-item>
    <swiper-item v-if="topImages[4]!==null">
      <img :src="topImages[4]" alt="">
    </swiper-item>
    <!--<swiper-item v-if="topImages[5]!==null">-->
      <!--<img :src="topImages[5]" alt="">-->
    <!--</swiper-item>-->
    <!--<swiper-item v-if="topImages[6]!==null">-->
      <!--<img :src="topImages[6]" alt="">-->
    <!--</swiper-item>-->
    <!--<swiper-item v-if="topImages[7]!==null">-->
      <!--<img :src="topImages[7]" alt="">-->
    <!--</swiper-item>-->

  </swiper>
</template>

<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper'
  export default {
    name: "productDetailSwiper",
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    created(){
      console.log('进入商品展示')
      console.log(this.topImages)
      console.log(this.topImages.length)
      console.log(this.topImages[0])
      console.log(this.topImages[1])
      console.log(this.topImages[2])
      console.log(this.topImages[3])
      console.log(this.topImages[4])
      console.log(this.topImages[5])
    },
    components:{
      Swiper,
      SwiperItem

    }
  }
</script>

<style scoped>
.productDetailSwiper{
  height:500px;
  overflow: hidden;
}
</style>