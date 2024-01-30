let symbols="! @ # $ % ^ & *";
let obj={};
for(i=0;i<symbols.length;i++){
    if(i%2==0){
        obj[symbols[i]]=i+20;
        console.log(symbols[i]+"-"+(i+20))
    }
    
}
//for(let key in obj){
  //  console.log(symbols[i]+"-"+(i+20))
//}