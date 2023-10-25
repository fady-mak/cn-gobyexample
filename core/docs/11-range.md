:::details `range`可以迭代各种数据结构中的元素。让我们看看如何在一些我们已经学过的数据结构中使用`range`。
`range` iterates over elements in a variety of data structures. Let’s see how to use `range` with some of the data structures we’ve already learned.
:::

:::details 在这里，我们使用`range`来对切片中的数字进行求和。数组的工作原理也是如此。
Here we use `range` to sum the numbers in a slice. Arrays work like this too.
:::
```go
package main

import "fmt"

func main() {
	nums := []int{2, 3, 4}
	sum := 0
	for _, num := range nums {
		sum += num
	}
	fmt.Println("sum:", sum)
	// sum: 9
}
```

:::details 对于数组和切片，`range`提供了每个条目的索引和值。在上面的例子中，我们不需要索引，所以用空白标识符_来忽略它。但有时我们确实需要索引。
`range` on arrays and slices provides both the index and value for each entry. Above we didn’t need the index, so we ignored it with the blank identifier _. Sometimes we actually want the indexes though.
:::
```go
package main

import "fmt"

func main() {
	nums := []int{2, 3, 4}
	
  // 省略重复代码...

	for i, num := range nums { // [!code focus:5]
		if num == 3 {
			fmt.Println("index:", i)
			//	index: 1
		}
	}
}
```

:::details 对于映射，`range`会迭代键/值对。
`range` on map iterates over key/value pairs.
:::
```go
package main

import "fmt"

func main() {

	kvs := map[string]string{"a": "apple", "b": "banana"}
	for k, v := range kvs {
		fmt.Printf("%s => %s\n", k, v)
	}
	// a => apple
	// b => banana
}
```

:::details `range`还可以迭代映射的键。
`range` can also iterate over just the keys of a map.
:::
```go
package main

import "fmt"

func main() {

	kvs := map[string]string{"a": "apple", "b": "banana"}
	for k, v := range kvs {
		fmt.Printf("%s => %s\n", k, v)
	}
	// a => apple
	// b => banana

	for k := range kvs { // [!code focus:5]
		fmt.Println("key:", k)
	}
	// key: a
	// key: b

}
```

:::details 对于字符串，`range`会迭代`Unicode码点`。第一个值是`rune`的起始字节索引，第二个值是`rune`本身。有关详细信息，请参阅[字符串和rune](/docs/18-strings-and-runes)。
`range` on strings iterates over `Unicode code` points. The first value is the starting byte index of the `rune` and the second the `rune` itself. See [Strings and Runes](/docs/18-strings-and-runes) for more details.
:::
```go
package main

import "fmt"

func main() {
	for i, c := range "go" {
		fmt.Println(i, c)
	}
	// 0 103
	// 1 111
}
```

### 运行

```go
package main

import "fmt"

func main() {
	nums := []int{2, 3, 4}
	sum := 0
	for _, num := range nums {
		sum += num
	}
	fmt.Println("sum:", sum)

	for i, num := range nums {
		if num == 3 {
			fmt.Println("index:", i)
		}
	}

	kvs := map[string]string{"a": "apple", "b": "banana"}
	for k, v := range kvs {
		fmt.Printf("%s => %s\n", k, v)
	}

	for k := range kvs {
		fmt.Println("key:", k)
	}

	for i, c := range "go" {
		fmt.Println(i, c)
	}
}
```

```bash
go run 11-range.go
# sum: 9
# index: 1
# a => apple
# b => banana
# key: a
# key: b
# 0 103
# 1 111
```