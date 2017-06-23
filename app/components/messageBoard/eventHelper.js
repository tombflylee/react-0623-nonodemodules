export default const EventHelper = {
  // 事件绑定
  addHandler(element,type,handler){
    if(window.addEventListener){
      element.addEventListener(type,handler,false);
    }else if(window.attachEvent){//IE6-8
      element.attachEvent(`on${type}`,handler);
    }else{//早期浏览器
      element[`on${type}`] = handler;
    }
  },
  addEvent:(event)=>{
    return event ? event: window.event;
  },
  preventDefault:(event) =>{
    if(event.preventDefault){
      event.preventDefault();
    }else{
      event.returnValue = false;//IE6
    }
  },
  removeHandler: (element,type,handler) =>{
    if(window.removeEventListener){
      element.removeEventListener(type,handler,false);
    }else if(window.detachEvent){
      element.detachEvent(`on${type}`,handler);
    }else{
      element[`on${type}`] = null;
    }
  }

}
