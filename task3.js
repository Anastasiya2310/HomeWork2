function login(users){
	return users.filter(function(user){
  		var name = user[0];
    	var lastIndex = name.length - 1;
	    if (lastIndex >= 0 && name[lastIndex] === "_") {
	    	return true;
	    }
	    return false;
	});
}
console.log(login([
	['t_', 't@gmail.com'],
	['x_x', 'x@gmail.com'],
	['www', 'w@gmail.com'],
	['', '']
]));
