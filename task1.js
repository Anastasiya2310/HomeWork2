function printDate(year, month, date){
  var MONTHES = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  var DAYS = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  var d = new Date(year, month - 1, date);
  return "Год : " + d.getFullYear() + "\nМесяц : " + MONTHES[d.getMonth()] + "\nДень : " + DAYS[d.getDay()]; 
}


console.log(printDate(2016, 2, 14));