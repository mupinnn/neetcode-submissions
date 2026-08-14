func twoSum(nums []int, target int) []int {
	res := make([]int, 2)

    for vi, i := range nums {
		for vj, j := range nums {
			if vi != vj && i + j == target {
				if vi > vj {
					res[0] = vj
					res[1] = vi
				} else {
					res[0] = vi
					res[1] = vj
				}
			}
		}
	}

	return res
}
