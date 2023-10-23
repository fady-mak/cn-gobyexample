package main

import (
	"fmt"
	"slices"
)

func main() {
	var s []string
	fmt.Println("uninit:", s, s == nil, len(s) == 0)
	// uninit: [] true true

	s = make([]string, 3)
	fmt.Println("emp:", s, "len:", len(s), "cap:", cap(s))
	// emp: [  ] len: 3 cap: 3

	s[0] = "a"
	s[1] = "b"
	s[2] = "c"
	fmt.Println("set:", s)
	// set: [a b c]
	fmt.Println("get:", s[2])
	// get: c

	fmt.Println("len:", len(s))
	// 3

	s = append(s, "d")
	s = append(s, "e", "f")
	fmt.Println("apd:", s)
	// apd: [a b c d e f]
	c := make([]string, len(s))
	copy(c, s)
	fmt.Println("cpy:", c)
	// cpy: [a b c d e f]

	l := s[2:5]
	fmt.Println("sl1:", l)
	// sl1: [c d e]

	l = s[:5]
	fmt.Println("sl2:", l)
	// sl2: [a b c d e]

	l = s[2:]
	fmt.Println("sl3:", l)
	// sl2: [c d e f]

	t := []string{"g", "h", "i"}
	fmt.Println("dcl:", t)
	// dcl: [g h i]

	t2 := []string{"g", "h", "i"}
	if slices.Equal(t, t2) {
		fmt.Println("t == t2")
		// t == t2
	}

	twoD := make([][]int, 3)
	for i := 0; i < 3; i++ {
		innerLen := i + 1
		twoD[i] = make([]int, innerLen)
		for j := 0; j < innerLen; j++ {
			twoD[i][j] = i + j
		}
	}
	fmt.Println("2d:", twoD)
	// 2d: [[0] [1 2] [2 3 4]]
}
