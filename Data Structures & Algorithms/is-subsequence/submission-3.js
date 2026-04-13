class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if (s.length > t.length) return false;

        let itr1 = 0, itr2 = 0, matched = 0;


        while (itr1 < s.length && itr2 < t.length) {
            if (s[itr1] === t[itr2]) {
                console.log({itr1, itr2})
                itr1++;
                matched++;
            }
           itr2++;
            
        }

        if (matched === s.length) {
            return true;
        } 
        else {
            return false;
        }





        // const sub = s.split("");
        // let matched = 0;
        // let currItr = 0;

        // for (let i = 0; i < sub.length; i++) {
        //     for (let j = currItr; j < t.length; j++) {
        //         if (t[j] === sub[i]) {
        //             //matched
        //             currItr = j + 1;
        //             matched++;
        //             break;
        //         }
        //     }
        // }

        // if (matched === sub.length) {
        //     return true
        // }
        // else {
        //     return false
        // }

        
    }
}
