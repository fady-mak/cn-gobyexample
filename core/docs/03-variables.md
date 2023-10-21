::: details 在Go中，变量需要显式声明，并由编译器用于检查函数调用的类型正确性。
In Go, variables are explicitly declared and used by the compiler to e.g. check type-correctness of function calls.
:::

::: details var关键字用于声明一个或多个变量。
var declares 1 or more variables.
:::

```go
package main

import "fmt"

func main() {
	var a = "initial" // [!code focus]
	fmt.Println(a)    // [!code focus]
}
```
::: details 你可以一次声明多个变量。
You can declare multiple variables at once.
:::

```go
package main

import "fmt"

func main() {
	var b, c int = 1, 2 // [!code focus]
	fmt.Println(b, c)
}
```

::: details Go会根据初始化值推断变量的类型。
Go will infer the type of initialized variables.
:::

```go
package main

import "fmt"

func main() {
	var d = true // [!code focus]
	fmt.Println(d)
}
```

::: details 没有对应初始化值的变量将被赋予零值。例如，`int`类型的零值为`0`。
Variables declared without a corresponding initialization are zero-valued. For example, the zero value for an `int` is `0`.
:::

```go
package main

import "fmt"

func main() {
	var e int // [!code focus]
	fmt.Println(e)
}
```
::: details `:=`语法是声明并初始化变量的简写形式，例如在此例中的 `var f string = "apple"`。此语法只能在函数内部使用。
The `:=` syntax is shorthand for declaring and initializing a variable, e.g. for `var f string = "apple"` in this case. This syntax is only available inside functions.
:::

```go
package main

import "fmt"

func main() {
	f := "apple" // [!code focus]
	fmt.Println(f)
}
```
### 运行

```bash
go run 03-values.go
# golang
# 1+1 = 2
# 7.3/3.0 = 2.433333333333333
# false
# true
# false
```