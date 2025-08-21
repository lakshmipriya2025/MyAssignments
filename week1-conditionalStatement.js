function launchBrowser(browserName){
    if(browserName === "chrome") {
        return browserName + " is launched"
    }
    else {
         return " launched browser is not chrome"
    }
}
console.log (launchBrowser("Safari"))
console.log (launchBrowser("firefox"))
console.log (launchBrowser("chrome"))

function runTests (testType){
    switch (testType){
        case "Sanity":
         console.log ("Test type is Sanity")
         break
         case "Smoke":
         console.log ("Test type is Smoke")
         break
         case "Regression":
         console.log ("Test type is Regression")
         break
         default:
        console.log ("Test type is Smoke")
    }
    }
    runTests("Sanity")
    runTests("Smoke")
    runTests("Other")
    runTests("Regression")