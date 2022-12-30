function taumBday(b,w,bc,wc,z){
    let total = 0
    let qtdBranco = BigInt(w)
    let qtdPreto = BigInt(b)
    let precoPreto = BigInt(bc)
    let precoBranco = BigInt(wc)
    let converter = BigInt(z)
  
   console.log(converter)
}
console.log(taumBday(10,10,1,1,1))

// const gifts = BigInt(b) + BigInt(w);

// const whiteGifts = gifts * BigInt(wc) + (BigInt(b) * BigInt(z));
// const blackGifts = gifts * BigInt(bc) + (BigInt(w) * BigInt(z));

// let min = BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc);

// (blackGifts < min) && (min = blackGifts);
// (whiteGifts < min) && (min = whiteGifts);
    // return min;