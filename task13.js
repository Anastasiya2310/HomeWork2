/* Реализовать функцию createObject(arrOfKeys, arrOfData), которая принимает аргументами два массива, 
и возвращает объект, в котором названия ключей это строки из массива arrOfKeys, 
а значения - элементы из массива arrOfData. В ключ, стоящий на первом месте массива arrOfKeys должно быть записано значение, стоящее на первом месте arrOfData. Если данных меньше, чем ключей, заполняй значения ключей как undefined. Пример работы:
createObject(['foo'], ['bar']); // {foo: 'bar'}
createObject(['foo', 'extra'], ['bar']); // {foo: 'bar', extra: undefined} */

function createObject(arrOfKeys, arrOfData) {
	var obj = {};
  for(var i = 0; i < arrOfKeys.length; ++i) { // перебираем элементы массива arrOfKeys
    var prop = arrOfKeys[i]; //свойства объекта - элемент из массива arrOfKeys
  	if(i >= arrOfData.length) {// если индекс элемента первого массива больше длины второго массива
      obj[prop] = undefined;// то пропущенные элементы принимают значение undefined
    } else {
    	obj[prop] = arrOfData[i];// иначе в качестве ключа берем элемент первого массива, а в качестве значения - элемент второго массива
    }
  }
  return obj;
}

console.log(createObject(["foo"], ["bar"]));
console.log(createObject(["foo", "extra"], ["bar"]));