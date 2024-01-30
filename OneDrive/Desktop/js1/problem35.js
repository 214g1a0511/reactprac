let arr=["hello","world","bicky","apple"]
let res=[]
for(let ele of arr){
  res.push(revStr(ele))
}
console.log(res)

function revStr(str){
  let rev=""
  for(let i=str.length-1;i>=0;i--){
    rev+=str[i]
  }
  return rev
}