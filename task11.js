/* Написать функцию contains(where, what). Если все элементы массива what содержатся
 в массиве where, функция должна возвращать true. Пустой массив является подмножеством 
 любого массива. Порядок вхождения элементов в массив не имеет значения. */

function contains(where, what) {
	return what.every(function(item){ //перебираем каждый элемент массива what (особенность в том, что every сработает только при true для каждого элемента)
	  	for(var i = 0; i < where.length; ++i) { 
	    	if(item === where[i]) {// если элемент равен элементу из массива where, то 
	      		return true; //возвращаем истину
	      	}
	    }
    	return false;
	});
}

console.log(contains([1,2,3], [3,2]));
console.log(contains([1,2,3], [3,2,1,2,3]));
console.log(contains([1,2,3], [1,2,3,4]));