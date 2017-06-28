import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import { Spin, message, Form, Icon, Button, Row, Col } from 'antd'
import { fetchLogin } from 'actions/common'
const FormItem = Form.Item;

export default class Login extends React.Component{
	constructor(props, context){
		super(props);
		this.state = {
			loading:false,
		}
	}
	render(){
		return(
			<div className="login">
				<div className="sy_top"></div>
				<div className="btmLogin">
					<div className="sy_bottom">
						<h1></h1>
					</div>
				</div>
			</div>
		)
	}
}