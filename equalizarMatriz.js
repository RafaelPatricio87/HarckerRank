function equalizarMatriz(arr){
    let obj = {};
    for(let i of arr){
        if(obj[i]){
            obj[i]++
     }else {
        obj[i] = 1
     }
  }
     const valueArr = Object.values(obj)
     const max = Math.max(...valueArr)
     return arr.length - max       
   
}
console.log(equalizarMatriz([3, 3, 2, 1, 3]))


