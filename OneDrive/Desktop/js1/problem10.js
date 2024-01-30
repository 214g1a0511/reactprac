function slice(arr,a,b){
  let bag=[];
  if(a>0 && b>0){
    for(i=a;i<b;i++){
      bag.push(arr[i])
    }
  }

  if(a>0 && !b){
    for(j=a;j<=arr.length-1;j++){
      bag.push(arr[j])
    }
  }

if(a<0 && !b){
  for(z=arr.length+(a);z<=arr.length-1;z++){
    bag.push(arr[z]);
  }
}
if(a>0 && b<0){
 for(n=a;n<=arr.length+(b);n++){
   bag.push(arr[n]);
 }
 }else if(!a && !b)
{
  for(u=0;u<=arr.length-1;u++){
    bag.push(arr[u]);
  }
}
 console.log(bag);
}


slice(['ant', 'bison', 'camel', 'duck', 'elephant'],2, 4);

slice(['ant', 'bison', 'camel', 'duck', 'elephant'],1,"");
slice(['ant', 'bison', 'camel', 'duck', 'elephant'],-3,"");
slice(['ant', 'bison', 'camel', 'duck', 'elephant'],2,-2);
slice(['ant', 'bison', 'camel', 'duck', 'elephant'],"","");