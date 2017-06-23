/**
 * props:style,opacity,scale,...other
 * @type {Object}
 */
import React from 'react'
import PropTypes from 'prop-types'

export default class RippleCircle extends Component{
  static defaultProps = {
    opacity:0.3,
    scale:2
  }

  static propTypes = {
    opacity: PropTypes.number,
    scale:PropTypes.number
  }

  shouldComponentUpdate(nextProps){
    const {opacity,scale} = this.props;
    return opacity !== nextProps.opacity || scale !== nextProps.scale;
  }
  render(){
    return(
      const {style,opacity,scale,...other} = this.props;
      return (
        <div
          {...other}
          style={{
            ...style,
            opacity,
            WebkitTransform: `scale(${scale})`,
            MozTransform: `scale(${scale})`,
            msTransform: `scale(${scale})`,
            transfrom: `scale(${scale})`
          }}/>
      )
    )
  }
}
