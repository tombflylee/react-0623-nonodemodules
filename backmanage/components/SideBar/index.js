import React from 'react'
import { Link, browserHistory } from 'react-router'
import { Menu, Icon } from 'antd'
import './index.css'
const SubMenu = Menu.SubMenu;
const Active = {backgroundColor:'#108EE9'};

export default class SideBar extends React.Component{
  handleClick(){
    browserHistory.push('/');//这一步以后可以省略
  }
  render(){
    return (
      <div className="sidebar">
        <h1 className='header-title' onClick={this.handleClick}>后台管理系统</h1>
        {/* <Menu theme='dark'
              style={{width:240}}
              defaultOpenKeys={['IndexPageManager','RouterManager']}
              mode="inline">
              <SubMenu key="IndexPageManager" title={<span><Icon type="mail"/><span>功能演示</span></span>}>
                <Menu.Item key='redux'>
                  <Link to="/x" activeStyle={Active}>Redux传递数据</Link>
                </Menu.Item>
                <Menu.Item key='fetch'>
                  <Link to="/" activeStyle={Active}>fetch加载数据</Link>
                </Menu.Item>
                <Menu.Item key="dynamicRoute">
                    <Link to="/" activeStyle={Active}>动态路由加载</Link>
                </Menu.Item>
                <Menu.Item key="iconfont">
                    <Link to="/" activeStyle={Active}>使用字体图标</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="RouterManager" title={<span><Icon type="appstore" /><span>其他</span></span>}>
                  <Menu.Item key="notfound">
                      <Link to="/" activeStyle={Active}>404页面</Link>
                  </Menu.Item>
                  <Menu.Item key="empty">
                      <Link to="/" activeStyle={Active}>空模板</Link>
                  </Menu.Item>
              </SubMenu>
        </Menu> */}
      </div>
    )
  }
}
