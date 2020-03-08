
const initialState = {
    list:[],
    allPrice:0
}
export default (state = initialState, action) => {
    
    switch (action.type) {

    case "CART":
        var newState = JSON.parse(JSON.stringify(state))
        newState.list = action.list 
        newState.list.forEach((item) => {
            item.checked = false
            item.totalPrice = item.product.price*item.quantity
        })
        return newState
    case "ALLCHECK":
        var newState = JSON.parse(JSON.stringify(state))
        newState.list.forEach((item) => {
            item.checked = action.isCheck
        })
        return newState
    case "DELETE":
        var newState = JSON.parse(JSON.stringify(state))
        let i = newState.list.findIndex((item) => item._id === action.id)
        newState.list.splice(i,1)
    case "ONECHECK":
        var newState = JSON.parse(JSON.stringify(state))
        newState.list.forEach((item) => {
            if(item._id === action.id){
                item.checked = !item.checked
            }
        })
    case "INCSUM":
        var newState = JSON.parse(JSON.stringify(state))
        newState.list.forEach((item) => {
            if(item._id === action.id){
                item.quantity ++
            }
        })
        return newState
    default:
        return state
    }
}
