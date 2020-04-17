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
    <scroll class="content" ref="scroll"
            @scrollEvent="scrollEvent">
      <product-detail-swiper :topImages="topImages"
      ref="swiperproduct"></product-detail-swiper>
      <product-detail-base-info :goods="productDetail"
      ref="baseinfo"></product-detail-base-info>
      <product-detail-shop :shop="shopInfo"
      ref="detailshop"></product-detail-shop>
      <product-detail-info :detail-info="productDetail"
                           :detailInfoZero="productDetailInfoZero"
                           :productDetailInfoImg="productDetailInfoImg"
                           @imageLoad="imgLoad"
                           ref="detailinfo"
      ></product-detail-info>
      <product-detail-param-info :param-info="productDetailParamInfo"
      ref="detailparam"></product-detail-param-info>
    <product-detail-comments :commentInfo="productDetailCommentInfo"
    ref="comments"></product-detail-comments>
      <print-product-show :printProduct="recommendData"
      ref="recommends"></print-product-show>
    </scroll>
    <product-detail-buttom-bar @addToCart="addToCart"></product-detail-buttom-bar>
    <back-top v-if="isShowBackTop" @click.native="backToTop"></back-top>


    <toast :msg="msg" :isShow="show"></toast>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getProductDetail,
    NewproductDetail,
  Shop,
  GoodsParam,
  getRecommendsData} from "../../network/productDetail"
  import productDetailSwiper from './ChildComponents/productDetailSwiper'
  import productDetailBaseInfo from './ChildComponents/productDetailBaseInfo'
  import Scroll from 'components/common/scroll/Scroll'
  import productDetailShop from './ChildComponents/productDetailShop'
  import productDetailInfo from './ChildComponents/productDetailInfo'
  import productDetailParamInfo from './ChildComponents/productDetailParamInfo'
  import productDetailComments from './ChildComponents/productDetailComments'
  import PrintProductShow from 'components/content/PrintProduct/PrintProductShow'
  import {debounce} from "../../common/utils";
  import {itemListenerMixin,showBackTop} from "../../common/mixin";
  import BackTop from 'components/content/backTop/BackTop'
  import productDetailButtomBar from './ChildComponents/productDetailButtomBar'
  import Toast from 'components/common/toast/Toast'
  export default {
    name: "productDetail",
    components:{
      NavBar,
      productDetailSwiper,
      productDetailBaseInfo,
      Scroll,
      productDetailShop,
      productDetailInfo,
      productDetailParamInfo,
      productDetailComments,
      PrintProductShow,
      BackTop,
      productDetailButtomBar,
      Toast,

    },

    data(){
      return {
        productid:undefined,
        ItemList:['商品','参数','评论','推荐'],
        currentIndex:0,
        topImages:[],
        productDetail:{},
        shopInfo:{},
        productDetailInfo:{},
        productDetailInfoZero:{},
        productDetailInfoImg:{},
        productDetailParamInfo:{},
        productDetailCommentInfo:{},
        recommendData:[],
        imgcomplate:null,
        themeTopY:[],
        finalPrice:0,
        msg:'',
        show:false

      }
    },
    mixins:[showBackTop],
    // mixins:[itemListenerMixin],
    mounted(){


      const refresh = this.debounce(this.$refs.scroll.refresh,200)
      this.imgcomplate = ()=>{
        refresh()
      }

      this.$bus.$on('imgLoad',this.imgcomplate)
      // console.log('使用混入来加载mounted');
    },
    destroyed(){
      console.log('取消监听imgload');
      this.$bus.$off('imgLoad',this.imgcomplate)

    },
    updated(){
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.baseinfo.$el.offsetTop)
      this.themeTopY.push(this.$refs.comments.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
    },
    created(){
        this.productid =this.$route.params.id
        getProductDetail(this.productid).then(res=>{

          const data = res.result
          this.topImages=res.result.itemInfo.topImages

          this.productDetail = new NewproductDetail(data.itemInfo,data.columns,data.shopInfo.services)
          this.finalPrice = data.itemInfo.lowNowPrice
            this.shopInfo = new Shop(data.shopInfo);
          this.productDetailInfo = data.detailInfo
          this.productDetailInfoZero = data.detailInfo[0]
          this.productDetailInfoImg = data.detailInfo.detailImage[0]
          this.productDetailParamInfo  = new GoodsParam(data.itemParams.info,data.itemParams.rule)
          this.productDetailCommentInfo = data.rate.list[0]
        },
        error => {
          console.log(error)
        })
      getRecommendsData().then(res=>{
       this.recommendData =  res.data.list

        },
      error => {
        console.log('Error');
      })

    },
    methods:{
      addToCart(){
        const product = {}
        product.iid=this.productid
        product.image = this.topImages[0]
        // product.desc = this.productDetail.desc
        product.title = this.productDetail.title
        product.price = this.finalPrice


        // this.$store.dispatch('addCart',product)
        this.$store.dispatch('addCart',product).then(res=>{
          console.log(res)
          this.show=true
          this.msg=res
          setTimeout(()=>{
            this.show=false
            this.msg=''
          },1500)
        })
      },
      requestDetail(iid){
        this.$bus.$on('requestDetail',()=>{
          this.$router.push('/detail/'+iid)
        })
      },
      debounce,
      scrollEvent(position){
        this.isShowBackTop = (position.y)<-1000;
      },
      ItemClick(index){
        this.currentIndex=index
        this.$refs.scroll.scroll.scrollTo(0,-this.themeTopY[index],500)

      },
      backtoHome(){
        this.$router.back()
      },
        imgLoad(){
        console.log('刷新高度')
        this.$refs.scroll.scroll.refresh()
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
