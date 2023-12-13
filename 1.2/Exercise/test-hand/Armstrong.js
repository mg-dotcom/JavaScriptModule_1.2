function armstrong(num) {
  let str=[...num+'']
  let pow=str.length
  let result=0
  console.log(str)
  for(let i=0;i<pow;i++){
    result+=Math.pow(str[i],pow)
  }
  return result===num
}
console.log(armstrong(100))
