function area(a = 5, b =6, c = 7){
    var s = (a + b + c)/2
    return Math.sqrt(s*(s-a) * (s-b) * (s-c));
}

console.log(area());