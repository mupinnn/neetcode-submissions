func twoSum(nums []int, target int) []int {
	res := make([]int, 2)
	for i, iv := range nums {
		for j, jv := range nums {
			if iv + jv == target && i != j {
				res[0] = j
				res[1] = i
			}
		}
	}
	return res
}
