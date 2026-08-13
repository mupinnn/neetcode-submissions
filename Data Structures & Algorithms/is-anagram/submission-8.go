func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }

    isValidAnagram := true
    charCountS := make(map[rune]int)
    charCountT := make(map[rune]int)

    for _, sv := range s {
        charCountS[sv]++
    }

    for _, tv := range t {
        charCountT[tv]++
    }

    for kMapS := range charCountS {
        if _, ok := charCountT[kMapS]; !ok {
            isValidAnagram = false
            break
        }

        if charCountS[kMapS] != charCountT[kMapS] {
            isValidAnagram = false
        }
    }

    return isValidAnagram
}
