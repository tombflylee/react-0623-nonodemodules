import React from 'react'
import PropTypes from 'prop-types'

export default class CalendarContent extends React.Component{
  static propTypes = {
    dateArr:PropTypes.array.isRequired,//5*7=35
  }
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {
            dateArr.map((row,rowIndex) =>{
              return(
                <tr key = {rowIndex}>

                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
