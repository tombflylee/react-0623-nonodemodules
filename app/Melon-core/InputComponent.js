import React from 'react'
import PropTypes from 'prop-types'
import shallowEqual from './Util/shallowEqual'

export default class InputComponent extends React.Component{

  constructor(props, context = {} ){
    super(props,context);
    const {value,defaultValue} = props;
    this.state={
      value:value === void 0 ? defaultValue : value
    }
  }
  static defaultProps = {};
  static propTypes = {
    name: PropTypes.string,
    readOnly: PropTypes.bool,
    valid: PropType.bool,
    onChange: PropType.func
  }
  static contextTypes = {
    attachForm: PropTypes.func,
    detachForm: PropTypes.func
  }
  static displayName = 'InputComponent';

  componentDidMount(){
    const attachForm = this.context.attachForm;
    if(attachForm){
      attachForm(this);//this为实例
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.hasOwnProperty('value') && nextProps.value !== this.state.value) this.setState({nextProps.value});
  }
  shouldComponentUpdate(nextProps,nextState){
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }
  componentWillUnmount(){
    const detachForm = this.context.detachForm;
    if(detachForm) detachForm(this);
  }
  onChange(e,callback){
    const {onChange,value} = this.props;
    // this.props.onChange存在就执行onChange(e)
    // onChange(e)执行的是props中的onChange
    onChange && onChange(e);
    // if (value !== void 0) {
    //     callback && callback();
    //     return;
    // }
    //
    // 这种对应 uncontrolled 逻辑
    if (e.value !== this.state.value) {
        this.setState({value: e.value}, callback);
    }
  }
  isDisabled(){
    return this.props.disabled;
  }
  isReadOnly(){
    return this.props.readOnly;
  }
  getValue(){
    return this.state.value;
  }
  getStyleStates(){
    const {readOnly, valid, disabled} = this.props;
    let states ={};
    if(readOnly !== void 0) states['read-only'] = readOnly;
    if(disabled !== void 0) states.disabled = disabled;
    if(valid !== void 0){
      states.valid = !!valid;
      states.invalid = !valid;
    }
    return states;
  }
}
