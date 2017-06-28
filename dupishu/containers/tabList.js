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
	onChange(activeKey){//切换面板
	//ant Tabs的onChange事件默认参数是activeKey
		//这个props是connect()的得到的
		//actions就是bindActionCreators(routerActions,dispatch)
		//dispatch就是dispatch这个方法
		const { dispatch,actions } = this.props;
		dispatch(updateTabChecked({ activeKey: activeKey }))
		actions.push(activeKey);
	}
	onEdit(targetKey, action){//新增或删除tab
		this[action](targetKey);//删除，action为remove
	}
	remove(targetKey){
		const { actions, tabList } = this.props;
		let delIndex;
		let activeKey;

		if(targetKey === tabList.actibeKey){
			tabList.list.map((tab,index)=>{
				tab.key === targetKey ? delIndex = index : null;
			})
			activeKey = tabList.list[delIndex + 1] ?
		        tabList.list[delIndex + 1].key : (tabList.list[delIndex - 1] ?
		          tabList.list[delIndex - 1].key : '');
		      actions.push(activeKey);
		}
   		this.props.dispatch(deleteTabFromList({ targetKey: targetKey }));
	}
	shouldComponentUpdate(nextProps,nextState){
		const thisProps = this.props || {};
	    if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
	      return true;
	    }
	    // eslint-disable-next-line no-restricted-syntax
	    for (const key in nextProps) {
	      if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
	        return true;
	      }
	    }
	    return false;
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