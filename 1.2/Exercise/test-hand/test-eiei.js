// const [...x]=['a','e','i','o','u']
// console.log(x)

// const {...x}={fullName:{firstName:'Pim',lastName:'Jo'}}
// console.log(x)

// class Animal {}
// console.log(typeof Animal)

// function doSometing(x){
//     const value=x||0
//     return value*value
// }
// console.log(doSometing(null))

// function dosth(x=10){
//     const y=x||0
//     return y*y
// }
// let m=100
// function x(){
//     let a=1,b=2,n=5
//     function y(){
//         let a=10,b=20
//         console.log(a)
//         console.log(b)
//         console.log(n)
//         console.log(m)
//     }
//     return y
// }
// x()()

// function x(y){
//     return y
// }
// function doit(){
//     console.log('do it')
// }
// x(doit())

// x=10
// let y=1
// function dosoth(){
//     const z=5
//     x=x+1
//     y=y+1
//     // z=z+1
// }
// dosoth()
// console.log(x)
// console.log(y)
// console.log(z)

function sayGoodBye() {
  return 'Good bye'
}
function doSomething() {
  return sayGoodBye
}
let doIt = doSomething()
console.log(doIt())
