function findMinTemperature (len, str){
    var tempArr = str.split(' ').map(Number);;
    var result = tempArr[0];
    var minTemp = Math.abs(tempArr[0]);
    for (i=1; i<len; i++){
        if(Math.abs(tempArr[i] - 0) <= Math.abs(minTemp)){
            minTemp = tempArr[i]
            result = result > 0? result : tempArr[i]
        }
    }
    return result
}

// Test Case 1: Basic case with positive and negative numbers
console.log(findMinTemperature(5, "1 -2 -8 4 5")); // Expected: 1
console.assert(findMinTemperature(5, "1 -2 -8 4 5") === 1, "Test Case 1 Failed");

// Test Case 2: Multiple numbers with same absolute value
console.log(findMinTemperature(4, "-5 2 -2 3")); // Expected: 2
console.assert(findMinTemperature(4, "-5 2 -2 3") === 2, "Test Case 2 Failed");

// Test Case 3: Includes zero
console.log(findMinTemperature(3, "0 1 -1")); // Expected: 0
console.assert(findMinTemperature(3, "0 1 -1") === 0, "Test Case 3 Failed");

// Test Case 4: All negative numbers
console.log(findMinTemperature(3, "-3 -2 -1")); // Expected: -1
console.assert(findMinTemperature(3, "-3 -2 -1") === -1, "Test Case 4 Failed");

// Test Case 5: Large numbers
console.log(findMinTemperature(3, "-215 273 1000")); // Expected: -215
console.assert(findMinTemperature(3, "-215 273 1000") === -215, "Test Case 5 Failed");

// Test Case 6: Decimal numbers
console.log(findMinTemperature(4, "0.5 -0.5 1.2 -1.2")); // Expected: 0.5
console.assert(findMinTemperature(4, "0.5 -0.5 1.2 -1.2") === 0.5, "Test Case 6 Failed");

