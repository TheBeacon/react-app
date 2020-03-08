import React, { Component } from 'react'
import './index.css'
import { withRouter } from 'react-router-dom'
import { login, reg } from '../../api/request'
import { connect } from 'react-redux'
import actionCreator from '../my/actionCreator'
@withRouter
@connect(state => state, actionCreator)
class Login extends Component {
    back = () => {
        this.props.history.push('/my')
        this.props.changeAction()
    }
    //登录/注册
    login = () => {
        if (this.username.value === '' || this.password.value === "") {
            alert('用户名或密码不能为空');
        } else {
            login(this.username.value, this.password.value).then(res => {
                console.log(res);
                if (res.message === "user not found") {
                    if (this.username.value === '' || this.password.value === '') {
                        alert('用户名或密码不能为空');
                    } else {
                        reg(this.username.value, this.password.value, "beacon", "").then(res => {
                            if (res.message === '用户名已存在') {
                                alert('用户名已存在');
                            } else {
                                alert('注册成功');
                            }
                        })
                    }

                } else {
                    if (res.message === "用户名密码错误") {
                        alert('用户名密码错误');
                    } else {
                        sessionStorage.setItem("token", res.token)
                        sessionStorage.setItem("userName", this.username.value)
                        this.props.history.push("/my")
                        this.props.changeAction()
                    }
                }
            })
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="login">
                    <span onClick={this.back} className="iconfont icon-jiantou3"></span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" />
                    <p>小米账号登录</p>
                    <div className="login-input">
                        <p><input ref={node => this.username = node} type="text" placeholder="请输入账号" /></p>
                        <p><input ref={node => this.password = node} type="text" placeholder="请输入密码" /></p>
                        <p><button className="btn1" onClick={this.login}>立即登录/注册</button></p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login