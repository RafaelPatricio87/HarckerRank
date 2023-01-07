function fairRations(B) {
    let arr = [...B];
    let somaPaes = 0;
    for(let i = 0; i < arr.length; i++) {
        const actEl = arr[i];
        if(actEl % 2 === 1) {
            arr[i] = arr[i] + 1;
            arr[i + 1] = arr[i + 1] + 1;            
            somaPaes += 2;
        }
    } 
    console.log(' -------')
    
    
    return arr.every((e) => e % 2 === 0 ) ? somaPaes : 'NO';
}
console.log(fairRations([4,5,6,7] ))