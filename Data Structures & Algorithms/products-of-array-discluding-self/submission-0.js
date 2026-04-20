class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const products = []
        for (let i = 0; i < nums.length; i++) {
            products.push(nums.reduce((a, b, idx) => {
                if (i === idx) return a
                return a * b
            }, 1))
        }
        return products
    }
}
