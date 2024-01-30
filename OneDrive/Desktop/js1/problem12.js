let arr="!@#$%^&*"
let obj={}
let n=20
for(let char of arr){
  obj[char]=n;
  n+=2
  console.log(char+"-"+obj[char])
}