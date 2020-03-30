import axios from 'axios'


export function request(config) {

  const instance  = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config
  },error => {
    console.log(error)
  })
  instance.interceptors.response.use(res=>{
    return res.data
  },error => {
    console.log(error);
  })
  return instance(config)
}

export function sprequest(config) {

  const spinstance = axios.create({
    baseURL:'https://www.easy-mock.com/mock/5e7f74507b3f3a3656470e2d',
    timeout:10000
  })
  spinstance.interceptors.request.use(config=>{
    return config
  },error => {
    console.log(error)
  })
  spinstance.interceptors.response.use(res=>{
    return res
  },error => {
    console.log(error)
  })
  return spinstance(config)
}