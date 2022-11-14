function pageCount(n,p){
    // arredonda o resto da divisão para baixo.
    let frontFlip = Math.floor(p/2);
    
    // arredonda o resto da divisão para baixo.
    let backFlip = Math.floor((n/2)-frontFlip);
    
    // retorna o menor valor.
    let result = Math.min(frontFlip, backFlip);
    return result;
}
console.log(pageCount(5,4))