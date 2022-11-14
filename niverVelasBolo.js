function velasboloNiver(candles){
    let max = 0;
    let total = 0;
    for(let index = 0; index < candles.length; index++ ){
      if(max < candles[index]){
        max = candles[index]
      }
    }  
    for(let index = 0 ; index < candles.length; index++){
        if(max == candles[index]){
            total += 1
        }
    }
    return total
}

console.log(velasboloNiver([3,2,1,3]))

