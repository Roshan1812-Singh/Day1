// function leftShift(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let a = arr[0];
//         let b = arr[arr.length-1]
//         let temp = a;
//         a = b;
//         b = b + temp; 
//         newArr.push(arr[i]);
//     }
//     console.log(newArr);
// }

// leftShift([10, 20, 30, 40]);

// const arr1 = [10,20,30,40]
// [arr1[0],arr1[arr1.length-1]] = [arr1[arr1.length-1],arr1[0]];
// console.log(arr1);

const arr1 = [10,20,30,40];

const result = [...arr1];

if (result.length >= 2) {
    const first = result[0];
    const last = result[result.length-1];
    result[0] = last;
    result[result.length-1] = first;
}
console.log(result);





