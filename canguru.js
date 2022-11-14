function canguru(x1,v1,x2,v2){
   let jump1 = x1;
   let jump2 = x2;
   let yesno = 'NO';
   for(let index = 0 ; index < 10000; index++){
    jump1 += v1
    jump2 += v2
    if(jump1 == jump2){
       yesno = 'YES'
    }
    
   }
   return yesno
}

console.log(canguru(0,2,5,3))