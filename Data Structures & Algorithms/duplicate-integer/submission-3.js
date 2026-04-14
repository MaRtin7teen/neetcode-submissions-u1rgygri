class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {};

        for (const i of nums) {
            console.log(i)
            if (obj[i]) {
                return true
            }
            else {
                obj[i] = true;
            }
        }
        console.log({obj})
        return false;
    }
}
