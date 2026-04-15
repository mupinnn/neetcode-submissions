class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charOnlyS = s.replace(/[^a-zA-Z0-9]/g, '')
        const charOnlyT = t.replace(/[^a-zA-Z0-9]/g, '')

        if (charOnlyS.length !== charOnlyT.length) return false;

        let isValidAnagram = false;
        let charCountS = {}
        let charCountT = {}

        for (let i = 0; i < charOnlyS.length; i++) {
            charCountS[charOnlyS[i]] = (charCountS[charOnlyS[i]] ?? 0) + 1; 
        }

        for (let i = 0; i < charOnlyT.length; i++) {
            charCountT[charOnlyT[i]] = (charCountT[charOnlyT[i]] ?? 0) + 1;
        }

        for (const key in charCountS) {
            if (!charCountT.hasOwnProperty(key)) {
                isValidAnagram = false;
                break;
            }

            if (charCountS[key] === charCountT[key]) isValidAnagram = true;
        }

        return isValidAnagram;
    }
}
