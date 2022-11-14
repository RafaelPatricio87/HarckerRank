function corridaObstáculos(k,height){
    let max = 0
    for(let index = 0; index < height.length; index++){
        if(height[index] > max ){
            max = height[index]
        }
    }
    if(k >= max){
        return 0
    }else{
       return max - k  
    }
  
}
console.log(corridaObstáculos(7,[2,5,4,5,2]))