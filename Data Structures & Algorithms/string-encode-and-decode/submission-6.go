type Solution struct{}

func (s *Solution) Encode(strs []string) string {
    encoded := ""

    if len(strs) == 0 {
        return "*"
    }

    for i, str := range strs {
        for j, s := range str {
            encoded += strconv.Itoa(int(s))
            if j < len(str) - 1 {
                encoded += "-"
            }
        }

        if i < len(strs) - 1 {
            encoded += "#"
        }
    }

    return encoded
}

func (s *Solution) Decode(encoded string) []string {
    var decoded []string

    if encoded == "*" {
        return []string{}
    }

    splitted := strings.Split(encoded, "#")
    for _, str := range splitted {
        d := ""

        if str == d {
            decoded = append(decoded, d)
            continue
        }

        for _, s := range strings.Split(str, "-") {
            i, _ := strconv.Atoi(s)
            d += string(i)
        }

        decoded = append(decoded, d)
    }

    return decoded
}
