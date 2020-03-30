<template>
  <div class="HomeSwiper">
    <swiper>
      <swiper-item v-for="item in spbanner" class="HomeSwiper-item">
        <a v-bind:href="item.link">
          <img v-bind:src="item.image" alt="">
        </a>
      </swiper-item>
      <!--<swiper-item>-->
      <!--<a :href="spbanner[0].link">-->
      <!--<img :src="spbanner[0].image" alt="">-->
      <!--</a>-->

      <!--</swiper-item>-->
      <!--<swiper-item>-->
      <!--<a :href="spbanner[0].link">-->
      <!--<img :src="spbanner[1].image" alt="">-->
      <!--</a>-->

      <!--</swiper-item>-->
      <!--<swiper-item>-->
      <!--<a :href="spbanner[0].link">-->
      <!--<img :src="spbanner[2].image" alt="">-->
      <!--</a>-->

      <!--</swiper-item>-->
      <!--<swiper-item>-->
      <!--<a :href="spbanner[0].link">-->
      <!--<img :src="spbanner[3].image" alt="">-->
      <!--</a>-->

      <!--</swiper-item>-->
      <!--<swiper-item>-->
      <!--<a :href="spbanner[0].link">-->
      <!--<img :src="spbanner[3].image" alt="">-->
      <!--</a>-->

      <!--</swiper-item>-->
    </swiper>
  </div>
</template>

<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props:{
      spbanner:{
        type:Array,
        default(){
          return []
        }

      }
    },
    components:{
      Swiper,
      SwiperItem
    },

  }
  // import {Swiper, SwiperItem} from 'components/common/swiper'
  // export default {
  //   name: "HomeSwiper",
  //   props: {
  //     spbanner: {
  //       type: Array,
  //       default() {
  //         return []
  //       }
  //     }
  //   },
  //   components: {
  //     Swiper,
  //     SwiperItem
  //   }
  // }
</script>

<style scoped>
.HomeSwiper{
  padding: 5px 0 0;
  top: 0;
}
.HomeSwiper-item img{
    width: 375px ;
    height: 200px;
  }
</style>
<!--<template>-->
  <!--<swiper>-->
    <!--<swiper-item v-for="item in spbanner">-->
      <!--<a :href="item.link">-->
        <!--<img :src="item.image" alt="">-->
      <!--</a>-->
    <!--</swiper-item>-->
  <!--</swiper>-->
<!--</template>-->

<!--<script>-->
  <!--import {Swiper, SwiperItem} from 'components/common/swiper'-->
  <!--export default {-->
    <!--name: "HomeSwiper",-->
    <!--props: {-->
      <!--spbanner: {-->
        <!--type: Array,-->
        <!--default() {-->
          <!--return []-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--components: {-->
      <!--Swiper,-->
      <!--SwiperItem-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--</style>-->