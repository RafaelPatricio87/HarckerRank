function escada(n){
    let symbol = '#';
    let inputLine = '';
    let inputPosition = n - 1;

    for(let lineIndex = 0; lineIndex < n ; lineIndex++){
        for(let colunmIndex = 0; colunmIndex < n; colunmIndex++){
            if(colunmIndex < inputPosition) {
                inputLine += ' ';
            }else {
                inputLine += symbol;
            }
        }
        console.log(inputLine);
        inputLine = ''; // zera o inputLine .
        inputPosition -= 1; //diminui um do inputPosition.
    }
}

escada(5)