function catAndMouse(x,y,z){
let gatoA = Math.abs(x - z)
let gatoB = Math.abs(y - z)
if(gatoA > gatoB){
    return `Cat B`
}else if(gatoA < gatoB){
    return `Cat A`
}else {
  return `Mouse C`
}

}
console.log(catAndMouse(1,2,3))
console.log(catAndMouse(1,3,2))
console.log(catAndMouse(2,5,4))


// x= gato A
// y= gato B
// z= Rato C
