function utopianTree(n){
    let counter = 0
    let totalHeight = 0
    while(counter <= n){
        if(counter === 0){
            totalHeight = 1
            counter = counter + 1
            continue
        }
        if(counter % 2){
            totalHeight = totalHeight * 2
        }else {
            totalHeight = totalHeight + 1
        }
        counter = counter + 1
    }
    return totalHeight
}
console.log(utopianTree())
