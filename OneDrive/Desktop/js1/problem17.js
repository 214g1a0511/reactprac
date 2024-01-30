for(num=1;num<=30;num++){
  let factor=0;
for(i=1;i<=num;i++){
  if(num%i==0){
    factor++;
  }
}if(factor==2){
  console.log(num, "prime");
}else
  console.log(num,"not prime");

}