/* Реализовать функцию extend(obj1, obj2), которая скопирует свойства из объекта obj2
 в объект obj1. Функция должна возвращать obj1. Значения одинаковых ключей должны перетирать 
 оригинальные. Пример:
extend({foo: 'bar', baz: 1}, {foo: true, zoop: 0}); // {foo: true, baz: 1, zoop: 0}
 */

function extend(obj1, obj2) {
	for(var prop in obj2) {//перебираем свойства объекта 2
	  	obj1[prop] = obj2[prop];//присваиваем значения свойств
	}

	return obj1;
}
console.log(extend({foo: "bar", baz: 1}, {foo: true, zoop: 0}));