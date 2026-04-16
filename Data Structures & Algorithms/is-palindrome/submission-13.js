class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase()
        let trimmed = '',reverse = '';

        for (let i in str) {
            if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= '0' && str[i] <= '9')) {
                trimmed += str[i];
                reverse = str[i] + reverse
            }
        }
        console.log(trimmed, reverse)
        return trimmed === reverse
    }
}
