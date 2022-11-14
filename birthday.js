function birthday(s,d,m){
    let count = 0
    let sum = 0
    for(let index = 0; index <= (s.length - m); index++){
        for(let index2 = 0; index2 < m ; index2++){
            sum = sum + s[index + index2]; 
            console.log('primeiro index na posição',index,'index2 na posição',index2,'valor adicionado no sum',s[index + index2]) ;
            console.log('sum',sum)
            
        }
        if(sum === d){
            count += 1
        }
        sum = 0
    }
    console.log(count)
};
birthday([1,2,1,3,2],3,2)
