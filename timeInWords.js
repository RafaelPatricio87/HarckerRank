function theTimeWords(h,m){
    let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
     "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
      "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", 
      "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"];

    let minutsRest = 60 - m

    if(m == 0){
        return `${words[h]} o' clock`
    }else if(m == 1 || m == 01){
        return `${words[m]} minute past ${words[h]}`
    }
    else if(m == 15){
        return `quarter past ${words[h]}`
    }else if(m > 0 && m < 30){
       return `${words[m]} minutes past ${words[h]}`
    }else if(m == 30){
        return `half past ${words[h]}`
    }else if(m == 45){
        return `quarter to ${words[h+1]}`
    }else{
        return `${words[minutsRest]} minutes to ${words[h + 1]}`
    }

}
console.log(theTimeWords(3,00))