export default class Validity {
  constructor(){
    this.states = [];
  }
  addState(state){
    this.states.push(state);
  }
  isValid(){
    let states = this.states;
    for(let state of states){
      if(!states[i].isValid) return false;
    }
  }
  getMessage(){
    let states = this.states;
    for(let state of states){
      if(!states[i].isValid) return states[i].message
    }
    return '';
  }
}
