const students = [
    {
        name: "MG",
        attendence: [true,true,false,true,false],
        testScore: [49,55,93,45,45]
    },
    {
        name: "Poppy",
        attendence: [true,true,true,true,false],
        testScore: [66,55,85,45,45]
    },
    {
        name: "Grinch",
        attendence: [true,true,true,true,false],
        testScore: [0,8,99,100,0]
    }
]

function getAttendanceRate(student){
    const atdRate = student.attendence.filter((attend) => attend === true)
    return (atdRate.length/5) * 100
}

function getAvgScore(student){
    const totalSc = student.testScore.reduce((acc,cur) => acc + cur,0)
    return totalSc/student.testScore.length
}

function underPerformStudent(students){
    const underPerStd = students.filter((student) => getAttendanceRate(student) < 80 && getAvgScore(student) < 70)
                        .map((student) => { return { 
                            name: student.name,
                            attendenceRate: getAttendanceRate(student),
                            avg: getAvgScore(student)
                        }  }  )

    return underPerStd
}


console.log(underPerformStudent(students))



