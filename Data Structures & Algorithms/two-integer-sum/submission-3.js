class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0, j = 1;

        while (i < (nums.length - 1)) {
            const sum = nums[i] + nums[j];

            if (sum === target) {
                return [i, j];
            }

            if (j === (nums.length - 1)) {
                i += 1;
                j = i + 1;
            }
            else {
                j++
            }
        }
    }
}
