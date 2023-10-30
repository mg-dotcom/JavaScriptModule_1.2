//1. create object with object literals

const st1 = {
    studentID: 65134,
    firstname: "Somchai",
    lastname: "Komkpop"
  };
  
  console.log(st1); 
  console.log(Object.keys(st1)); // บอก key
  console.log(Object.values(st1)); // บอก value
  
  const st2 = {}; // empty but {} === const st2 = new Object()
  console.log(Object.prototype.isPrototypeOf(st2)); // true
  console.log(typeof st2);  // object
  
  // composite object
  const std3 = {
    firstname: "okbro",
    lastname: "Jaidee",
    studentID: 652342,
    address: { provice: "BKK", country: "Thailand" }
  };
  console.log(std3.lastname); // jaidee
  console.log(std3.address.country)
  console.log(std3["lastname"]); // dynamic keys -> jaidee
  
  std3.email = "mg@email.com"; //add
  std3.firstname = "heehow"; // เปลี่ยนเป็น firstname = heehow
  delete std3.email; // email หายไปเเล้ว
  
  std3.getAddress = function () {
    return this.address;
  }; 
  
  console.log(std3);
  console.log(std3.getAddress()); // { provice: 'BKK', country: 'Thailand' }
  
  //property value can store function
  const std4 = {
    firstname: "Sonsir",
    lastname: "motine",
    getFullname: function () {
      return `${this.firstname} ${this.lastname}`;
    }
  };
  
  console.log(std4.getFullname()); // Sonsir motine
  
  function Person(id, fn, ln) {
    this.id = id;
    this.firstname = fn;
    this.lastname = ln;
  }