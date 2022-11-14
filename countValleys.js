function countValleys(steps,path){
    let valleys = 0;
    let elevation = 0;

    for(let i = 0 ; i < steps; i++){
        if(path[i] =='D'){
            elevation--
        }else{ // 'U'
            if(elevation == -1){
                valleys++
            }
            elevation++
        }
    }
    return valleys

}
console.log(countValleys(12,'DDUUDDUDUUUD'))
