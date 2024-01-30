function isPrime(n){
  if(n<=2){
    return false;
  }
  for(i=2;i<n;i++){
    if(n%i==0){
      return false;
    }
  }
  return true;
}
function primes(){
  for(j=1;j<50;j++){
    if(!isPrime(j)){
      console.log(j);
    }
  }
}
primes();