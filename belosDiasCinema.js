function diaDeCinema(i,j,k){
   let reverse = 0
   let total = 0

  for(let index = i; index <= j; index++){
    reverse = Number(String(index).split('').reverse().join(''))
   if(Number.isInteger(Math.abs(index - reverse) / k) === true){
      total += 1
   }
  }
  return total
}
console.log(diaDeCinema(20,23,6))



// console.log(reverse.toString().split('').reverse().join('')) 


