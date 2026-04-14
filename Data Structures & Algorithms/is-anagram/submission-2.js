class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let obj = {};

        for (const i in s) {
            obj[s[i]] = (obj[s[i]] || 0) + 1;
            obj[t[i]] = (obj[t[i]] || 0) - 1;
        }

        console.log(obj)

        const values  = Object.values(obj);

        for (const i of values) {
            if (i !== 0) {
                return false
            }
        }
        return true
    }
}
