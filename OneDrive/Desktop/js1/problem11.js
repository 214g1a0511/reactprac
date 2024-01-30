let lower="abcdefghijklmnopqrstuvwxyz"
let n=30
let obj={}
for(let char of lower){
  obj[char]=n;
  n+=1
  console.log(char+"-"+(n-1))
}