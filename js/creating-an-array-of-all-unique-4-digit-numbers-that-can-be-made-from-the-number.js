function arrayCreate(array, size) {
    var result = [];
    array.forEach(function iter(parts) {
        return function (v) {
            var temp = parts.concat(v);
            if (parts.includes(v)) {
                return;
            }
            if (temp.length === size) {
                result.push(temp);
                return;
            }
            array.forEach(iter(temp));
        }
    }([]));
    return result;
}

console.log(arrayCreate([1, 2, 3, 4], 4).map(a => a.join('')));
/*console.log(arrayCreate([1, 2, 3, 4, 5, 6, 7, 8, 9], 5).map(a => a.join('')));
console.log(arrayCreate([1, 2, 3, 4, 5, 6, 7, 8, 9], 6).map(a => a.join('')));*/