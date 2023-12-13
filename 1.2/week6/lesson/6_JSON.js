const obj1 = {}
const obj2 = { id: 1 }
 
console.log(JSON.stringify(obj1)) //return string
console.log(JSON.stringify(obj2)) //return string
 
// //compare whether object is empty or not by using JSON.stringify
// if (JSON.stringify(obj1) === '{}') console.log('object is an empty')
// else console.log('object is not empty')
 
// if (JSON.stringify(obj2) === '{}') console.log('object is an empty')
// else console.log('object is not empty')
 
function isEmpty(obj) {
  return JSON.stringify(obj) === '{}'
}
console.log(isEmpty(obj1)) //true
console.log(isEmpty(obj2)) //false