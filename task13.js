function createObject(arrOfKeys, arrOfData) {
	var obj = {};
  for(var i = 0; i < arrOfKeys.length; ++i) {
  	var prop = arrOfKeys[i];
  	if(i >= arrOfData.length) {
    	obj[prop] = undefined;
    } else {
    	obj[prop] = arrOfData[i];
    }
  }
  return obj;
}

console.log(createObject(["foo"], ["bar"]));
console.log(createObject(["foo", "extra"], ["bar"]));