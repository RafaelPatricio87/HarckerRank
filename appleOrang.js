function coutApplesAndOranges(s,t,a,b,apples,oranges){
    let applescount = 0
    let orangecount = 0
   
    apples.forEach(apple => {
        if((apple + a) >= s && (apple + a) <= t){
            applescount += 1
        }
    });
     
    oranges.forEach(orange => {
        if((orange + b) <= t && (orange + b) >= s){
            orangecount += 1
        }
    });
      
        
   
    
    console.log(applescount)
    console.log(orangecount)
}

console.log(coutApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]))
