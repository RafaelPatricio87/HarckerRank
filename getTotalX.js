
function getTotalX(a,b){
    let finalHolder = [];
    a.forEach((el => {
    // console.log(el); 2,6

        let temp = [];

        for(let i = 1; i < 100; i++){
            if(i % el === 0){
                temp.push(i)
            }
        }
        finalHolder.push(temp)
    }))
    // console.log(finalHolder)

let finalHolderV2 = [];

finalHolder.forEach((el) => {

    let temp = [];

    el.forEach(el2 => {
        if(el2 <= b[b.length-1]){
            temp.push(el2)
        }
    })
    finalHolderV2.push(temp)
})
// console.log(finalHolderV2)
b.forEach(el => {
    // console.log(el)

    let temp = []

    for(let i = 1; i <= el; i++){
        if(el % i === 0) {
            temp.push(i)
        }
    }
    finalHolderV2.push(temp)
})
// console.log(finalHolderV2)

let conditionTest = a.length + b.length;
// console.log('condição',conditionTest)

let finalHolderV3 = finalHolderV2.flat(10).sort((a,b) => a-b);
// console.log('final HolderV3', finalHolderV2)

let finalHolderV4 = []

finalHolderV3.forEach(el => {
    // console.log(el)

    let count = 0;
    
    finalHolderV3.forEach(el2 => {
        if(el === el2){
            count++

            if(count === conditionTest){
                finalHolderV4.push(el)
            }
        }
    })
})
let finalHolder5 = Array.from(new Set(finalHolderV4));
// console.log('finalHolderV5',finalHolder5)

let allDone = finalHolder5.length;

return allDone
}  
console.log(getTotalX([1],[100])) 

