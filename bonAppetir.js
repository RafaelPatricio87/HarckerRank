function bonAppetir(bill,k,b){
let conta = 0;
let final = 0;
bill.forEach(price =>  conta += price);
  conta = conta - bill[k]
  final = conta/2
  if(final != b){
    console.log(b - final)
  }else {
    console.log('Bon Appetit')
  }
}

bonAppetir([3,10,2,9],1,12)