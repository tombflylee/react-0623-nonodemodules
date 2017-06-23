import React from 'react'
import {connect} from 'react-redux'

class Redux extends React.Component{
  render(){
    return(
      <div>
        <p>这是组件2</p>
        <div style={{marginTop:'20px'}}>
          您选择的产品是：{this.props.productValue}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) =>{
  return{
    productValue: state.selectProduct.productValue
  }
}

export default connect(mapStateToProps)(Redux);
