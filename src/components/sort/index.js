import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { subrouter } from '../../router'
import { Switch, NavLink, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.css'
import actionCreator from '../cart/actionCreator';
@connect(state => state ,actionCreator)
class Sort extends Component {
    componentDidMount(){
        // this.props.getList()
    }
    render() {
        console.log(this.props);
        return (
            <div className="sort">
                <div className="sort-header">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >分类</NavBar>
                </div>
                <ul className="sort-aside">
                    <li><NavLink to="/sort/new">新品</NavLink></li>
                    <li><NavLink to="/sort/chou">众筹</NavLink></li>
                    <li>小米手机</li>
                    <li>Redmi</li>
                    <li>黑鲨</li>
                    <li>电视</li>
                    <li>大家电</li>
                    <li>电脑办公</li>
                    <li>小爱智能</li>
                    <li>路由器</li>
                    <li>生活电器</li>
                    <li>厨房电器</li>
                    <li>智能穿戴</li>
                    <li>智能家居</li>
                    <li>车载出行</li>
                    <li>个人健康</li>
                    <li>数码配件</li>
                    <li>日用百货</li>
                    <li>有品精选</li>
                </ul>
                <div className="sort-right">
                    <Switch>
                        {
                            subrouter.map((item) => {
                                return <Route key={item.path} path={item.path} component={item.component} />
                            })
                        }
                        <Redirect from="/sort" to="/sort/new" exact />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Sort