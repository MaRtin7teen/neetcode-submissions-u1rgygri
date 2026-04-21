class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while (stones.length > 1) {
            // sort descending
            stones.sort((a, b) => b - a);

            let y = stones.shift(); // largest
            let x = stones.shift(); // second largest

            if (y !== x) {
                stones.push(y - x);
            }
        }

        return stones.length === 1 ? stones[0] : 0;
    }
}
