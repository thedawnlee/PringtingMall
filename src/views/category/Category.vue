<template>
 <div>
   <h1>
     <p>Category</p>
   </h1>
 </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getMultidata,
    getWgData} from "../../network/home";
  import HomeSwiper from '../home/HomeComponents/HomeSwiper'
  import RecommendView from '../home/HomeComponents/RecommendView'
  import SpecialView from '../home/HomeComponents/SpecialView'
  import BScroll from 'better-scroll'
  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      SpecialView
    },


  }
</script>

<style scoped>
  #home {
    padding-top: -1px;
    /*height: 100px;*/
    /*position: relative;*/
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
  .wrapper{
    height: 100%;
    /*overflow-y: scroll;*/
overflow: hidden;
    background-color: blue;
  }


</style>


