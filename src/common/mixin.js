import debounce from './utils'

export const itemListenerMixin = {
  mounted(){
    console.log('内容混入');
    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.imgcomplate = ()=>{
      refresh()
    }
    this.$bus.$on('imgLoad',this.imgcomplate)
  }
}

export const showBackTop = {
  data(){
    return {
      isShowBackTop:false
    }
  },
  methods:{
    backToTop: function () {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    }
  }
}