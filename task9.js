/* Напишите функцию, которая удаляет из массива все повторяющиеся элементы */


function unique(arr){
  var object = {};
  for(var i = 0; i < arr.length; ++i) {
    object[arr[i]] = true;
  } 
  return Object.keys(object);
}


/* только в итоге мы получим строки (поскольку в качестве ключей
 выступают строки), а передаваться могут любые значения. Предыдущее решение
 с помощью массивов работало с разным типом данных */
console.log(unique([1,2,3,1,4]));