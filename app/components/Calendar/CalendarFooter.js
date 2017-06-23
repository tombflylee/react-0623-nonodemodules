import React from 'react'
import PropTypes from 'prop-types'

export default class CalendarFooter extends React.Component{
  static propTypes = {
    confirm: PropTypes.func.isRequired,
  }

  render(){
    return(
      <div className="calendar-footer">
        <button onClick={this.props.confirm}>submit</button>
      </div>
    )
  }
}
