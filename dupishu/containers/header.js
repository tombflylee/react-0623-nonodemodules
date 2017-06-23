import React from 'react'
import { connect } from 'react-redux'
import { Link , hashHistory } from 'react-router'
import { Menu, Dropdown ,Button ,Modal ,message } from 'antd'

const confirm = Modal.confirm;

export default class Header extends React.Component {
	constructor(props,context){
		super(props);
		this.state = {
			loading:false,
			staff:{
				onlineCount: '',
		        monthCount: '',
		        usertable: {
		        	gxdwqc: '',
		          	longmobile: '',
		          	post: '',
		          	shortmobile: '',
		          	username: '',
		          	userid: '',
		        },
			}
		}
	}

	render(){
		const staff = this.state.staff;
		const menu=(
			<Menu className="nav-dropmenu">
				<Menu.Item key="0">
					<span className="label">所属单位</span><span>{staff.usertable.gxdwqc}</span>
				</Menu.Item>
				<Menu.divider />
				<Menu.Item key="1">
					<span className="label">用户姓名</span><span>{staff.usertable.username}</span>
				</Menu.Item>
				<Menu.Item key="5">
					<Button type="primary" size="small" onClick={this.handleLogout}>退出登录</Button>
				</Menu.Item>
			</Menu>
		)
		return(
			<header id="navbar">
				<div id="navbar-container" className="boxed">
					<div className="navbar-header">
						<Link to={'/'} className="navbar-brand">
							<div className="brand-title">
								<span className="brand-text">TombFly</span>
							</div>
						</Link>
					</div>
				</div>
				<div className="navbar-content clearfix">
					<ul className="nav navbar-top-links pull-right">
						<li className="login-info">
							<Dropdown overlay={menu} trigger={['click']}>
								<a className="ant-dropdown-link">{staff.usertable.username || 'tombflylee'}</a>
							</Dropdown>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}