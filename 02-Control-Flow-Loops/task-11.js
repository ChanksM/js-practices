let check = false;
let nums = [1, 5, 14, 19, 4, 23, 13];
while (!check) {
    check = true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            check = false;
            let max = nums[i - 1];
            nums[i - 1] = nums[i];
            nums[i] = max;
        }
    }
}
console.log(nums);
