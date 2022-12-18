function encontreDigito(n){
    let totalDivisor = 0
    let myArr = String(n).split("").map((n)=>{
        return Number(n)
      })
      for(let indice = 0 ; indice < myArr.length; indice++){
        if(n % myArr[indice] === 0){
            totalDivisor += 1
        }
      }
      return totalDivisor
}
console.log(encontreDigito(10))