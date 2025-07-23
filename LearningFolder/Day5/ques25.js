function uniqueValFromArr(arr,arr2) {
    const newArr = arr.concat(arr2);
    console.log(newArr);

    let uniValArr = newArr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

    console.log(uniValArr);
}

uniqueValFromArr([1, 2, 3],[3, 4, 5])
