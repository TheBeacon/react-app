import axios from 'axios';

let service = axios.create({
    baseURL: "http://localhost:3009",
    "content-type": "application/json",
    timeout: 5000
})

//请求拦截器
service.interceptors.request.use((config) => {
    console.log("请求拦截器");
    let Token = sessionStorage.getItem("token")
    if (Token) {
        config.headers['authorization'] = 'Bearer ' + Token
       
    }
    return config
})

//响应拦截器
service.interceptors.response.use((res) => {
    console.log("响应拦截器");
    return res.data
})

export default service;

