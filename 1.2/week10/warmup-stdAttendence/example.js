const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]


  function getAttendanceRate(student){
    const studentIndex = students.find((std) => std.name === student.name)
    const attendanceRate = student.attendance.filter((attend) => attend === true)
    
    if(studentIndex){
      return (attendanceRate.length/student.attendance.length)*100
    } else {
      return "This student not found in array"
    }
  }

  function getAvgScore(student){
    const studentIndex = students.find((std) => std.name === student.name)
    const sumScore =  student.testScores.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
     
    if(studentIndex){
      return sumScore/student.testScores.length
    } else {
      return "This student not found in array"
    }
  }

  function underPerformStudent(students){
    const underPerfArr = students.filter((student) => getAttendanceRate(student) < 80 && getAvgScore(student) < 70)
    const formatArr = underPerfArr.map((student) => 
    {return {
      name: student.name,
      attendanceRate: getAttendanceRate(student),
      avgScore: getAvgScore(student)}})
    return formatArr
  }

 
  console.log(underPerformStudent(students))
