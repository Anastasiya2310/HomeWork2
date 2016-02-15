/* Напишите функцию, которая удаляет из массива все повторяющиеся элементы */


function unique(arr){
	var answer = [];
  for(var i = 0; i < arr.length; ++i) {
    var found = false;
  	for(var j = 0; j < arr.length; ++j){
    	if(i !== j && arr[i] === arr[j]) { //повторно проходим по массиву и сравниваем элементы: если они НЕ равны по индексу(т.е находятся на разных позициях) И при этом эти элементы равны, то
      	found = true; //то эти элементы повторяются, и их не надо указывать в массиве
      }
    }
    if(!found) {
    	answer.push(arr[i]);
    }
  }
  
	return answer; 
}

console.log(unique([1,2,3,1,4]));