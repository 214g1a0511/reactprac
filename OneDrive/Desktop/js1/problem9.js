
  let emp=[
  {name:"aman", age:20 ,salary:20000},
  {name:"chand" ,age:230, salary:20000},
  {name:"bhanu", age:40, salary:20000},
  {name:"amar" ,age:50 ,salary:20000}
];
for(i=0;i<=emp.length-1;i++){
  if(emp[i]["age"]<=50){
    console.log(emp[i]["name"]);
  }
}