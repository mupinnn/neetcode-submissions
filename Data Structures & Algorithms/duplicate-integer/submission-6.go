func hasDuplicate(nums []int) bool {
    // make function return a map of the given type, initialized, and ready to use
    m := make(map[int]int)

    // range for of the `for` loop to iterate thru slices or map
    // returning index and the copy of element at that index
    for _, val := range nums {
        // if key is not in the map, m[val] is the zero value for the map's element type automatically
        // in this case, 0 (int)
        m[val]++

        if m[val] > 1 {
            return true
        }
    }

    return false
}
