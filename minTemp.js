function findMinTemperature (len, str){
    var tempArr = str.split(' ').map(Number);;
    var result = tempArr[0];
    var minTemp = Math.abs(tempArr[0]);
    for (i=1; i<len; i++){
        if(Math.abs(tempArr[i] - 0) <= minTemp){
            minTemp = tempArr[i]
            result = result > 0? result : tempArr[i]
        }
    }
    return result
}

console.log(findMinTemperature(5,"1 -2 -8 4 5"))
console.log(findMinTemperature(4, "-5 2 -2 3"));  
console.log(findMinTemperature(3, "0 1 -1"));  
console.log(findMinTemperature(3, "-3 -2 -1")); 
