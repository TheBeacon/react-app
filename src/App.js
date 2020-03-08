import React from 'react';
import logo from './logo.svg';
import './App.css';
import { router } from './router'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Detail from './components/newdetail'
@connect(state => state)
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {
            router.map((item) => {
              return <Route path={item.path} component={item.component} key={item.path} />
            })
          }
          <Route path="/detail" component={Detail} />
          <Redirect from="/" to="/home" exact />
          <Redirect to="/404" />
        </Switch>
        {
          this.props.my.visible ? <ul className="footer">
            <li>
              <NavLink to="/home">
                <span className="iconfont icon-shouye"></span>
                <p>首页</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sort">
                <span className="iconfont icon-fenlei_"></span>
                <p>分类</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <span className="iconfont icon-gouwuche"></span>
                <p>购物车</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/my">
                <span className="iconfont icon-gerenzhongxin1"></span>
                <p>我的</p>
              </NavLink>
            </li>
          </ul> : ""
        }
      </div>
    );
  }

}

export default App;
