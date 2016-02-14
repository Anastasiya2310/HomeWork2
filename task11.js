function contains(where, what) {
	return what.every(function(item){
  	for(var i = 0; i < where.length; ++i) {
    	if(item === where[i]) {
      	return true;
      }
    }
    return false;
  });
}

console.log(contains([1,2,3], [3,2]));
console.log(contains([1,2,3], [3,2,1,2,3]));
console.log(contains([1,2,3], [1,2,3,4]));