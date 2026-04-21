class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let max = 0

        set.forEach(n => {
            if (!set.has(n - 1)) {
                let current = n
                let len = 1

                while (set.has(current + 1)) {
                    current += 1
                    len += 1
                }

                max = Math.max(max, len)
            }
        })

        return max
    }
}
