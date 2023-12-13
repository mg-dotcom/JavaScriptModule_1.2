//1
function testNum(arrNum){
  if(arrNum === null || arrNum === undefined) {
      return {}
  } 
  //min
  let minObj = Math.min(...arrNum)
  //max
  let maxObj = Math.max(...arrNum)
  //sum
  let sumObj = 0
  for(let i = 0; i < arrNum.length; i++){
    sumObj += arrNum[i]
  }
  //avg 
  let avgObj = sumObj/arrNum.length

  return {min: minObj, max: maxObj, sum: sumObj, avg: avgObj}
}

console.log(testNum([1,2,3]));
console.log(testNum(null));


//2
//function declaration
function arrayStats(arr) {
  //min, max, sum, avg
  if (arr === null || arr == undefined) return {}
  let min = arr[0],
    max = arr[0],
    sum = 0
 
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
    if (arr[index] < min) min = arr[index]
    if (arr[index] > max) max = arr[index]
  }
 
  return { sum: sum, avg: sum / arr.length, min: min, max: max }
}
console.log(arrayStats([2, 4, 6, 8]))
console.log(arrayStats([1, 3, 5, 9]))