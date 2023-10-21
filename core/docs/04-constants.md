::: details Go支持字符、字符串、布尔和数值的常量。
Go supports constants of character, string, boolean, and numeric values.
:::

::: details `const`关键字用于声明常量。
`const` declares a constant value.
:::

```go
package main

import "fmt"

const s string = "constant" // [!code focus]

func main() {
	fmt.Println(s) // [!code focus]
}
```

::: details `const`语句可以出现在任何`var`语句可以出现的地方。
A `const` statement can appear anywhere a `var` statement can.
:::

::: details 常量表达式可以执行具有任意精度的算术运算。
Constant expressions perform arithmetic with arbitrary precision.
:::

```go
package main

import "fmt"

func main() {
	const n = 500000000  // [!code focus]
	const d = 3e20 / n  // [!code focus]
	fmt.Println(d)  // [!code focus]
}
```

::: details 数值常量在没有给定类型之前是没有类型的，例如通过显式转换给定类型。
A numeric constant has no type until it’s given one, such as by an explicit conversion.
:::

```go
package main

import "fmt"

func main() {
	const n = 500000000
	const d = 3e20 / n
	fmt.Println(d)

	fmt.Println(int64(d)) // [!code focus]
}
```

::: details 通过在需要类型的上下文中使用数值，例如变量赋值或函数调用，可以给数字赋予类型。例如，这里的`math.Sin`期望一个`float64`类型的参数。
A number can be given a type by using it in a context that requires one, such as a variable assignment or function call. For example, here math.Sin expects a `float64`.
:::

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	const n = 500000000 // [!code focus]
	fmt.Println(math.Sin(n)) // [!code focus]
}
```

### 运行

```go
package main

import (
	"fmt"
	"math"
)

const s string = "constant"

func main() {
	fmt.Println(s)

	const n = 500000000

	const d = 3e20 / n
	fmt.Println(d)

	fmt.Println(int64(d))

	fmt.Println(math.Sin(n))
}
```

```bash
go run 04-constant.go 
# constant
# 6e+11
# 600000000000
# -0.28470407323754404
```