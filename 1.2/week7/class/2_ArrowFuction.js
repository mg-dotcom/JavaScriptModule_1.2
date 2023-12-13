//function declare, named function
function sum(n1, n2) {
  return n1 + n2
}
//function expression, anonymous function
const sum2 = function (n1, n2) {
  return n1 + n2
}
//arrow fuction, function expresstion, anonymous function
const sum3 = (n1, n2) => n1 + n2

console.log(sum(1, 2))
console.log(sum2(1, 2))
console.log(sum3(1, 2))

const sum4 = (n1, n2) => {
  // dont forget returnnnn !
  // if we dont have, ANS will undefined
  return n1 + n2
}
console.log(sum4(1, 2))

//EX1
const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function']
const mails = [
  {
    id: 12323502,
    sender: {
      firstname: 'Umaporn',
      lastname: 'Sup'
    },
    subject: 'Welcome to SIT, KMUTT'
  },
  {
    id: 55588811,
    sender: {
      firstname: 'Tisanai',
      lastname: 'Chat'
    },
    subject: 'Reminder: INT201 Class'
  }
]
let firstChars = ''
keywords.forEach((keyword) => (firstChars += keyword.charAt(0)))
mails.forEach((mail) => console.log(mail))
//const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function']
//1. string contains the first charactor of each keyword
//'dsrpf'
console.log(firstChars)
keywords.push('optional chaining')
console.log(keywords)
//2. all mail ids of mails array
const mailIds = []
mails.forEach((mail) => mailIds.push(mail.id)) //[ 12323502, 55588811 ]
console.log(mailIds)
//3. return array that contains keywords which include 'es' (case insensitive)
const words = ['chases', 'purches', 'buy', 'food']
const esKeyword = words.filter((word) => word.toLowerCase().includes('es'))
console.log(esKeyword)
//4. array that contains all senders' firstname
const mailSender = mails.map((mail) => mail.sender.firstname)
console.log(mailSender) // ['Umaporn','Apsiara']
//5. array logId
const logMailIds = mails.map((mail) => 'logid-' + mail.id)
console.log(logMailIds)
