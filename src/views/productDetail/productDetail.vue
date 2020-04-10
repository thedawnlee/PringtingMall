<template>
  <div id="productDetail">
    <nav-bar class="navbar">
      <div slot="left" class="left" @click="backtoHome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <span v-for="(item,index) in ItemList" class="center-item"
        :class="{active:index===currentIndex}"
              @click="ItemClick(index)"
        >{{item}}</span>
      </div>
    </nav-bar>
    <scroll class="content">
      <product-detail-swiper :topImages="topImages"></product-detail-swiper>
      <product-detail-base-info :goods="productDetail"></product-detail-base-info>
      <product-detail-shop :shop="shopInfo"></product-detail-shop>
      <ul>
        <li>{11}</li>
        <li>{21}</li>
        <li>{31}</li>
        <li>{41}</li>
        <li>{51}</li>
        <li>{61}</li>
        <li>{71}</li>
        <li>{81}</li>
        <li>{91}</li>
        <li>{101}</li>
        <li>{111}</li>
        <li>{121}</li>
        <li>{131}</li>

      </ul>
    </scroll>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getProductDetail,
    NewproductDetail,
  Shop} from "../../network/productDetail"
  import productDetailSwiper from './ChildComponents/productDetailSwiper'
  import productDetailBaseInfo from './ChildComponents/productDetailBaseInfo'
  import Scroll from 'components/common/scroll/Scroll'
  import productDetailShop from './ChildComponents/productDetailShop'
  export default {
    name: "productDetail",
    components:{
      NavBar,
      productDetailSwiper,
      productDetailBaseInfo,
      Scroll,
      productDetailShop
    },

    data(){
      return {
        productid:undefined,
        ItemList:['商品','详情','参数','评论'],
        currentIndex:0,
        topImages:[],
        productDetail:{},
        shopInfo:{},
      }
    },
    created(){
        this.productid =this.$route.params.id
        getProductDetail(this.productid).then(res=>{
          console.log(res)
          const data = res.result
          this.topImages=res.result.itemInfo.topImages

          this.productDetail = new NewproductDetail(data.itemInfo,data.columns,data.shopInfo.services)
            this.shopInfo = new Shop(data.shopInfo);

        },
        error => {
          console.log(error)
        })

    },
    methods:{
      ItemClick(index){
        this.currentIndex=index
      },
      backtoHome(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .content{
   height: calc(100% - 55px);
    overflow: hidden;
  }
  #productDetail{
    height: 100vh ;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
.center{
  display: flex;
}
  .center-item{
    flex: 1;
  }
.left img{
  margin-top: 14px;
}
.active{
  color: var(--color-high-text);
}
  .navbar{
    margin-top: -44px;
  }
</style>