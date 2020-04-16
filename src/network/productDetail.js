import {request} from "./request";

export function getProductDetail(iid) {
  return request({
    url:'/api/h8/detail',
    params:{
      iid
    }
  })

}
export function getRecommendsData() {

  return request({
    url: '/api/h8/recommend'
  })
}
export class NewproductDetail{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.colunms = columns
    this.services = services
    this.realPrice  = itemInfo.lowNowPrice
  }
}
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}