let dish = ["Paratha", "Masala Dosa", "Noodles", "Spring Rolls", "Samosa"];
let categories = ["North Indian", "South Indian", "Chinese", "Chinese", "North Indian"];
let prices  = [40, 80, 50, 60, 25];
let object={
  data:[],
  getDishesNames: function(data){

    for(i=0;i<this.data.length;i++){

      console.log(this.data[i]["name"]);
    }
 },
  getDishInRange:function(price1, price2){
    for(i=0;i<this.data.length;i++){
      if(this.data[i]["price"]>=price1 && this.data[i]["price"]<=price2){
       console.log(this.data[i]);
      }
    }
  },
  getMaxPriceDish:function(data){
  let max=-Infinity;
    let m="";
    for( let i=0;i<this.data.length;i++){
      if(this.data[i]["price"]>max){
        max=this.data[i]["price"];
        m=this.data[i];
      }
    }
    console.log(m);
  }
};
for(i=0;i<dish.length;i++){
  let name=dish[i];
  let price=prices[i];
  let category=categories[i];
  let obj={name,price,category};
  object["data"].push(obj);
}
console.log(object["data"]);

object["getDishesNames"]();
object["getDishInRange"](40,80);
object["getMaxPriceDish"](object["data"]);