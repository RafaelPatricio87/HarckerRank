function serviceLane(n,cases){
    let min = [];
    for(let i = 0; i < cases.length; i++){
        let a = [];
        for(let j = cases[i][0]; j < cases[i][1]; j++){
            a.push(n[j])
        }
        min.push(Math.min.apply(Math,a))
    }
    return min
}
console.log(serviceLane([2, 3 ,1 ,2 ,3 ,2, 3, 3],[[0,3], [4, 6], [6, 7], [3, 5], [0, 7]]));

// console.log(serviceLane(8,[[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]],[2, 3, 1, 2, 3, 2, 3, 3]))




