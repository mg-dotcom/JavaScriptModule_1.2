class Person {
  constructor(firstname, lastname, DOB) {
    this.firstname = firstname
    this.lastname = lastname
    this.DOB = DOB
  }
  getAge() {
    const currentDateMilli = Date.now()
    const birthDateMilli = this.DOB.getTime()
    const diffMilli = currentDateMilli - birthDateMilli
    const diffDate = new Date(diffMilli)
    return diffDate.getFullYear() - 1970
  }
  getFullname() {
    return `${this.firstname},  ${this.lastname}`
  }
  isEqual(anotherPerson) {
    return (
      this.firstname.toLowerCase() === anotherPerson.firstname.toLowerCase() &&
      this.lastname.toLowerCase() === anotherPerson.lastname.toLowerCase()
    )
  }
}

const p1 = new Person('Umaporn', 'Sup', new Date(2003, 6, 26))
const p2 = new Person('Apisara', 'Chonprasit', new Date(2001, 3, 9))
console.log(p1.getFullname())
console.log(p2.getFullname())
console.log(p2.isEqual(p1))
console.log(p1.isEqual(p1))
console.log(p1.getAge())
