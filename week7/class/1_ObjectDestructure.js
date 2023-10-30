const mail = {
  sender: 'SIT, KMUTT',
  recipent: 'Apisara',
  title: 'Welcome to KMUTT',
  sentDate: new Date(Date.now())
}

let { recipent } = mail
let { sentDate, title } = mail
console.log(recipent)
console.log(sentDate)
console.log(title)

//EX1

const mail2 = {
  sender: 'SIT, KMUTT',
  recipent: {
    firstname: 'Umaporn',
    lastname: 'Sup'
  },
  title: 'Welcome to KMUTT',
  sentDetail: {
    sentDate: new Date(Date.now()),
    host: {
      name: '@sit.kmutt'
    }
  }
}
//firstname, lastname
//hostname

let {
  recipent: { firstname, lastname }
} = mail2

let {
  sentDetail: {
    host: { name }
  }
} = mail2

console.log(firstname)
console.log(lastname)
console.log(name)
