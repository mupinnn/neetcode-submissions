class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = [];
        const validMap = {}

        for (let i = 0; i < strs.length; i++) {
            const sortedI = strs[i].split('').sort().join('')
            let currentGroup = []

            if (validMap.hasOwnProperty(sortedI)) continue;

            validMap[sortedI] = true
            for (let j = i; j < strs.length; j++) {
                const sortedJ = strs[j].split('').sort().join('')
                if (sortedI === sortedJ && validMap.hasOwnProperty(sortedJ)) {
                    currentGroup.push(strs[j])
                }
            }

            group.push(currentGroup)
            currentGroup = [];
        }

        return group;
    }
}
