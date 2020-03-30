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