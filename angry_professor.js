function angryProfessor(k,a){
    let alunosNaHora = 0
  a.forEach((el) => {
 if(el <= 0){
    alunosNaHora += 1
 }
  })
  if(alunosNaHora >= k){
    return 'NO'
  }else {
    return 'YES'
  }
}
console.log(angryProfessor(2,[0,-1,2,1]))