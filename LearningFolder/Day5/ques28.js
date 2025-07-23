//  First 100 prime nums 2, 3, 5, 7, 11, 13,
// 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
// 59, 61, 67, 71, 73, 79, 83, 89, and 97 

// function firHunPrime(n){
//     let sumArr = [];
//     let sum = 0;

//     for(let i = 0; i < n; i++){
//         if (n % i === 0){
//             sum += i;
//         }
//     }
//     console.log(sum);
// }

// firHunPrime(100);

// function firHunPrime(n){
//     if (n <= 1) {
//         return false;
//     }
//     if(n === 2){
//         return true;
//     }
//     else{
//         for(let i = 2; i < n; i++){
//             if(n % i === 0){
//                 return true;
//             }
//         }
//         return false
//     }
// }

// console.log(firHunPrime(100));