function reverseArrayTraversal(n, arr){
    //write code here
    let bag=""
    for(i=arr.length-1;i>=0;i--){
        bag=bag+arr[i]+" ";
    }
    console.log(bag)
}