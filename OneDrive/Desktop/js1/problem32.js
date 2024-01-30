let str="ankush"
let vow=""
let con=""
for(let i=0;i<str.length;i++){
  if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
    vow+=str[i]
  }
  else{
    con+=str[i]
  }
}
console.log(vow,con)