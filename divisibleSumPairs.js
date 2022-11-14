function divisibleSumPairs(n,k,ar){
    let ac = 0
    let soma = 0
    for(let index = 0; index < ar.length ; index++){
        for(let index2 = 0; index2 < ar.length; index2++){
            if(index !== index2){
                if((ar[index] + ar[index2]) % k == 0){
                    ac += 1
                }
            }
        }
    }
    return ac / 2
}
// soma = ar[index] + ar[index2]


console.log(divisibleSumPairs(5,3,[2,8,6,8,4]))
// console.log('index'  , ar[index] + ' +' , ar[index2],' index2 soma = ',soma)  