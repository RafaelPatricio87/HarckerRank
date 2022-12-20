function SherlockRaizQuadrados(a,b){
    let count = 0
 for(let index = 0 ;index < b; index++){
    if((index * index) >= a && (index*index) <= b){
        count++
    }
 }
 return count
}
console.log(SherlockRaizQuadrados( 8,20))