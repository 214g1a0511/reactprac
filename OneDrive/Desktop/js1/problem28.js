input=[2,7,8,6,10,3,12,15]
let count="";
for(let i=0;i<input.length;i++){
  if(i%2==0){
    count+=input[i]+" ";
  }
}

console.log(count)