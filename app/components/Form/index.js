import './style.scss'

/**
 * 暴露的函数：
 *1.init()
 *2.submit()
 */
export class Form {
  constructor(formContainer){
    this.formContainer = formContainer;
    this.allInputGroup = formContainer.querySelectorAll('.input-group');
  }

  inputObj = [];//所有input元素
  requiredInputObj = [];// 所有必填的input元素

  /**
   * 初始化时得到所有input
   *初始化时得到所有required input
   */
  init(){
    this._getAllInput();
    this._getRequiredInput();
  }

  submit(ele){
    const _click = (e)=> {
      e.preventDefault();
      if(this._parsleyRequiredAll(this.requiredInputObj)){
        console.log('true');
      }
    }
    this._addEvent(ele,_click,'click');
  }

  _getAllInput(){
    for(let ele of this.allInputGroup) this.inputObj.push(ele.querySelector('input'));
  }
  _getRequiredInput(){
    for(let ele of this.allInputGroup) this.requiredInputObj.push(ele.querySelector('.input-required'));
  }

  /**
   * param {ele:current required input element }
   */
  _parsleyRequired(ele){
    var _value = ele.value.trim();//会取到空格
    if(_value){
      this._toggleClass(ele,'input-success','input-error');
      return true;
    }
    this._toggleClass(ele,'input-error','input-success');
    return false;
  }
  /**
   * 验证所有
   */
  _parsleyRequiredAll(eleArr){
    const func = (e) =>{
      this._parsleyRequired(e.currentTarget);
    }
    return eleArr.every((ele,index) => {
      this._addEvent(ele,func,'focus','blur','keydown');
      this._parsleyRequired(ele);
    })
  }

  /**
   * 为同一个元素绑定多个事件，处理函数一样
   */
  _addEvent(ele,func,...events){
    for(let event of events){
      ele.addEventListener(event,func);
    }
  }

  /**
   * 删除或添加classname
   *第二个参数是添加的，第三个是删除的
   */
  _toggleClass(ele, ...rest){
    if(rest[1]) {
      let reg = new RegExp(`(\\s|^)${rest[1]}(\\s|$)`,'ig');
      ele.className = ele.className.replace(reg,'');
    }
    let reg = new RegExp(`(\\s|^)${rest[0]}(\\s|$)`,'ig');
    if(rest[0]&&!ele.className.match(reg)) ele.className = `${ele.className} ${rest[0]}`;
  }
}
