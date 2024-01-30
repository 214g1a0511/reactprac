let arr=[1,3,9,8,4,2,2,3,3];
let obj={};
for(i=0;i<=arr.length-1;i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1;
  }
  else{
    obj[arr[i]]++
  }
}
let sum=0;
for(j in obj){
  if(obj[j]==1){
    sum=sum+Number(j);
  }
}
console.log(sum)