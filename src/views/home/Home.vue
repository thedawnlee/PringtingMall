<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav">
      <div slot="center">首页</div>
    </NavBar>
    <!--
    滚动时保存tabsidebar
    -->
    <tab-side-bar :titles="featureList"
                  class="ScrollTabsidebar"
                  @TabSideBarClick="TabSideBarItemClick"
                  ref="topTabSideBar"
                  v-show="isShowTopSideBar" ></tab-side-bar>
       <scroll class="content" ref="scroll"
               @scrollEvent="scrollEvent"
               @pullingUpLoadData="pullingUpLoadData"
              >
         <home-swiper :spbanner="banners" @SwiperImgLoadComplete="SwiperImgLoadComplete"></home-swiper>
         <recommend-view v-bind:recommends="recommends"></recommend-view>
         <h3>优质店铺</h3>
         <special-view v-bind:qualityStore="recommends"></special-view>
         <tab-side-bar :titles="featureList"
                       class="TabSideBarSet"
                       @TabSideBarClick="TabSideBarItemClick"
                       ref="tabSideBar"></tab-side-bar>
         <!--<div v-if="finalPrintProduct===[]">-->
         <!--<print-product-show  :printProduct="printGoods['pop'].list"></print-product-show>-->
         <!--</div>-->

         <print-product-show :printProduct="printGoods[finalType].list"></print-product-show>
       </scroll>
    <back-top v-if="isShowBackTop" @click.native="backToTop"></back-top>
    <!--<ul>-->
      <!--<li>11</li>-->
      <!--<li>12</li>-->
      <!--<li>13</li>-->
      <!--<li>14</li>-->
      <!--<li>15</li>-->
      <!--<li>16</li>-->
      <!--<li>17</li>-->
      <!--<li>18</li>-->
      <!--<li>19</li>-->
      <!--<li>110</li>-->
    <!--</ul>-->
      </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import
  {
    getMultidata,
  getWgData,
  getPrintProductData} from "../../network/home";
  import HomeSwiper from './HomeComponents/HomeSwiper'
  import RecommendView from './HomeComponents/RecommendView'
  import SpecialView from './HomeComponents/SpecialView'
  import TabSideBar from 'components/content/TabSideBar/TabSideBar'
  import PrintProductShow from 'components/content/PrintProduct/PrintProductShow'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'
  import {
    itemListenerMixin
  } from "../../common/mixin";

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      SpecialView,
      TabSideBar,
      PrintProductShow,
      Scroll,
      BackTop
    },
    // mixins:[
    //   itemListenerMixin
    // ],
    data(){
      return {
        banners:[],
        recommends:[],
        spbanner:[],
        printGoods:{
          'pop':{
            page:0,
            list:[]
          },'new':{
            page:0,
            list:[]
          },
          'sell':{
            page:0,
            list:[]
          }
        },
        finalPrintProduct:[],
        featureList:['考试资料','英文作文','精选'],
        finalType:'pop',
        scroll:null,
        isShowBackTop:false,
        isShowTopSideBar:false,
        offsetTop:0,
        settingY:0,
        complateImg:null


      }
    },

    created(){
      //1.请求数据

      // getWgData().then(res=>{
      //   // console.log(res.data.data.banner)
      //   // this.spbanner=res.data.data.banner
      //   console.log(res.data.data.banner)
      //   this.spbanner=res.data.data.banner
      // })

      this.getHomeData()
      this.getPrintProductData('pop')
      this.getPrintProductData('new')
      this.getPrintProductData('sell')
      console.log('创建home');


    },
    mounted(){
      console.log(this.$route.path)
      // 监听图片加载

      const refresh = this.debounce(this.$refs.scroll.refresh,200)
      this.complateImg = ()=>{
        refresh()

      }
      this.$bus.$on('imgLoad',this.complateImg)
      // console.log('使用混入来加载内容');
    },
    deactivated(){
      this.settingY = this.$refs.scroll.scroll.y
      console.log(this.settingY);
      console.log('leaving home 取消监听')
      this.$bus.$off('imgLoad',this.complateImg)
    },
    activated(){
      // this.$refs.scroll._scroll.scrollTo(0,this.settingY,0)
      console.log('active');
      console.log(this.settingY)
      this.$refs.scroll.scrollTo(0,this.settingY,500)
      console.log('函数已经执行');
    },
    methods:{
      //图片加载完成事件
      SwiperImgLoadComplete(){
        this.offsetTop = this.$refs.tabSideBar.$el.offsetTop
      },
      //防抖动函数
      debounce(func,delay){
        let timer = null
        return function (...args) {
          if (timer)
          {clearTimeout()}
          timer = setTimeout(()=>{
            func.apply(this, args)
          },delay)
        }

      },
      //上拉请求数据
      pullingUpLoadData(){
        this.getPrintProductData(this.finalType)
        console.log('在下拉啦！')
      },
      //backtop按钮何时出现
      scrollEvent(position){
          this.isShowBackTop = (position.y)<-1000;
          this.isShowTopSideBar=(position.y)<-this.offsetTop

      },
      //点击事件
      TabSideBarItemClick(item){
        console.log("TabBar点击事件触发")
        console.log(item)
        const index = parseInt(item)
        if (this.featureList[item]==='考试资料') {
            this.finalType='pop'
        }
        else if (this.featureList[item]==='英文作文'){
          this.finalType='new'
        }
        else {
          this.finalType='sell'
        }
        console.log('========')
        console.log(this.$refs.topTabSideBar);
        console.log(this.$refs.tabSideBar);

        console.log('========')
        this.$refs.topTabSideBar.currentIndex = index
        this.$refs.tabSideBar.currentIndex = index

      },
      //network request
      getHomeData(){
        getMultidata().then(res=>{
          this.banners = res.data.banner.list
          // console.log('banner的长度'+res.data.banner.list.length)
          // console.log(res.data.banner.list[1].image);
          this.recommends = res.data.recommend.list
          // console.log(this.recommends)

        })
      },
      getPrintProductData(type){
        const page = this.printGoods[type].page+1
        getPrintProductData(type,page).then(res=>{
          this.printGoods[type].list.push(...res.data.list)
          this.printGoods[type].page+=1
          this.$refs.scroll.scroll&&this.$refs.scroll.scroll.refresh()
          this.$refs.scroll.scroll&&this.$refs.scroll.scroll.finishPullUp()
        },error => {
          console.log(error)
        })
      },
      backToTop(){
        this.$refs.scroll.backTop(0,0,500)
      }

    }
  }
</script>

<style scoped>
  #home {
    padding-top: -1px;
    /*height: 100px;*/
    /*position: relative;*/
    height:100vh;
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
  .TabSideBarSet{

    position: sticky;
    top: 44px;
    z-index:9

  }

.content{
  height: calc(100% - 43px);
overflow: hidden;
  margin-top: 44px;

}
.wrapper{
  margin-top: -33px;

}

/*.content{*/

  /*position:absolute;*/
  /*top: 44px;*/
  /*left: 0;*/
  /*right: 0;*/
  /*overflow: hidden;*/
  /*bottom: 44px;*/
/*}*/
.ScrollTabsidebar{
  position: relative;
  z-index: 9;
  margin-top: 77px;
}
</style>
