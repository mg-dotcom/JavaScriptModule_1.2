const fruits = ['apple', 'banana', 'cherry'];

// return boolean to check whether all fruits start 
// with vowel char [a, e, i, o, u]

const Vowels = ['a', 'e', 'i', 'o', 'u']
const firstChar = fruits.map((element) => element.charAt(0))
const isVowel = firstChar.every((element) => Vowels.includes(element.toLowerCase()));

console.log(isVowel);