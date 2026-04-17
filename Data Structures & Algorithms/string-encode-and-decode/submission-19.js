class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        console.log({strs}, strs.length)
        if (strs[0] === '' && strs.length === 1) {
            return ''
        } 
        if (strs.length === 0) {
            return '[]'
        }
        return strs.join("||")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log({str})
        if (str === '' && str.length === 0) {
           return ['']
        } 
        if (str === '[]') {
            return []
        }
        //return str.split("||")?.length > 0 ? 
        return str.split("||")
        // : [""]
    }
}
