function unique(arr){
  var answer = [];
  for(var i = 0; i < arr.length; ++i) {
    var found = false;
    for(var j = 0; j < i; ++j){
      if(arr[i] === arr[j]) {
        found = true;
      }
    }
    if(!found) {
      answer.push(arr[i]);
    }
  }
  
  return answer; 
}

console.log(unique([1,2,3,1,4]));