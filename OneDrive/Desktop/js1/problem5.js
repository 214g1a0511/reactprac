let name="arthur";
let bag=""
for(i=0;i<name.length;i++){
  if(name[i]=='t'){
    bag+=name[i];
    i++;
    bag+="k"
    bag+=name[i];
  }
  else{
    bag+=name[i];
  }
}
console.log(bag)