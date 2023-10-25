::: details 映射（maps）是Go中的内置[关联数据类型](https://en.wikipedia.org/wiki/Associative_array)（在其他语言中有时称为哈希或字典）。
Maps are Go’s built-in [associative data type](https://en.wikipedia.org/wiki/Associative_array) (sometimes called hashes or dicts in other languages).


::: details 要创建一个空映射，可以使用内置的`make`函数：`make(map[key-type]val-type)`。
To create an empty map, use the builtin `make`: `make(map[key-type]val-type)`.
:::
```go
package main

func main() {
	m := make(map[string]int)
}
```

::: details 使用常规的`name[key] = val`语法设置键值对。
Set key/value pairs using typical `name[key] = val` syntax.
:::
```go
package main

func main() {
	m := make(map[string]int)
	m["k1"] = 7 // [!code focus:2]
	m["k2"] = 13
  fmt.Println("map:", m)
}

```

::: details 使用`fmt.Println`等将映射打印出来会显示所有的键值对。
Printing a map with e.g. `fmt.Println` will show all of its key/value pairs.
:::
```go
package main

func main() {
	m := make(map[string]int)
	m["k1"] = 7
	m["k2"] = 13
  fmt.Println("map:", m)  // [!code focus]
	// map: map[k1:7 k2:13]
}

```

::: details 使用`name[key]`获取键对应的值。
Get a value for a key with `name[key]`.
:::
```go
package main

import "fmt"

func main() {

	// ... 省略重复代码

	v1 := m["k1"]
	fmt.Println("v1:", v1)
	// v1: 7
}
```

::: details 如果键不存在，则会返回值类型的[零值](https://go.dev/ref/spec#The_zero_value)。
If the key doesn’t exist, the [zero value](https://go.dev/ref/spec#The_zero_value) of the value type is returned.
:::
```go
package main

import "fmt"

func main() {

	// ... 省略重复代码

	v3 := m["k3"]
	fmt.Println("v3:", v3)
	// v3: 0
}
```

::: details 调用内置的`len`函数可以返回映射中键值对的数量。
The builtin `len` returns the number of key/value pairs when called on a map.
:::
```go
package main

import "fmt"

func main() {

	// ... 省略重复代码

	fmt.Println("len:", len(m))
	// len: 2
}
```

::: details 使用内置的`delete`函数可以从映射中删除键值对。
The builtin `delete` removes key/value pairs from a map.
:::
```go
package main

import "fmt"

func main() {

	// ... 省略重复代码

	delete(m, "k2")
	fmt.Println("map:", m)
	// map: map[k1:7]
}
```

::: details 要从映射中删除所有的键值对，使用内置的`clear`函数。
To remove all key/value pairs from a map, use the `clear` builtin.
:::
```go
package main

import "fmt"

func main() {

	// ... 省略重复代码

	clear(m)
	fmt.Println("map:", m)
	// map: map[]
}
```

::: details 从映射中获取值时，可选的第二个返回值表示键是否存在于映射中。这可以用于区分缺失的键和具有零值（如0或""）的键。在这里，我们不需要值本身，所以使用空白标识符_将其忽略掉。
The optional second return value when getting a value from a map indicates if the key was present in the map. This can be used to disambiguate between missing keys and keys with zero values like 0 or "". Here we didn’t need the value itself, so we ignored it with the blank identifier _.
:::
```go
package main

import "fmt"

func main() {

	// ... 省略重复代码

	_, prs := m["k2"]
	fmt.Println("prs:", prs)
	// prs: false
}
```

::: details 还可以使用以下语法在同一行中声明和初始化新的映射。
You can also declare and initialize a new map in the same line with this syntax.
:::

```go
package main

import "fmt"

func main() {

	// ... 省略重复代码

	n := map[string]int{"foo": 1, "bar": 2}
	fmt.Println("map:", n)
	// map: map[bar:2 foo:1]
}
```

::: details `maps`包中包含了一些对映射非常有用的实用函数。
The `maps` package contains a number of useful utility functions for `maps`.
:::

```go
package main

import "fmt"

func main() {

	// ... 省略重复代码

	
	n := map[string]int{"foo": 1, "bar": 2}
	fmt.Println("map:", n)
	// map: map[bar:2 foo:1]
  
	n2 := map[string]int{"foo": 1, "bar": 2}
	if maps.Equal(n, n2) {
		fmt.Println("n == n2")
		// n == n2
	}
}
```

::: details 请注意，使用`fmt.Println`打印映射时，它的形式是`map[k:v k:v]`。
Note that maps appear in the form `map[k:v k:v]` when printed with `fmt.Println`.
:::

### 运行

```go
package main

import (
	"fmt"
	"maps"
)

func main() {
	m := make(map[string]int)
	m["k1"] = 7
	m["k2"] = 13
	fmt.Println("map:", m)

	v1 := m["k1"]
	fmt.Println("v1:", v1)
	v3 := m["key3"]
	fmt.Println("v3:", v3)

	fmt.Println("len:", len(m))

	delete(m, "k2")
	fmt.Println("map:", m)

	clear(m)
	fmt.Println("map:", m)

	_, prs := m["k2"]
	fmt.Println("prs:", prs)

	n := map[string]int{"foo": 1, "bar": 2}
	fmt.Println("map:", n)

	n2 := map[string]int{"foo": 1, "bar": 2}
	if maps.Equal(n, n2) {
		fmt.Println("n == n2")
	}
}
```

```bash
go run 10-maps.go

# map: map[k1:7 k2:13]
# v1: 7
# v3: 0
# len: 2
# map: map[k1:7]
# map: map[]
# prs: false
# map: map[bar:2 foo:1]
# n == n2
```