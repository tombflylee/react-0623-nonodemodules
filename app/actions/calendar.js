export const PREVIOUS_MONTH = 'PREVIOUS_MONTH'
export const NEXT_MONTH = 'NEXT_MONTH'
export const DATE_PICKER = 'DATE_PICKER'
export const CONFIRM = 'CONFIRM'

export const previousMonth = () =>{
  return {
    type: PREVIOUS_MONTH,
  }
}
export const nextMonth = () => {
  return {
    type: NEXT_MONTH,
  }
}
export const datePicker = (date) =>{
  return{
    type: DATE_PICKER,
    date,
  }
}
export const confirm = () =>{
  return {
    type: CONFIRM,
    date,
  }
}
