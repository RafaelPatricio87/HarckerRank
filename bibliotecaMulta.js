function libraryFine(d1,m1,y1, d2,m2,y2){
   let multa = 0
   if(y1 > y2 && m1 >= m2 && d1 >= d2){
     multa = 10000
   }
}
console.log(libraryFine(2 ,6 ,2014,7 ,6 ,2014))
// apos o dia 15 hackos
// apos o mes 500 hackos
// apos o ano 10000


// const dia = d1- d2
//    const mes = Math.abs(m1  -m2)
//    const ano = Math.abs(y1 - y2)
//    let multa = 0
//     if(ano > 0){
//         if(m1 > m2){
//          return  multa = 10000
//         }else if(m1 == m2 && d1 > d2){
//             return multa = 10000
//         }
       
//     }
//    if(dia > 0 && mes == 0){
//     multa = dia * 15
//    }else if(mes !== 0){
//     multa = mes * 500
//    }
//    return multa