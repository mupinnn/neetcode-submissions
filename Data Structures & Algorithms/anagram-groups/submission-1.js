class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        
        for (let i = 0; i < strs.length; i++) {
            const chars = Array(26).fill().map(() => 0);
            for (let j = 0; j < strs[i].length; j++) {
                chars[strs[i][j].charCodeAt() - "a".charCodeAt()] += 1
            }
            map[chars] = (map[chars] ?? []).concat(strs[i])
        }

        return Object.values(map)
    }
}
