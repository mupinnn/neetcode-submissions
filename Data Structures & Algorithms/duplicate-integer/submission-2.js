class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // let duplicate = false;
        // for (let i = 0; i < nums.length; i++) {
        //     if (i === nums.length - 1) break;
        //     if (nums[i] === nums[i + 1]) {
        //         duplicate = true;
        //     }
        // }
        // return duplicate;
        // let dupeMap = new Map();
        // for (let i = 0; i < nums.length; i++) {
        //     dupeMap.set(nums[i], false);
        // }
        let duplicate = false;
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) duplicate = true;
            }
        }
        return duplicate;
    }
}
