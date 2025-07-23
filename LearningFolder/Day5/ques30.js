// let a = '10';
// let b = '5264';

// let result = +a + +b;
// console.log(result);

function numString(str1, str2){
    let sum = Number(str1) + Number(str2);
    let result = String(sum)
    console.log(result);
    setTimeout(() => console.log(typeof result), 3000);
    
}

numString('15', '10980');