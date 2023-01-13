function chocolateFeast(n,c,m) {
    let barras = Math.floor(n / c);
    let qtdEmbalagem = barras;
   
    while(qtdEmbalagem >= m){
        
        const addBarras = Math.floor(qtdEmbalagem / m)
        barras += addBarras

        qtdEmbalagem = qtdEmbalagem % m
        qtdEmbalagem += addBarras
        
    }
    console.log(barras)
    return barras
   
    
}
chocolateFeast(10,2,5)
chocolateFeast(12,4,4)
chocolateFeast(6,2,2)

// console.log(chocolateFeast(10,2,5))
// console.log(chocolateFeast(12,4,4))
// console.log(chocolateFeast(6,2,2))