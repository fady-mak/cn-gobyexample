

::: details 切片（slices）是Go中的一种重要的数据类型，相比数组，它们为序列提供了更强大的接口。
Slices are an important data type in Go, giving a more powerful interface to sequences than arrays.
:::

::: details 与数组不同，切片的类型仅由其包含的元素确定（而不是元素的数量）。未初始化的切片等于nil且长度为0。
Unlike arrays, slices are typed only by the elements they contain (not the number of elements). An uninitialized slice equals to nil and has length 0.
:::
```go
package main

import "fmt"

func main() {
	var s []string
	fmt.Println("uninit:", s, s == nil, len(s) == 0)
	// uninit: [] true true
}
```

::: details 要创建一个长度非零的空切片，可以使用内置的make函数。在这里，我们创建了一个长度为3的字符串切片（初始值为零）。默认情况下，新切片的容量等于其长度；如果我们提前知道切片将增长，可以将容量作为额外的参数显式传递给make函数。
To create an empty slice with non-zero length, use the builtin make. Here we make a slice of strings of length 3 (initially zero-valued). By default a new slice’s capacity is equal to its length; if we know the slice is going to grow ahead of time, it’s possible to pass a capacity explicitly as an additional parameter to make.
:::
```go
package main

import "fmt"

func main() {
	// ... 省略重复代码
	s = make([]string, 3) 
	fmt.Println("emp:", s, "len:", len(s), "cap:", cap(s))
	// emp: [  ] len: 3 cap: 3
}
```

::: details 我们可以像操作数组一样设置和获取切片中的元素。
We can set and get just like with arrays.
:::
```go
package main

import "fmt"

func main() {
	// ... 省略重复代码
	s[0] = "a" 
	s[1] = "b"
	s[2] = "c"
	fmt.Println("set:", s)
	// set: [a b c]
	fmt.Println("get:", s[2])
	// get: c
}
```

::: details `len`函数按预期返回切片的长度。
`len` returns the length of the slice as expected.
:::
```go
package main

import "fmt"

func main() {
	
	// ... 省略重复代码
	fmt.Println("len:", len(s)) 
	// 3
}
```

::: details 除了这些基本操作外，切片还支持几种更多的操作，使它们比数组更丰富。其中之一是内置的`append`函数，它返回一个包含一个或多个新值的切片。注意，我们需要接收`append`的返回值，因为我们可能会得到一个新的切片值。
In addition to these basic operations, slices support several more that make them richer than arrays. One is the builtin `append`, which returns a slice containing one or more new values. Note that we need to accept a return value from `append` as we may get a new slice value.
:::
```go
package main

import "fmt"

func main() {
	// ... 省略重复代码

	s = append(s, "d")
	s = append(s, "e", "f")
	fmt.Println("apd:", s)
	// apd: [a b c d e f]
}
```

::: details 切片也可以复制。在这里，我们创建了一个与切片`s`长度相同的空切片`c`，并将`s`复制到`c`中。
Slices can also be copy’d. Here we create an empty slice `c` of the same length as `s` and copy into `c` from `s`.
:::
```go
package main

import "fmt"

func main() {
	// ... 省略重复代码
	c := make([]string, len(s))
	copy(c, s)
	fmt.Println("cpy:", c)
	// cpy: [a b c d e f]
}

```

::: details 切片支持“切片”操作，语法为`slice[low:high]`。例如，这会得到元素`s[2]`、`s[3]`和`s[4]`的切片。
Slices support a “slice” operator with the syntax `slice[low:high]`. For example, this gets a slice of the elements `s[2]`, `s[3]`, and `s[4]`.
:::
```go
package main

import "fmt"

func main() {
	// ... 省略重复代码

	l := s[2:5]
	fmt.Println("sl1:", l)
	// sl1: [c d e]
}
```

::: details 这个切片到（但不包括）`s[5]`。
This slices up to (but excluding) `s[5]`.
:::

```go
package main

import "fmt"

func main() {
	// ... 省略重复代码

	l = s[:5]
	fmt.Println("sl2:", l)
	// sl2: [a b c d e]
}
```

::: details 这个切片从（包括）`s[2]`开始。
And this slices up from (and including) `s[2]`.
:::

```go
package main

import "fmt"

func main() {
	// ... 省略重复代码

	l = s[2:]
	fmt.Println("sl3:", l)
	// sl2: [c d e f]
}
```

::: details 我们还可以在一行中声明和初始化切片变量。
We can declare and initialize a variable for slice in a single line as well.
:::

```go
package main

import "fmt"

func main() {
	// ... 省略重复代码

	t := []string{"g", "h", "i"}
	fmt.Println("dcl:", t)
	// dcl: [g h i]
}
```

::: details `slices`包中包含了一些对切片非常有用的实用函数。
The `slices` package contains a number of useful utility functions for slices.
:::

```go
package main

import "fmt"

func main() {
	// ... 省略重复代码
	
	t2 := []string{"g", "h", "i"}
	if slices.Equal(t, t2) {
		fmt.Println("t == t2")
    // t == t2
	}
}
```

::: details 切片可以组成多维数据结构。内部切片的长度可以变化，与多维数组不同。
Slices can be composed into multi-dimensional data structures. The length of the inner slices can vary, unlike with multi-dimensional arrays.
:::
```go
package main

import "fmt"

func main() {
	// ... 省略重复代码
	
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
```

::: details 请注意，虽然切片与数组是不同的类型，但它们在fmt.Println中的输出形式类似。
Note that while slices are different types than arrays, they are rendered similarly by fmt.Println.
:::


::: details 查看Go团队的这篇[博客文章](https://go.dev/blog/slices-intro)，了解有关Go中切片的设计和实现的更多细节。
Check out this [great blog post](https://go.dev/blog/slices-intro) by the Go team for more details on the design and implementation of slices in Go.
:::

::: details 现在我们已经了解了数组和切片，让我们来看看Go的另一个重要的内置数据结构：映射（maps）。
Now that we’ve seen arrays and slices we’ll look at Go’s other key builtin data structure: maps.
:::

### 运行

```go
package main

import (
	"fmt"
	"slices"
)

func main() {
	var s []string
	fmt.Println("uninit:", s, s == nil, len(s) == 0)

	s = make([]string, 3)
	fmt.Println("emp:", s, "len:", len(s), "cap:", cap(s))

	s[0] = "a"
	s[1] = "b"
	s[2] = "c"
	fmt.Println("set:", s)
	fmt.Println("get:", s[2])

	fmt.Println("len:", len(s))

	s = append(s, "d")
	s = append(s, "e", "f")
	fmt.Println("apd:", s)
	c := make([]string, len(s))
	copy(c, s)
	fmt.Println("cpy:", c)

	l := s[2:5]
	fmt.Println("sl1:", l)

	l = s[:5]
	fmt.Println("sl2:", l)

	l = s[2:]
	fmt.Println("sl3:", l)

	t := []string{"g", "h", "i"}
	fmt.Println("dcl:", t)

	t2 := []string{"g", "h", "i"}
	if slices.Equal(t, t2) {
		fmt.Println("t == t2")
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
}

```

```bash
go run 09-slices.go
# uninit: [] true true
# emp: [  ] len: 3 cap: 3
# set: [a b c]
# get: c
# len: 3
# apd: [a b c d e f]
# cpy: [a b c d e f]
# sl1: [c d e]
# sl2: [a b c d e]
# sl3: [c d e f]
# dcl: [g h i]
# t == t2
# 2d: [[0] [1 2] [2 3 4]]
```
