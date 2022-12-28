function soltoOnClouds(c){
  let currentloud = 0;
  let jump = 0;
  while(currentloud < c.length - 1){
    if(c[currentloud + 2] == 0){
        currentloud += 2;
        jump++
    }else{
        currentloud++
        jump++
    }
  } 
  console.log(jump) 
  return jump
}
console.log(soltoOnClouds([0,1,0,0,0,1,0]))
// [0,0,1,0,0,1,0]