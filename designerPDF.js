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
console.log(vizualizadorPDF([6,3, 4, 4, 6 ,4, 5, 3, 4 ,3 ,6 ,5, 4 ,6 ,7, 1 ,3, 4 ,2, 5, 6, 1 ,5 ,1, 7, 2 ],'nrdyluacvr'))


