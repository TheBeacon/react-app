import myReducer from '../components/my/reducer'
import cartReducer from '../components/cart/reducer'
import { combineReducers } from 'redux'

let reducer = combineReducers({
    my: myReducer,
    cart:cartReducer
})
export default reducer