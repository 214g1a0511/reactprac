let names=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let ages=[32, 30, 26, 28, 44]
let db={
  data:[],
  ageFilter:function(age){
    let bag=""
    for(let obj of this.data){
      if(obj.age>age){
        bag+=obj.name+" "
      }
    }
    return bag;
  }
}
for(let i=0;i<names.length;i++){
  let name=names[i];
  let age=ages[i];
  let obj={name,age}
  db["data"].push(obj);
}
console.log(db["data"])
console.log(db.ageFilter(30))