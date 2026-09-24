class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const length = nums.length;
        let res = [];
        for (let i = 0; i < length; i++) {
            res[i] = nums[i];
            res[length + i] = nums[i]
        }
        console.log(res);
        return res;
    }
}
