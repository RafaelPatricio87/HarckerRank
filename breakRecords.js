function breakRecords (score){
    let scoreMax = score[0];
    let scoreMin = score[0]
    let maior = 0;
    let menor = 0;
 for(let index = 0; index < score.length; index++){
    if(score[index] > scoreMax){
        scoreMax = score[index]
        maior += 1
    }
     if (score[index] < scoreMin){
        scoreMin = score[index];
        menor += 1
    }
}
 console.log(maior,menor)
}
breakRecords([3,4,21,36,10,28,35,5,24,42])