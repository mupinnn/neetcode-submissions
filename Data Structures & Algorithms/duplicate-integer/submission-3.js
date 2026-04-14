class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // O(n^2)
        // let duplicate = false;
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         if (nums[i] === nums[j]) duplicate = true;
        //     }
        // }
        // return duplicate;

        // O(n)
        const dupeMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (dupeMap.size > 0) {
                if (dupeMap.get(nums[i])) return true;
            }

            dupeMap.set(nums[i], true);
        }
        return false;
    }
}
