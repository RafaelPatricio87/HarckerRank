function arrayRotation(a,k,queries){
 
for(let index = 0; index < k; index++){
   const ultimoArray = a.pop()
a.unshift(ultimoArray) 

}  
let ar = []  
for(let index2 = 0; index2 < queries.length; index2++){
   ar.push(a[queries[index2]]) 
}
return ar

}
console.log(arrayRotation([3,4,5] ,2 ,[1,2]))