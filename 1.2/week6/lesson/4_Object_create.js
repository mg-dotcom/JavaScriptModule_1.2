//const pp1 = new Person(1001 ,"Adam", "Jo")
const pp1 = Object.create(p1); // copy obj p1 
console.log(p1); // Person { id: 1001, firstname: 'Adam', lastname: 'Jo' } 
console.log(pp1); // Person {}
console.log(pp1.id); // 1001
console.log(Object.prototype.isPrototypeOf(pp1)); //true
console.log(Person.prototype.isPrototypeOf(pp1)); //true
pp1.hobbies = ["reaing", "pooping"];
console.log(pp1); // Person { hobbies: [ 'reaing', 'pooping' ] }