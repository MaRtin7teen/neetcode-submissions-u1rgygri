class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s) {
        if (s.length % 2 !== 0) {
            return false;
        }
    const getCorrespondingClose = (bracket) => {
        if (bracket === '{') {
            return '}'
        }
        else if (bracket === '[') {
            return ']'
        }
        else if (bracket === '(') {
            return ')'
        }
    }

        let arr = [], open = 0, close = 0

        for (const i in s) {
            if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
                arr.push(s[i]);
                open++;
            }
            else {
                const lastItem = arr[arr.length - 1] || null;
                const correspondingClose = getCorrespondingClose(lastItem);

                console.log(s[i], lastItem, correspondingClose)
                
                if (correspondingClose === s[i]) {
                    arr.pop();
                }
                close++;
            }
            console.log({open, close})
        }

        console.log({arr})

        return (open !== close || arr.length) ? false : true;
    }
}
