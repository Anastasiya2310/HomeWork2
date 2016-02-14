function remove(arr){
	return arr.filter(function(elem){
  	if(typeof elem === 'number'){
    	return true;
    }
    return false;
  });
}
console.log(remove([1, 2, 'a', 'b']));
console.log(remove([1, 'a', 'b', 0, 15]));