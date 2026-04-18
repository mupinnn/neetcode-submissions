class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const n = nums.length;
        const buckets = [];
        const res = [];

        for (let i = 0; i < n; i++) {
            // const placement = Math.floor(nums[i] * n)
            // const placement = Math.abs(Math.floor(nums[i] * 1000 / (Math.max(...nums) + 1)) )
            // const placement = Math.floor(nums[i] * n)
            // const placement = Math.floor((1000 -(-1000) + 1) * nums[i] / Math.max(...nums) + 1)
            const placement = Math.abs(Math.floor((1000 -(-1000) + 1) * nums[i] / Math.max(...nums) + 1))
            console.log({ placement, n, ni: nums[i] })
            buckets[placement] = (buckets[placement] ?? []).concat(nums[i])
        }

        buckets.sort((a, b) => {
            if (a.length > b.length) {
                return 1
            }

            if (a.length < b.length) {
                return -1;
            }

            return 0
        })

        for (let i = buckets.length; i >= 0; i--) {
            if (buckets[i]?.length !== undefined) {
                res.push(buckets[i][0])
            }

            if (res.length === k) break;
        }

        // for (let i = 0; i < buckets.length; i++) {
        //     console.log("buckets: ", buckets[i])
        // }

        // console.log(buckets[-3])
        console.log({ buckets, n, res })
        return res
    }
}
