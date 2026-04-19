class MinStack {
    constructor() {
        this.stack = []
        this.stackMin = []
        this.stackLength = -1;
        this.min = null;
        this.topArr = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        this.topArr = val;
        this.stackLength += 1;

        const currentMin = this.stackMin[this.stackMin.length - 1] ?? null;

        if ((typeof currentMin === 'number' && currentMin > val) || (typeof currentMin !== 'number')) {
            this.stackMin.push(val)
        }
        else {
            this.stackMin.push(currentMin)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.stackMin.pop();
        this.stackLength -= 1;
        this.topArr = this.stack[this.stackLength];
    }

    /**
     * @return {number}
     */
    top() {
        return this.topArr
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stackMin[this.stackLength]
    }
}
