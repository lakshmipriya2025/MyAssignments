const nums = [2, 4, 5, 2, 1, 2]
const k = 2

function numofOccurrences(nums, k) {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === k) {
            count++
        }
    }

    return count
}

let result = (numofOccurrences(nums, k))
console.log("number of occurences of element" + " "+ k + " is " + result + " times" )
