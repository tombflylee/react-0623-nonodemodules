import { createClasses, createClassName } from './classnames'
import { pascalize, hyphenate } from './string'
import {
  COMPONENT_CLASS_PREFIX, // ui
  COMPONENT_SIZES,//['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']
  COMPONENT_VARIANT_PREFIX, // variant
  COMPONENT_STATE_PREFIX // state
} from './config'
/***********************************************************/
/**
 * Class:Create
 * 暴露的函数:init()
 * addStates/addVariants/setPart
 * clearVariants/clearStates
 * removeVariants/removeStates
 * @param {[type]}
 */
export class Create{// var calendar = new Create('Calendar');

  constructor(type){
    this.type = type;
    this.displayName = pascalize(type);
    this.hyphenatedClassName = hyphenate(this.displayName);
  }
  classNames;
  states;//object
  variants;//array
  parts;//string

  /**
   * 会自动找到variants[]/size/states{}/className/hidden(true加入states)/disabled(true加入states)字段
   * @param  {Object类型} [props={}] [description]
   * @return {[type]}            [description]
   */
  init(props = {}){
    this.classNames = props.className;
    this.states = this._resolveStates(props);
    this.variants = this._resolveVariants(props);
    return this._build();
  }

  /**
   * [addStates description]
   * @param {Object类型} newStates [例:{disabled:true}]
   */
  addStates(newStates){
    this.states = {...this.states,...newStates};
    return this._build();
  }
  removeStates(name){
    this.states[name] = false;
    return this._build();
  }
  clearStates(){
    this.states = {};
    return this._build();
  }
  addVariants(...args){
    this.variants = [...this.variants,...args];
    return this._build();
  }
  removeVariants(variant){
    this.variants = this.variants.filter( item => item !== variant );
    return this._build();
  }
  clearVariants(){
    this.variants = [];
    return this._build();
  }
  setPart(part){
    this.parts = part
    return this._build();
  }
  _resolveStates(props){
    const { states, hidden, disabled } = props;
    return {...states,hidden,disabled};
  }
  _resolveVariants(props){
    let { variants = [],size } = props;
    return COMPONENT_SIZES.indexOf(size) !== -1 ? variants.concat(`size-${size}`) : variants;
  }
  _build(){
    return createClassName(this.classNames,
      this._getStatesClassName(this.states),
      this._getVariantsClassName(this.variants),
      this._getPartsClassName(this.parts)
    );
  }
  _getPartsClassName(part){
    const prefix = `${COMPONENT_CLASS_PREFIX}-${this.hyphenatedClassName}`;
    return part ? `${prefix}-${part}` : prefix;
  }
  _getVariantsClassName(variants = []){
    return this._addPrefix(COMPONENT_VARIANT_PREFIX,variants);
  }
  _getStatesClassName(states = {}){
    return this._addPrefix(COMPONENT_STATE_PREFIX,states);
  }
  _addPrefix(prefix,...args){
    return createClasses(...args).map((className) => `${prefix}-${className}`).join(' ');
  }

}
