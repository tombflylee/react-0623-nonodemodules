import React from 'react'
import { notification } from 'antd'
import { browserHistory } from 'react-router'
import './index.css'

export default class Header extends React.PureComponent{
  constructor(props){
    super(props);
  }
  loginOut(){
    localStorage.clear();
    notification.destory();
    browserHistory.push('/login');
    //这个地方应该可以不适用这种方式，将a标签改为Link标签直接写to属性
  }
  render(){
    return(
      <div className='header'>
        <a href="javascript:void(0)" className="login-out-btn" onClick={this.loginOut}>注销</a>
      </div>
    )
  }
}
