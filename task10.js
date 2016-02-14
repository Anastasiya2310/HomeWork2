function pick(obj, keys){
	var newObject = {};
  for(var i = 0; i < keys.length; ++i) {
  	var prop = keys[i];
    if(prop in obj){
    	newObject[prop] = obj[prop];
    }
  }
  return newObject;
}
var user = {
		name: "Sergey",
    age: 30,
    email:'sergey@gmail.com',
    friends: ["Anna", "Sveta"]
};
console.log(pick(user, ['name']));
console.log(pick(user, ['name', "second-name"]));
console.log(pick(user, ['name', "friends"]));
