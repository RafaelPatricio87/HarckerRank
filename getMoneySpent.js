function getMoneySpent(keyboards,drives,b){
    let total = 0
    for(let index =0; index < keyboards.length; index++){
        let soma = 0
        for(let index2 = 0; index2 < drives.length; index2++){
         soma = keyboards[index] + drives[index2]
         if(soma <= b){
            soma > total? total = soma: total;
         }else {
            soma = 0
         }
        }
    }
    return total === 0 ? -1: total
}
console.log(getMoneySpent([4],[5],5))