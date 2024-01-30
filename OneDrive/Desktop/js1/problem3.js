function space(str){
let  bag="";
  for(let i=0;i<str.length;i++){
    if(str[i]==" "){
      bag+='-';
    }
    else{
      bag+=str[i];
    }
  }
 console.log(bag)
}
space("bruce wayne is batman    ");