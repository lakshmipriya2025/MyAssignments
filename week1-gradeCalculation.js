function checkGrade(studentScore) {
let grade
let result
switch(true){
    case (studentScore >=90):
        grade = "A"
        break
    case (studentScore >=75):
        grade = "B"
        break
    case (studentScore >=40):
        grade = "c"
        break
    default :
        grade = "fail"
}
result = "Score is " + studentScore + "---" + "student has secured grade" + " " + grade
return result
}
console.log(checkGrade(89))
console.log(checkGrade(56))
console.log(checkGrade(95))
console.log(checkGrade(35))
