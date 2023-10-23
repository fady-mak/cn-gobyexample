
::: details 在Go语言中，数组是一个具有特定长度的元素编号序列。在典型的Go代码中，切片（[slice](/docs/09-slices)）更常见；数组在某些特殊场景下很有用。
In Go, an array is a numbered sequence of elements of a specific length. In typical Go code, [slice](/docs/09-slices) are much more common; arrays are useful in some special scenarios.
:::

::: details 下面我们创建一个能够存储5个`int`类型元素的数组a。元素的类型和长度都是数组类型的一部分。默认情况下，数组的值为零值，对于`int`类型来说就是`0`。
Here we create an array a that will hold exactly 5 ints. The type of elements and length are both part of the array’s type. By default an array is zero-valued, which for ints means 0s.
:::
```go
package main

import "fmt"

func main() {
	var a [5]int
	fmt.Println("emp:", a)
	// emp: [0 0 0 0 0]
}

```
::: details 我们可以使用数组`[index] = value`的语法在特定索引位置设置值，并使用`array[index]`来获取值。
We can set a value at an index using the array`[index] = value` syntax, and get a value with `array[index]`.
:::
```go
package main

import "fmt"

func main() {
	var a [5]int
	fmt.Println("emp:", a)
	// emp: [0 0 0 0 0]
	a[4] = 100  // [!code focus:5]
	fmt.Println("set:", a)
	// set: [0 0 0 0 100]
	fmt.Println("get:", a[4])
	// get: 100
}
```
::: details 内置函数`len`返回数组的长度。
The builtin `len` returns the length of an array.
:::
```go
package main

import "fmt"

func main() {
	var a [5]int
	fmt.Println("emp:", a)
	// emp: [0 0 0 0 0]
	a[4] = 100
	fmt.Println("set:", a)
	// set: [0 0 0 0 100]
	fmt.Println("get:", a[4])
	// get: 100

	fmt.Println("len:", len(a)) // [!code focus:2]
	// len: 5
}
```
::: details 可以使用这种语法在一行中声明和初始化一个数组。
Use this syntax to declare and initialize an array in one line.
:::
```go
package main

import "fmt"

func main() {
	b := [5]int{1, 2, 3, 4, 5}
	fmt.Println("dcl:", b)
	// dcl: [1 2 3 4 5]
}
```
::: details 数组类型是一维的，但是你可以组合类型来构建多维数据结构。
Array types are one-dimensional, but you can compose types to build multi-dimensional data structures.
:::
```go
package main

import "fmt"

func main() {
	var towD [2][3]int
	for i := 0; i < 2; i++ {
		for j := 0; j < 3; j++ {
			towD[i][j] = i + j
		}
	}
	fmt.Println("2d: ", towD)
	// 2d:  [[0 1 2] [1 2 3]]
}
```
::: details 注意，使用`fmt.Println`打印数组时，数组会以`[v1 v2 v3 ...]`的形式显示。
Note that arrays appear in the form `[v1 v2 v3 ...]` when printed with `fmt.Println`.
:::



### 运行

```go
package main

import "fmt"

func main() {

  var a [5]int
  fmt.Println("emp:", a)

  a[4] = 100
  fmt.Println("set:", a)
  fmt.Println("get:", a[4])

  fmt.Println("len:", len(a))

  b := [5]int{1, 2, 3, 4, 5}
  fmt.Println("dcl:", b)

  var twoD [2][3]int
  for i := 0; i < 2; i++ {
      for j := 0; j < 3; j++ {
          twoD[i][j] = i + j
      }
  }
  fmt.Println("2d: ", twoD)
}
```

```bash
go run 08-arrays.go
# emp: [0 0 0 0 0]
# set: [0 0 0 0 100]
# get: 100
# len: 5
# dcl: [1 2 3 4 5]
# 2d:  [[0 1 2] [1 2 3]]
```
