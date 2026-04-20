class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        console.log({nums, target})
        return nums.findIndex(num => num === target)
    }
}
