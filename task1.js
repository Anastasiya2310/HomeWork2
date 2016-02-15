/* Написать функцию, которая принимает дату (ГГГГ. ММ. ДД) и возвращает значение следующего вида
Год: год
месяц: название месяца
День: день недели

*/

function printDate(year, month, date){ //создаем функцию с тремя аргументами
	var MONTHES = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];//определяем константу в которой хранится массив с названиями месяцев (т.к при отсутствии массива нам выдаст числовое значение месяца)
	var DAYS = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];//аналогично месяцам
	var d = new Date(year, month - 1, date);//определяем переменную, в которой заданы аргументы функции: при этом (для удобства восприятия человеком) для месяца задаем нумерацию на 1 меньшую (чтобы при написании 2 месяца нам выдало февраль, а не март)
	return "Год : " + d.getFullYear() + "\nМесяц : " + MONTHES[d.getMonth()] + "\nДень : " + DAYS[d.getDay()];//формируем строки из названий и элементов соответствующих массивов 
}


console.log(printDate(2016, 2, 14));