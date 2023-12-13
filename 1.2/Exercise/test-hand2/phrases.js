/*
You have a list of text phrases, and you want to find and extract all the unique words used in
these phrases. You should ignore punctuation and consider words with different capitalization 
as the same word (e.g., "apple" and "Apple" should be treated as the same word). 
Use a combination of map(), split(), filter(), and reduce() to achieve this.
*/

const phrases = [
    "The quick brown fox jumps over the lazy dog.",
    "A quick brown dog jumps over the lazy fox.",
    "Lazy dogs and lazy foxes are both cute animals."
];

const find=phrases.map((phrase)=>phrase.toLowerCase().split(' '))
    

console.log(find);