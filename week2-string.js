console.log("//**************Requirement 1 **********//")
let s = "Hello World"
let arr = s.split(" ") //Split the string into an array of words
console.log(arr)
let lastWord=arr[arr.length-1]
console.log(lastWord)  //Find the last word in the array
console.log(`The length of the last word is ${lastWord} ${lastWord.length}`) //Calculate the length of this word

console.log("//**************Requirement 2 **********//")
let  s1= " fly me to the moon "
function lengthOfLastWord(s1) {
let space = s1.trim( )   //Trim the String
console.log(space)
let arr1 = space.split(" ") //Split the String into Words
console.log(arr1)
let lastWord1=arr1[arr1.length-1]
console.log(lastWord1)    //Identify the Last Word
let length = lastWord1.length
console.log(length)   //Calculate the Length of the Last Word
return length        //Return the length
}

console.log (lengthOfLastWord(s1))

console.log("//**************Requirement 3 **********//")
function isAnagram(str1, str2) {
    console.log("Original strings:", str1, str2)
    str1 = str1.toLowerCase()  // Convert both strings to lowercase
    str2 = str2.toLowerCase()
    console.log("Lowercase:", str1, str2)

    let arr3 = str1.split(" ")
    let arr4 = str2.split(" ")
    console.log("Split into array:", arr3, arr4)

    str1 = arr3.join("")
    str2 = arr4.join("")
    //console.log("After joining without spaces:",str1,str2)
    console.log("After join (no spaces):");
    console.log("str1 =", str1);
    console.log("str2 =", str2);
    console.log("-----");


    let sorted1 = str1.split("").sort().join("")  // Sort the letters
    let sorted2 = str2.split("").sort().join("")
     console.log("Sorted letters:", sorted1, sorted2)

    let result = sorted1 === sorted2  //Compare results
    console.log("is anagrams?", result)

    return result
}
isAnagram("listen", "silent")
isAnagram("hello", "world") 