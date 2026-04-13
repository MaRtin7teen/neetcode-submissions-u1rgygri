class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        const sub = s.split("");
        let matched = 0;
        let currItr = 0;

        for (let i = 0; i < sub.length; i++) {
            for (let j = currItr; j < t.length; j++) {
                if (t[j] === sub[i]) {
                    //matched
                    currItr = j + 1;
                    matched++;
                    break;
                }
            }
        }

        if (matched === sub.length) {
            return true
        }
        else {
            return false
        }
        
    }
}
