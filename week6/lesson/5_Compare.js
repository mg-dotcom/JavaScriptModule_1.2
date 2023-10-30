//=== or == compare reference address between two objects
const std1 = {
    studentId: 651000101,
    firstname: "Somchai",
    lastname: "Sookjai",
    studentId: 1
  };
  const std3 = { firstname: "Suda", lastname: "Jaidee", studentId: 651000102 };
  const std4 = { firstname: "Suda", lastname: "Jaidee", studentId: 651000102 };
  const std2 = std1;
  console.log(std1 === std3); //false
  console.log(std1 === std2); //true
  console.log(std3 === std4); //false
  //create compare function to compare two students
  function compareStudent(std1, std2) {
    return std1.studentId === std2.studentId;
  }
  console.log(compareStudent(std1, std2)); //true
  console.log(compareStudent(std3, std4)); //true
  console.log(compareStudent(std1, std3)); //false