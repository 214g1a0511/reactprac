let str="ankush";
let even=""
let odd=""
for(let i=0;i<str.length;i++){
  if(i%2==0){
    even+=str[i]
  }else{
    odd+=str[i]
  }
}
console.log(even,odd)