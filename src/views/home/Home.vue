<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">首页</div>
    </NavBar>
    <home-swiper :spbanner="banners"></home-swiper>
    <recommend-view v-bind:recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getMultidata,
  getWgData} from "../../network/home";
  import HomeSwiper from './HomeComponents/HomeSwiper'
  import RecommendView from './HomeComponents/RecommendView'
  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data(){
      return {
        banners:[],
        recommends:[],
        spbanner:[]


      }
    },
    created(){
      //1.请求数据
      getMultidata().then(res=>{
        this.banners = res.data.banner.list
        console.log('banner的长度'+res.data.banner.list.length)
        this.recommends = res.data.recommend.list
        // console.log(this.recommends)

      })
      // getWgData().then(res=>{
      //   // console.log(res.data.data.banner)
      //   // this.spbanner=res.data.data.banner
      //   console.log(res.data.data.banner)
      //   this.spbanner=res.data.data.banner
      // })

    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100px;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

</style>
