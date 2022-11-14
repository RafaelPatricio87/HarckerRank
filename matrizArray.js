function diagonalDiference(arr){
 let diagEsquerda = 0;
 let diagDireita = 0;
 for(let index = 0; index < arr.length; index++){
    diagEsquerda += arr[index][index]
    diagDireita += arr[index][arr.length -1 - index]
    
 }
  return Math.abs([diagEsquerda - diagDireita]);

}
console.log(diagonalDiference([[11, 2, 4,],[ 4, 5 ,6],[10, 8 ,-12]]))