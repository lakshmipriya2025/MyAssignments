var studentName ="Lakshmi"
let total = 485
let isPassed = true    
let isscienceStudent = false
const schoolName = "ABC School"
let ambition
console.log("Name of the student is "+ studentName +" -------- " + typeof(studentName))
console.log(total+10,"Including Internal Marks" + "--------" + typeof(total))
console.log(isPassed ,"Student is Pass" + "--------" + typeof(isPassed))
console.log("School Name is "+ schoolName + "--------" + typeof(schoolName))
console.log("Ambition of the student is " + "--------" + typeof(ambition))

if (total>450){
    var studentName ="Priya"  
    var studentName ="Anitha"         // Redeclares AND reassigns the same variable (no block scope)
    let total = 478                    // new variable only inside the block
    total = 488                         // allows to reassign
   /* let total = 485    */             // allows only to reassign and not redeclaration (block scope)
    const schoolName = "XYZ School"      // new variable only inside the block (block scope)
    /*const schoolName = "Test School"*/  // redeclaration is not allowed inside same block 
    /*schoolName = "AAA School" */             // reassignment is not allowed inside same block

    console.log(studentName+ " has secured " + total + "-----" + " Outstanding Student ")
}
else
{
    console.log(studentName+ " has secured " + total + "-----" + " Student Performance Not in Outstanding Range ")
}

// boolean example //
if (isscienceStudent){
    console.log("Student belong to Science group")
}
else
{
    console.log("Student does not belong to Science group")
}

console.log(studentName + " " +total) 
// Var - prints the latest assignment which overwrites the outer declaration//
//let - prints the outer let variable which is the intial assignment //
