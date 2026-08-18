func groupAnagrams(strs []string) [][]string {
	words := "a"
	aCode := int(words[0])
	m := make(map[[26]int][]string)

	for _, str := range strs {
		var t [26]int
		
		for _, s := range str {
			diff := aCode - int(s)
			var absDiff int
			if diff < 0 {
				absDiff = -diff
			} else {
				absDiff = diff
			}
			t[absDiff]++
		}

		m[t] = append(m[t], str)
	}

	var res [][]string
	for _, mv := range m {
		res = append(res, mv)
	}

	return res
}
