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

//2. all mail ids of mails array
const mailIds = []
mails.forEach((mail) => mailIds.push(mail.id))
mails.forEach((mail) => console.log(mail.id))
console.log(mailIds)
mails.forEach((mail) => console.log(mail))
