function vizualizadorPDF(h,word){
    let saida = 0
    let letraAlta = 0
    for(let w = 0; w < word.length; w++){
        for(let i = 1; i <= h.length; i++){
           
          if(word[w] === (String.fromCharCode(i + 96))){
            if(h[i-1] > letraAlta){
                letraAlta = h[i -1]
            }
              
          }
        }
    
        
    }
    saida = letraAlta * word.length
    return saida

}
console.log(vizualizadorPDF([1 ,3 ,1 ,3 ,1 ,4 ,1 ,3 ,2 ,5 ,5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ,5 ,5 ,5 ,5, 5, 5 ],'abc'))


