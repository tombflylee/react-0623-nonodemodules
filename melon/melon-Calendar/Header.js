import React from 'react'
import PropTypes from 'prop-types'
import DateTime from '../util/DateTime'
//2016年 Sat 8月15号
export default class CalendarHeader extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const { date, ...rest} = this.props;
		const year = DateTime.getFullYear(date);
		const week = DateTime.getDayOfWeek(date);
		const month = DateTime.getShortMonth(date);
		const day = DateTime.getDate(date);
		const fullDate = `${month} ${day}`;
		return(
			<div className={cx()}>
				<p></p>
				<p></p>
				<p></p>
			</div>
		)
	}
}
CalendarHeader.displayName = 'CalendarHeader';
CalendarHeader.propTypes = {
	date: PropTypes.object.isRequired
}