import './style.scss'
export class Calendar {

	constructor(x,y){

	}

	_date_array = [];
	current_day = new Date();
	current_year = this.current_day.getFullYear();
	current_month = this.current_day.getMonth()+1;
  calendarContainer;
  calendarHead;
  calenderBody;
  iconLeftElem;
  iconRightelem;


	MONTH_NUMBER = 12;
	ROW_NUMBER = 5;
	COL_NUMBER = 7;
  WEEK_MAP = ['日','一','二','三','四','五','六'];

	/**
	 * 算出每月天数
	 * @param  {[type]}
	 * @return {[type]}
	 */
	_initMonthDayNumber (year){
		this._data_array = [];
		for (let i =0; i < this.MONTH_NUMBER; i++){
			switch(i+1){
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
					this._data_array.push(31);
					break;
				case 4:
				case 6:
				case 9:
				case 11:
					this._data_array.push(30);
					break;
				case 2:
					this._isLeapYear(year) ?
					this._data_array.push(29) :
					this._data_array.push(28)
					break;
				default:
					break;
			}
		}
	}

	/**
	 * 判断是否为闰年
	 * 能被4整除而不能被100整除/能被400整除
	 * @param  {year}
	 * @return {Boolean}
	 */
	_isLeapYear(year){
		return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
	}

  /**
   * 获取月份首日是星期几
   */
  _weekofMonth(date){
    return new Date(date.getFullYear(),date.getMonth(),1).getDay();
  }

	/**
	 * 渲染外层容器
	 * @return {[type]}
	 */
	_renderContainer(outerElement){
		this.calendarContainer = document.createElement('div');
		this.calendarContainer.className = 'calendar';
		outerElement.appendChild(this.calendarContainer);
	}

	/**
	 * 渲染头部
	 */
	_renderHeader(date){
		this.calendarHead = document.createElement('div');
    this.iconLeftElem = document.createElement('i');
    this.iconRightelem = document.createElement('i');
    let  spanEle = document.createElement('span');
    let _date = date||this.current_day;
    let year = _date.getFullYear();
    let month = _date.getMonth() + 1;
    this.calendarHead.className = 'calendar-header';
    this.iconLeftElem.className = 'icon-left';
    this.iconRightelem.className = 'icon-right';
    spanEle.textContent = `${year} 年 ${month} 月`;
    this.calendarHead.appendChild(this.iconLeftElem);
    this.calendarHead.appendChild(spanEle);
    this.calendarHead.appendChild(this.iconRightelem);
    this.calendarContainer.appendChild(this.calendarHead);
		}

    /**
     * 渲染星期汉字
     */
    _renderBodyWeek(){
      this.calenderBody = document.createElement('div');
      this.calenderBody.classNames = 'calendar-body';
      let calendarBodyHead= document.createElement('ul');
      calendarBodyHead.className = 'calendar-body-head';
      for(let i = 0;i < this.COL_NUMBER;i ++){
        let liEle = document.createElement('li');
        liEle.textContent = this.WEEK_MAP[i];
        calendarBodyHead.appendChild(liEle);
      }
      this.calenderBody.appendChild(calendarBodyHead);
      this.calendarContainer.appendChild(this.calenderBody);
    }

    _renderBodyDay(date){
      let _date = date||this.current_day;
      let firstDay = this._weekofMonth(_date);
      let numberIndex = 0;//0-34
      let previoutMonthIndex = 1;
      let currentMonthIndex = 1;
      let nextMonthIndex = 1;
      let calenderBodyContent = document.createElement('div');
      let currentMonth = _date.getMonth();
      let currentYear = _date.getFullYear();
      let currentDay = _date.getDate();
      calenderBodyContent.className = 'calendar-body-content';
      for(let i = 0;i < this.ROW_NUMBER;i ++){
        let ulEle = document.createElement('ul');
        ulEle.className = 'calendar-body-content-ul';
        for(let j = 0;j < this.COL_NUMBER;j ++){
          let liEle = document.createElement('li'),
              aEle = document.createElement('a');
          aEle.href = `javascript:;`;//阻止跳转
          liEle.appendChild(aEle);
          if(numberIndex < firstDay){//1日之前
            let previousMonth =
              (currentMonth === 0) ? 11: currentMonth-1;
            liEle.className = 'item-gray';
            aEle.textContent = this._data_array[previousMonth] - (firstDay - previoutMonthIndex);
            ulEle.appendChild(liEle);
            previoutMonthIndex++;
            numberIndex++;
          }else if(numberIndex > this._data_array[currentMonth] + firstDay -1){//最后一日之后
            liEle.className = 'item-gray';
            aEle.textContent = nextMonthIndex;
            ulEle.appendChild(liEle);
            nextMonthIndex++;
            numberIndex++;
          }else{
            aEle.className = 'item-a-link';
            liEle.textContent = currentMonthIndex;
            if( currentMonthIndex === currentDay){
              liEle.className = 'item-current';
              aEle.textContent = '今天';
            }
            ulEle.appendChild(liEle);
            currentMonthIndex++;
            numberIndex++;
          }
        }
        calenderBodyContent.appendChild(ulEle);
      }
      this.calenderBody.appendChild(calenderBodyContent);
    }

    _removeUI(){
      this.calendarHead.remove();
      this.calenderBody.remove();
    }

    renderUI(element){
      this._renderContainer(element);
      this._renderHeader();
      this._renderBodyWeek();
      this._renderBodyDay();
    }

    syncUI(date){
      this._removeUI();
      this._initMonthDayNumber(this.current_year);
      this._renderHeader(date);
      this._renderBodyWeek();
      this._renderBodyDay(date);
      this.bindEvents();
    }

    bindEvents(){
      this.iconLeftElem.addEventListener('click',()=>{
        if(this.current_month === 0){
          this.current_month = 11;
          this.current_year--;
        }else{
          this.current_month--;
        }
        syncUI(new Date(this.current_year,this.current_month));
      });
      this.iconRightelem.addEventListener('click',()=>{
        if(this.current_month === 11){
          this.current_month = 0;
          this.current_year++;
        }else{
          this.current_month++;
        }
        syncUI(new Date(this.current_year,this.current_month));
      });
    }

    init(element){
      this._initMonthDayNumber(this.current_year);
      this.renderUI(element);
      this.bindEvents();
    }
}
