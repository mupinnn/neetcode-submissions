func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	isValidAnagram := true
	sCharCountMap := make(map[rune]int)
	tCharCountMap := make(map[rune]int)

	for _, sV := range s {
		sCharCountMap[sV]++
	}

	for _, tV := range t {
		tCharCountMap[tV]++
	}

	for k := range sCharCountMap {
		if _, ok := tCharCountMap[k]; !ok {
			isValidAnagram = false
		}

		if tCharCountMap[k] != sCharCountMap[k] {
			isValidAnagram = false
		}
	}

	return isValidAnagram
}
