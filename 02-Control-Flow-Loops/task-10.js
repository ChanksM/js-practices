var check = false;
var nums = [1, 5, 14, 19, 4, 23, 13];
while (!check) {
    check = true;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            check = false;
            var min = nums[i - 1];
            nums[i - 1] = nums[i];
            nums[i] = min;
        }
    }
}
console.log(nums);