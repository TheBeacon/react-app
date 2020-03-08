import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import actionCreator from './actionCreator'
@connect(store => store, actionCreator)
class My extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: sessionStorage.getItem('token')
        }
    }
    login = () => {
        this.props.history.push('/login')
        this.props.changeAction()

    }
    outLogin = () => {
        sessionStorage.clear()
        this.setState({
            token: ''
        })
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="my">
                    {
                        this.state.token ? <p>你好,{sessionStorage.getItem("userName")}
                            <button className="btn1" onClick={this.outLogin}>退出登录</button></p> : <p onClick={this.login}><a>登录/注册</a></p>
                    }

                </div>
            </div>
        )
    }
}

export default My