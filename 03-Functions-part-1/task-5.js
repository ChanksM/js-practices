let arr1 = [1, 2, -4, 3, -9, -1, 7], arr2 = [];

function f() {
    for (let i of arr1) {
        if (isPositive(i)){
            arr2.push(i)
        }
    }
    console.log(arr2);
}
f(arr1);

function isPositive(num) {
    if (typeof num !== "number"){
        throw new Error('parameter type is not a Number')
    } else if (num > 0) {
        return true; 
    } else {
        return false;
    }
}
isPositive(-3)
isPositive(3)
isPositive('s')