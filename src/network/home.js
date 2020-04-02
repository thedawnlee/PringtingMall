import {request,
sprequest} from "./request";



export function getMultidata() {
  return request({
    url:'/home/multidata'
  })

}

export function getWgData() {
  return sprequest({
    url:'/example/swiper'
  })
}

export function getPrintProductData(type,page) {
  return request({
    url:'/api/h3/home/data',
    params:{
      type,
      page
    }
  })

}