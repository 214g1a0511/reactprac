let items=["Rice", "Dal", "Salt"]
let quantity=[2, 3, 1]
let prices=[60, 50, 20]
let db={
  data:[],
  total:function(){
    let sum=0;
    for(let i=0;i<this.data.length;i++){
      sum+=this.data[i].qty*this.data[i].price;
    }
    return sum;
    
  }
}
for(let i=0;i<items.length;i++){
  let item=items[i];
  let qty=quantity[i];
  let price=prices[i];
  let obj={item,qty,price};
  db["data"].push(obj);
}
console.log(db["data"]);
console.log(db.total())