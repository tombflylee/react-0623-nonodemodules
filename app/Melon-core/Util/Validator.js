import Validity from './Validity'
export class Validator {
  constructor(){
    this.rules = [];
  }
  addRule(rule){
    this.rules.push(rule);
    return this;//返回实例
  }
  resolveChecker(config = {}){
    
  }
}
