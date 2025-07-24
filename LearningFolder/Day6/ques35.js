// Create a function to convert a CSV text to a “bi-dimensional” array

function csvToBiDim(str) {
    let arr = [];

    let rows = str.split(' ');
    console.log(rows);
    

    for(let i = 0; i < rows.length; i++){
        let columns = rows[i].split(',');
        arr.push(columns)
        return  columns;
    }
 
}

let a = [`Name,Age,City
John,30,Amsterdam
Smith,25,Alaska
Peter,40,Los Angeles`];
console.log(csvToBiDim(a));

// let str = " Hello Roshan";

// let res = Array(str.split(' '));
// console.log(res);
