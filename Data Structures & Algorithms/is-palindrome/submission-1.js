class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphaNum = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        const reversedAlphaNum = alphaNum.split("").reverse().join("")

        return alphaNum === reversedAlphaNum
    }
}
