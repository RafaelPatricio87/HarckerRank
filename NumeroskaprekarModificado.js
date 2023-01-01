function kaprekarNumbers(p,q){
    let resultado = []
    for(let i = p; i <= q; i++){
        const squareString = (i*i).toString()
        const num1 = squareString.substring(0,squareString.length/2)
        const num2 = squareString.substring(squareString.length/2,squareString.length)
        
        if(Number(num1) + Number(num2) === i){
            resultado = resultado.concat(i)
        }
    }
    if(resultado.length === 0){
        console.log('INVALID RANGE')
    }else{
        console.log(...resultado)
    }
  
}
 
console.log(kaprekarNumbers(1,100))