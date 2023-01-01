function taumBday(b,w,bc,wc,z){
    let total = 0
    let presentes = BigInt(b + w)
    let qtdBranco = BigInt(w)
    let qtdPreto = BigInt(b)
    let precoPreto = BigInt(bc)
    let precoBranco = BigInt(wc)
    let converter = BigInt(z)
     if(qtdPreto * precoBranco + qtdPreto * converter < qtdPreto * precoPreto){
       total = presentes * precoBranco + qtdPreto * converter
     }else if(qtdBranco * precoPreto + qtdBranco * converter < qtdBranco * precoBranco){
        total = presentes * precoPreto + qtdBranco * converter
     }else{
        total =   (qtdPreto * precoPreto)+(qtdBranco * precoBranco )
     }
     console.log(total)
     return total
}
console.log(taumBday(3,3,1,9,2))
