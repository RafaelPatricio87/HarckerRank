function timeConversion(s){
  s.split(' ')
  let hours = parseInt(s[0] + s[1]);
  let minute = s[3] + s[4];
  let secons = s[6] + s[7];
  let ampm = s[s.length - 2]

  if(hours >= 12 && ampm === 'A'){
      hours -= 12
  }else if(hours < 12 && ampm === 'P'){
    hours += 12
  }
  if(hours < 10 ){
    return `0${hours}:${minute}:${secons}`
  }else {
    return `${hours}:${minute}:${secons}`
  }
}
console.log(timeConversion('06:40:03AM'))