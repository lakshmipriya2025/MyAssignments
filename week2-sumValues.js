function sumValues(n) {
    let sum = 0;                                      // Step 2

    for (let i = 1; i <= n; i++) {                    // Step 3
        sum = sum + i;                                // Step 4
        console.log("i =", i, ", sum =", sum);        // Step 5
    }

    return sum;                                        // Step 6
}

let total = sumValues(5);                              // Step 7
console.log("Final Sum:", total)