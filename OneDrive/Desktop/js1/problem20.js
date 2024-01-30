for(i=1;i<=5;i++){
  let bag=""
  for(j=1;j<=5;j++){
    if(i==1||i==5){
      bag=bag+"*";
    }
    else{
      if(j==5){
        bag=bag+"*"
      }
      else{
        bag=bag+" "
      }
    }
  }
  console.log(bag)
}