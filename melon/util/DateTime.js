export default class DateTime {
	getDate(d){
		return d.getDate();
	}
	getFullYear(d){
		return d.getFullYear();
	}
	/**
	 * 返回Sun，Mon等
	 * @param  {[type]} d [description]
	 * @return {[type]}   [description]
	 */
	getDayOfWeek(d){
    	const lang = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
    	return lang[d.getDay()];
	}
	/**
	 * 返回Jan，Feb
	 * @param  {[type]} d [description]
	 * @return {[type]}   [description]
	 */
	getShortMonth(d){
		const lang = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		return lang[d.getMonth()+1];
	}

}