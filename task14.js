function extend(obj1, obj2) {
	for(var prop in obj2) {
	  	obj1[prop] = obj2[prop];
	}

	return obj1;
}
console.log(extend({foo: "bar", baz: 1}, {foo: true, zoop: 0}));