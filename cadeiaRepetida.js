function repeatString(s,n){
const totalLetras = s.repeat(n)
let total = 0
if(s.length === 1){
   return n
}else {

    for(let index = 0; index < n; index++){
        if(totalLetras[index] === s[0]){
           total += 1

        }
    }
   
}


console.log(total)

}
console.log(repeatString('a',1000))