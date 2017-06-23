const toString = Object.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * 返回className组成的数组
 * [classes description]
 * @param  {[string,number,array,object]} args [如果是object，则取value为true的key]
 * @type {Array}
 */
export const createClasses = (...args) => {

  let classes = [];
  for(let arg of args){
    if(!arg) continue;
    switch(toString.call(arg).slice(8,-1)){
      case 'String':
      case 'Number':
        classes.push(arg);
        break;// break switch
      case 'Array':
        classes = classes.concat(createClasses.apply(null,arg));
        break;
      case 'Object':
        for(let key in arg){
          if(hasOwnProperty.call(arg,key) && arg[key]) classes.push(key);
        }
        break;
    }
  }
  return classes;
}

/**
 * 返回className组成的字符串
 * @param  {[type]} args [description]
 * @return {[type]}      [description]
 */
export const createClassName = (...args) => {
  return createClasses(...args).join(' ');
}
