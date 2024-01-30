for(let z=1;z<=10;z++){
let bag="";
for(i=1;i<=10;i++){
  if(z==1 || z==10){
  bag=bag+"*";
  }else{
    if(i==1 || i==10){
      bag=bag+"*";
    }else {
      bag=bag+" ";
    }
  }
}
  console.log(bag);
}