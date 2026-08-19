class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const m = {}
        nums.forEach(n => {
            m[n] = (m[n] ?? 0) + 1
        })

        const sortedPairs = []
        for (const k in m) {
            sortedPairs.push({ k, v: m[k] })
        }

        sortedPairs.sort((a, b) => {
            return b.v - a.v
        })

        const res = []
        for (let i = 0; i < sortedPairs.length; i++) {
            if (res.length === k) break;
            res.push(sortedPairs[i].k)
        }

        return res
    }
}
