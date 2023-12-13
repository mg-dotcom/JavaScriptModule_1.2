const fruits = ['apple', 'mango', 'orange', 'pineapple', 'banana', 'grape']
//splice with remove
//return an array containing the deleted elements.
const removeElements = fruits.splice(1, 2)
console.log(removeElements) //[ 'mango', 'orange' ]
console.log(fruits) //[ 'apple', 'pineapple', 'banana', 'grape' ]

//splice with add
const deletedElements = fruits.splice(2, 0, 'mango', 'rambutant')
console.log(deletedElements) //[]
console.log(fruits) //[ 'apple', 'pineapple', 'mango', 'rambutant', 'banana', 'grape' ]

//splice with replace
const deletedFruit = fruits.splice(2, 1, 'mangosteen')
console.log(deletedFruit) //[ 'mango' ]
console.log(fruits) //[ 'apple', 'pineapple', 'mangosteen', 'rambutant', 'banana', 'grape' ]
