function plusMinus(arr){
    let positivo = 0;
    let negativo = 0;
    let zeros = 0;
   for(let index = 0; index < arr.length; index++){
    if(arr[index]> 0){
        positivo += 1
    }else if(arr[index] < 0){
        negativo += 1
    }else {
        zeros += 1
    }
   }
    console.log((positivo/arr.length).toFixed(6));
    console.log((negativo/arr.length).toFixed(6));
    console.log((zeros/arr.length).toFixed(6));
};   

console.log(plusMinus([1,1,0,-1,-1]))