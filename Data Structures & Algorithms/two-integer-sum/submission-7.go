func twoSum(nums []int, target int) []int {
	check := make(map[int]int)
	res := make([]int, 2)

    for i, v := range nums {
		diff := target - v

		if _, ok := check[diff]; ok {
			res[0] = check[diff]
			res[1] = i
		} else {
			check[v] = i
		}
	}

	fmt.Println(check)

	return res
}
