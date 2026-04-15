class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // O(n)
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            console.log({ diff, current: nums[i], i, map })
            if (map.hasOwnProperty(nums[i])) {
                if (diff + nums[i] === target) {
                    const firstIndex = nums.findIndex(el => el === diff);
                    const lastIndex = nums.findIndex(el => el === nums[i]);

                    return [firstIndex, lastIndex > i ? lastIndex : i]
                }
            } else {
                map[diff] = i;
            }
        }
    }
}
