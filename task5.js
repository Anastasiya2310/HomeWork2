function cap(s) {
	var answer = [];	
  for(var i = 0; i < s.length; ++i) {
  	if(s[i] >= "A" && s[i] <= "Z") {
    	answer.push(i);
    }
  }
  return answer;
}

console.log(cap("WordS"));
console.log(cap("Word"));
console.log(cap("word"));
console.log(cap("WORD"));