class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""

        if (strs.length === 0) return "*"

        for (let i = 0; i < strs.length; i++) {
            for (let j = 0; j < strs[i].length; j++) {
                encoded += `${strs[i][j].charCodeAt(0)}`
                if (j < strs[i].length - 1) encoded += '-'
            }
            if (i < strs.length - 1) encoded += "#"
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = str.split("#").map(s => s.split('-'))
        const decoded = []

        if (str === "*") return []

        for (let i = 0; i < strs.length; i++) {
            decoded.push('')
            for (let j = 0; j < strs[i].length; j++) {
                decoded[i] += strs[i][j].length === 0 ? strs[i][j] : String.fromCharCode(strs[i][j])
            }
        }

        return decoded
    }
}
