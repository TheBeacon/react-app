import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { detail,putCart,cartList } from '../../api/request'
import { connect } from 'react-redux'
import './index.css'
import actionCreator from '../cart/actionCreator'
@withRouter
@connect(state => state,actionCreator)
class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            proObj : ''
        }
    }
    back = () => {
        this.props.history.goBack()
        this.props.changeAction()
    }
    componentDidMount(){
        detail(this.props.location.state).then(res => {
            console.log(res);
            this.setState({
                proObj:res
            })
        })
    }
    //加入购物车
    inCart = (id) => {
        putCart(id).then(res => {
            this.props.history.goBack()
            this.props.changeAction()
        })
        /* cartList().then(res => {
            console.log(res);
        }) */
    }
    render() {
        console.log(this.props);
        return (
            <div className="detail">
                <div className="back" onClick={this.back}><span className="iconfont icon-back"></span></div>
                <h2><img src={this.state.proObj.coverImg} /></h2>
                <p>{this.state.proObj.name}</p>
                <button className="btn" onClick={this.inCart.bind(this,this.state.proObj._id)}>加入购物车</button>
            </div>
        )
    }
}
export default Detail