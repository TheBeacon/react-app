import { cartList,del,putCart } from '../../api/request'
export default {
    getList(){
        return dispatch => {
            cartList().then(res => {
                dispatch({
                    type:"CART",
                    list:res
                })
            })
        }
    },
    changeAction() {
        return {
            type: "CHANGE"
        }
    },
    allAction(isCheck){
        return{
            type:"ALLCHECK",
            isCheck
        }
    },
    delAction(id){
        return dispatch => {
            del(id).then(res => {
                dispatch({
                    type:"DELETE",
                    id
                })
            })
        }
    },
    oneCheck(id){
        return{
            type:'ONECHECK',
            id
        }
    },
    incAction(id){
        return dispatch => {
            putCart(id).then(res => {
                dispatch({
                    type:"INCSUM",
                    id
                })
            })
        }
    }
}