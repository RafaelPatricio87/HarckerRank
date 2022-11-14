function miniMaxSum(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for(let index = 0; index < arr.length; index++){
    if(max < arr[index]){
        max += arr[index]
    }
    if(min > arr[index]){
        min = arr[index]   
    }
    sum += arr[index] 
  }
  let maxSum = sum - min;
  let minSum = sum - max;
  console.log(minSum + ' ' + maxSum)
}
miniMaxSum([1,3,2,5,7,9])