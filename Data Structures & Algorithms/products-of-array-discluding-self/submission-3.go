func productExceptSelf(nums []int) []int {
	n := len(nums)
	prefixProducts := make([]int, n)
	suffixProducts := make([]int, n)
	res := make([]int, n)

	prefixProducts[0] = 1
	for i := 1; i < n; i++ {
		prefixProducts[i] = nums[i-1] * prefixProducts[i-1]
	}

	suffixProducts[n-1] = 1
	for j := n - 2; j >= 0; j-- {
		suffixProducts[j] = nums[j+1] * suffixProducts[j+1]
	}

	for i := 0; i < n; i++ {
		res[i] = prefixProducts[i] * suffixProducts[i]
	}

	return res
}
