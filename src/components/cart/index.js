import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux'
import actionCreator from './actionCreator'
import './index.css'
let mapState = (state) => {
    return {
        list:state.cart.list,
        allPrice:0
    }
}
@connect(mapState, actionCreator)
class Cart extends Component {
    constructor(props){
        super(props)
        /* this.state = {
            list:this.props.cart.list
        } */
    }
    componentDidMount(){
    if(sessionStorage.getItem("token")){
        this.props.getList()
    }
     /*  this.setState({
          list:this.props.cart.list
      }) */
    }
    
    back = () => {
        this.props.history.push("/my")
    }
    allCheck = () => {
        this.props.allAction(this.node.checked)
    }
    render() {
        console.log(this.props);
        return (
            <div className="cart">
                <div className="cart-header">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={this.back}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >购物车</NavBar>
                    {
                        sessionStorage.getItem("token") ? <div>
                           
                           {
                               this.props.list.map((item) => {
                               return <li key={item._id}>
                                   <input type="checkbox" defaultChecked={item.checked} onChange={this.props.oneCheck.bind(this,item._id)} />
                                   <img style={{height:"2rem"}} src={item.product.coverImg} />
                                   <button>-</button>
                                   {item.quantity}
                                   <button>+</button>
                               <span>¥{item.totalPrice}</span>
                               <button onClick={this.props.delAction.bind(this,item._id)}>删除</button>
                               </li>
                               })
                           }
                           <p> <input ref={(node) => this.node=node} onChange={this.allCheck} type="checkbox" />全选</p>
                        <p>商品总价为:{}</p>
                        </div> : <p>登录后享受更多优惠<span className="iconfont icon-arrow"><a onClick={() => { this.props.history.push('./login'); this.props.changeAction() }}>去登陆</a></span></p>
                    }
                </div>
            </div>
        )
    }
}

export default Cart