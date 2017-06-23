import React from 'react'
import PropTypes from 'prop-types'

export default class CalendarHeader extends React.Component{
  static propTypes = {
    movePrev: PropTypes.func.isRequired,
    moveNext: PropTypes.func.isRequired,
    year: PropTypes.String.isRequired,
    month: PropTypes.String.isRequired
  }
  render(){
    return(
      <div className="calendar-header">
        <span className="item-prev" onClick={this.props.movePrev}>《</span>
        <span className="item-current-month">
          {this.props.year}年{this.props.month}月
        </span>
        <span className="item-next" onClick={this.props.moveNext}>《</span>
      </div>
    )
  }
}
