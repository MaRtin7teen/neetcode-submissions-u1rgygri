class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            
            // Sort the characters in the string and use it as a key
            const sortedStr = str.split('').sort().join('');
            
            if (!obj[sortedStr]) {
                obj[sortedStr] = [];
            }
            
            obj[sortedStr].push(str);
        }

        return Object.values(obj);
    }
}
