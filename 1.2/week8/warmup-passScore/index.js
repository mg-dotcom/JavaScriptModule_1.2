//1
const stdScores1 = [
    {name: 'Baitong', score: 85},
    {name: 'Ant', score: 55},
    {name: 'Karn', score: 75}
];

function getPassingNames(students) {
    const filterStudents = students.filter((student) => student.score >= 70)
    const studentNames = filterStudents.map(
      (filterStudent) => filterStudent.name.toUpperCase() 
    )
    return studentNames
}
const passingNames1 = 
getPassingNames(stdScores1);
console.log(passingNames1);


//2
const stdScores2 = [
    {name: 'Baitong', score: 85},
    {name: 'Ant', score: 55},
    {name: 'Karn', score: 75}
];

function getPassingNames(stdScores2){
    let passingNames = [];

    for(let i = 0; i < stdScores2.length; i++){
        if(stdScores2[i].score >= 70) {
            passingNames.push(stdScores2[i].name.toUpperCase())    
        }
    }
    return passingNames
}

const passingNames2 = 
getPassingNames(stdScores2);
console.log(passingNames2);


