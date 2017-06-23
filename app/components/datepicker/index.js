import React { Component } from 'react'

class DatePicker extends Component{
  state = {

  }

  render(){
    return(
      <div className='calendar'>
        <div className='calendar-header'>
          <i className='icon-left'></i>
            <span></span>
          <i className='icon-right'></i>
        </div>
        <div className='calendar-body'>
          <ul className='calender-body-header'>
            <li>日</li>
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
          </ul>
          <div className='calendar-body-content'>
            {

            }
          </div>
        </div>
      </div>
    )
  }
}
