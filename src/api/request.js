import axios from './index'

//用户注册
export const reg = (userName, password, nikeName, avatar) => {
    return axios.post('http://localhost:3009/api/v1/auth/reg', { userName, password, nikeName, avatar })
}

//登录
export const login = (userName, password) => {
    return axios.post('http://localhost:3009/api/v1/auth/login', { userName, password })
}

//获取商品列表
export const list = () => {
    return axios.get('http://localhost:3009/api/v1/products')
}

//获取商品详情
export const detail = (id) => {
    return axios.get("http://localhost:3009/api/v1/products/"+id)
}

//加入购物车
export const putCart = (product,quantity) => {
    return axios.post('http://localhost:3009/api/v1/shop_carts',{product,quantity})
}

//获取用户购物车信息
export const cartList = () => {
    return axios.get("http://localhost:3009/api/v1/shop_carts")
}

//删除购物车商品
export const del = (id) => {
    return axios.delete("http://localhost:3009/api/v1/shop_carts/"+id)
}