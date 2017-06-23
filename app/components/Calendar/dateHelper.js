/**
 * 判断是否为Date实例
 * @param  {[type]}  date [date对象]
 */
export const isDate = (date) =>{
  return date instanceof Date;
}

/**
 * 增加N天后的日期
 * @param {[type]} today [date对象]
 * @param {[type]} days  [增加的天数]
 */
export const addDays = (today,days) =>{
  let _seconds = today.getTime();
  return new Date(_seconds+days*24*60*60*1000);
}

/**
 * 增加N月后的日期
 * @param {[type]} today  [date对象]
 * @param {[type]} months [增加的月份数]
 */
export const addMonths = (today,months) =>{
  let _month = today.getMonth();//0:1月
  return new Date(today.setMonth(_month+months));
}

/**
 * 获取某一月的天数
 * @param  {[type]} today [date对象]
 */
export const getDaysOfMonth = (today) =>{
  let _date = new Date(today.setMonth(today.getMonth()+2));
  return new Date(_date.setDate(0)).getDate();
}

/**
 * 获取某一天所属月份的第一天
 * @param  {[type]} today [date对象]
 */
export const getFirstDayOfMonth = (today) =>{
  return new Date(today.getFullYear(),today.getMonth(),1);
}
/**
 * 获取月份:‘1月’
 * @param  {[type]} today [description]
 * @return {[type]}       [description]
 */
export const getMonthStr = (today)=>{
  return `${today.getMonth()+1}月`;
}
/**
 * 获取星期：‘星期一’
 * @param  {[type]} today [description]
 * @return {[type]}       [description]
 */
export const getWeekStr = (today) =>{
  let _arr = ['日', '一', '二', '三', '四', '五', '六'];
  return `星期${_arr[today.getDay()]}`;
}
/**
 *
 */
export const getFullWeekArray = (today) =>{

}
