::: details Go拥有多种值类型，包括字符串、整数、浮点数、布尔值等。以下是一些基本示例：
Go has various value types including strings, integers, floats, booleans, etc. Here are a few basic examples.
:::

```go
package main

import "fmt"

func main() {
	fmt.Println("go" + "lang")

	fmt.Println("1+1 =", 1+1)
	fmt.Println("7.3/3.0 =", 7.3/3.0)

	fmt.Println(true && false)
	fmt.Println(true || false)
	fmt.Println(!true)
}
```


::: details 字符串可以通过 + 连接。
Strings, which can be added together with +.
:::

```go
package main

import "fmt"

func main() {
	fmt.Println("go" + "lang") // [!code focus]
	// golang
	fmt.Println("1+1 =", 1+1)
	fmt.Println("7.3/3.0 =", 7.3/3.0)

	fmt.Println(true && false)
	fmt.Println(true || false)
	fmt.Println(!true)
}
```
::: details 整数和浮点数
Integers and floats.
:::

```go
package main

import "fmt"

func main() {
	fmt.Println("go" + "lang")

	fmt.Println("1+1 =", 1+1) // [!code focus]
	// 1+1 = 2 // [!code focus]
	fmt.Println("7.3/3.0 =", 7.3/3.0) // [!code focus]
	// 7.3/3.0 = 2.433333333333333 // [!code focus]

	fmt.Println(true && false)
	fmt.Println(true || false)
	fmt.Println(!true)
}
```
::: details 布尔值，可以使用布尔运算符进行操作，就像你期望的那样。
Booleans, with boolean operators as you’d expect.
:::

```go
package main

import "fmt"

func main() {
	fmt.Println("go" + "lang")

	fmt.Println("1+1 =", 1+1)
	fmt.Println("7.3/3.0 =", 7.3/3.0)

	fmt.Println(true && false) // [!code focus]
	// false // [!code focus]
	fmt.Println(true || false) // [!code focus]
	// true // [!code focus]
	fmt.Println(!true) // [!code focus]
	// false // [!code focus]
}
```

### 运行
```go
package main

import "fmt"

func main() {

	var a = "initial"
	fmt.Println(a)

	var b, c int = 1, 2
	fmt.Println(b, c)

	var d = true
	fmt.Println(d)

	var e int
	fmt.Println(e)

	f := "apple"
	fmt.Println(f)
}
```
```bash
go run variables.go
# initial
# 1 2
# true
# 0
# apple
```