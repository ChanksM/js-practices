var arr = [3,-5,2,9]
for (var i=0, count = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
        count += arr[i];
    }
}
console.log(count);