function largestNum(arr) {

    let max = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        
    }
    console.log(max);
    
}

largestNum([10,20,30,34]);