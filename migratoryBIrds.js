function migratoryBirds(ar){
    let count = {};
    // esse codigo conta qnt numeros repito tem em um array.
    // e joga num objeto
    ar.forEach((el) => {
      count[el] = (count[el] || 0) + 1
    });
    // retorna o maior valor
    const maxNumber = Math.max(...Object.values(count)); // pega o maior valor
    const num = Object.keys(count).find((chave) => {
        //pega a chave do objeto que contem o valor igual da constante maxNumber.
       return count[chave] === maxNumber
    })
   
    return num

}
console.log(migratoryBirds([1,1,2,2,3]))