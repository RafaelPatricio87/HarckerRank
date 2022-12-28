function repeatString(s,n){
 s = s.split("")
 if(!s.includes('a')){
    return 0;
}    
 if(s.length === 1){
    return n
 }
 let count = 0;

 s.forEach((char) => {
    if(char === "a"){
        count += 1
    }
 })
 console.log(count)
  let restante = parseInt(n / s.length)
  count = count * restante;
  
  let add = n % s.length
  
  for(let i = 0; i < add; i++){
    if(s[i] === 'a'){
        count += 1
    }
  }
  return count
}

console.log(repeatString('ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt', 685118368975))