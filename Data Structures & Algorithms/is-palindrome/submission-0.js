class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphaNum = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        let valid  = true

        for (let i = 0; i < alphaNum.length; i++) {
            if (alphaNum[i] === alphaNum[alphaNum.length - 1 - i]) {
                valid = true
            } else {
                valid = false
                break
            }
        }

        return valid
    }
}
