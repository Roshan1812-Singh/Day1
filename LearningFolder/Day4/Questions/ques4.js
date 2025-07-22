function removeFirstvalue(arr){
    let arr2 = [];
    for(let i=1; i < arr.length-1; i++){
        arr2[i] = arr[i+1];
        console.log(arr2);
    }
}


removeFirstvalue([10,20,30]);
