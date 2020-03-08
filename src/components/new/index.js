import React, { Component } from 'react'
import './index.css'
import { list } from '../../api/request'
import { connect } from 'react-redux'
import actionCreator from '../my/actionCreator'
@connect(state => state,actionCreator)
 class New extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        list().then(res => {
            console.log(res.products);
            this.setState({
                list:res.products
            })
        })
    }
    detail = (id) => {
        console.log(id);
        this.props.changeAction()
        this.props.history.push('/detail',id)
    }
    render() {
        return (
            <div className="new">
                <h2 className="new-header-img"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7fb0db5edd60ec27a0e32e8fe3c6f5ad.jpg?thumb=1&w=500&h=200" /></h2>
                <h3>手机</h3>
                <ul className="new-proList">
                    {
                        this.state.list.map((item) => {
                        return <li key={item._id} onClick={this.detail.bind(this,item._id)}>
                            <img src={item.coverImg} />
                            <p>测试商品</p>
                        </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default New
