let arr = [3,-5,2,9];
for (let i = count =0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
        count += arr[i];
    }
}
console.log(count);