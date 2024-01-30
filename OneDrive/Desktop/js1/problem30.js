let arr=[1,5,10,9,7,13,2,20]
let count=0;
for(let i=0;i<arr.length;i++){
  if(prime(arr[i-1])||prime(arr[i+1])){
    count++;
  }
}
console.log(count)

function prime(n){
  let factor=0;
  for(let i=0;i<=n;i++){
    if(n%i==0){
      factor++
    }
  }
  return factor==2;
}