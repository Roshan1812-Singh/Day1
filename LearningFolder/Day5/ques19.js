function nthPrime(n) {
    let arr1 = [];
    for (let i = 1; i <= n; i++) {
        let p = 5;        
        if (n % i === 0 && p > n) {
            arr1 += i;
        }
    }
    console.log(arr1);
}

nthPrime(10);