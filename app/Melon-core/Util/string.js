/**
 * 字符串驼峰化
 * 会匹配‘-a’或‘a-a’[即-后必须接一个小写字母]
 * @param  {[String]} source []
 * @return {[type]}        [description]
 */
export const camelize = (source) =>{
  if(!source) return '';
  return source.replace(/-([a-z])/g,(match,p1) => p1.toUpperCase())
}

/**
 * 驼峰化后再将首字母大写
 * @param  {[String]} source [确保不输入’-abe’这种形式]
 * @return {[type]}        [description]
 */
export const pascalize = (source) =>{
  if(!source) return ''
  return `${source.charAt(0).toUpperCase()}${camelize(source.slice(1))}`
}
/**
 * 把一个XxxXxx格式的字符串转化成xxx-xxx的格式
 * @param  {[String]} source [description]
 * @return {[type]}        [description]
 */
export const hyphenate = (source) =>{
  if(!source) return ''
  return source.replace(/([A-Z])/g,(match,p1) => `-${p1.toLowerCase()}`).slice(1)
}
