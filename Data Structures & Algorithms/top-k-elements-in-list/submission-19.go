import (
    "slices"
)

type kv struct {
    Key int
    Value int
}

func topKFrequent(nums []int, k int) []int {
    m := make(map[int]int)
    for _, v := range nums {
        m[v]++
    }

    var sortedPairs []kv
    for k, v := range m {
        sortedPairs = append(sortedPairs, kv{k, v})
    }

    slices.SortFunc(sortedPairs, func (a, b kv) int {
        return b.Value - a.Value
    })

    var res []int
    for _, pair := range sortedPairs {
        if len(res) == k {
            break
        }

        res = append(res, pair.Key)
    }

    return res
}
