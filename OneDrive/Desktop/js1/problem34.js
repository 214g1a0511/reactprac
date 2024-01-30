let str="apaple"
flag=false
for(let i=0;i<str.length;i++){
  if(str[i]==str[i+1]){
    flag=true;
    break
  }
}
console.log(flag)