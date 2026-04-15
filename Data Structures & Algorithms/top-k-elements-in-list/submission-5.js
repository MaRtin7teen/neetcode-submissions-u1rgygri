class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}, obj2 = {}, freq = [];

        for (let i in nums) {
            obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        }
        console.log({obj})

        for (let key in obj) {
            console.log({key}) 
            if (obj2[obj[key]]) {
                obj2[obj[key]].push(key)
            }
            else {
                obj2[obj[key]] = [key];

            }
        }

        const revValues = Object.values(obj2).reverse();
        console.log({revValues})

        // flattening arays
        const flattenArray = (arr) => {
           for (let i in arr) {
                if (typeof arr[i] === 'object') {
                    flattenArray(arr[i])
                }
                else {
                    freq.push(arr[i]);
                }
           }
        }
        flattenArray(revValues)

        console.log({freq})

        return freq.slice(0,k)
    }
}
