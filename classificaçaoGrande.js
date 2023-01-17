function bigSorting(unsorted){
//   unsorted.sort((a,b )=> a - b)
//   unsorted.sort((a,b) => (BigInt(a) > BigInt(b) ? 1: - 1))
  unsorted.sort((a,b) => {
   if(a.length === b.length){
      return a > b ? 1: -1 ;
   }else {
      return a.length - b.length
   }
  })
  return unsorted
}
console.log(bigSorting(['1','2','100','12303479849857341718340192371 ','3084193741082937 ','3084193741082938 ','111','200']))