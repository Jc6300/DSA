function repeatStringNumTimes(str, num) {
 
if(num < 1){
  return '';
}

let repeatedString = '';
for(let i = 0; i< num; i++){
  repeatedString += str;
}
return repeatedString
}

repeatStringNumTimes("abc", 3);