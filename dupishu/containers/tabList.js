import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { is } from 'immutable'
import { Tabs } from 'antd'
import { routerActions } from 'react-router-redux'
import { updateTabChecked, deleteTabFromList } from '../actions/tablist'

const TabPane = Tabs.TabPane;

@connect(
	(state,ownProps) => ({ tabList: state.tabListResult }),
	(dispatch) => ({ actions:bindActionCreators(routerActions,dispatch),
		dispatch: dispatch})
)
export default class TabList extends React.Component{
	constructor(props){
		super(props);
	}
	onChange(activeKey){//ant Tabs的onChange事件默认参数是activeKey
		//这个props是connect()的得到的
		//actions就是bindActionCreators(routerActions,dispatch)
		//dispatch就是dispatch这个方法
		const { dispatch,actions } = this.props;
		dispatch()
	}
	render(){
		const { tabList } = this.props;
		return(
			<Tabs 
				hideAdd
				onChange={this.onChange}
				activeKey={tabList.activeKey}
				type="editable-card"
				onEdit={this.onEdit}>
				{tabList.list.map((tab) => 
					<TabPane tab={tab.title} key={tab.key}>{tab.content}</TabPane>)
				}
			</Tabs>
		)
	}
}