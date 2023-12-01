::: details `Go`语言内置了对多返回值的支持。这个特性在`Go`的习惯用法中经常被使用，例如从函数中返回结果和错误值。
`Go` has built-in support for multiple return values. This feature is used often in idiomatic `Go`, for example to return both result and error values from a function.
:::

::: details 在这个函数签名中的`(int, int)`表示该函数返回 2 个 `int` 类型的值。
The `(int, int)` in this function signature shows that the function returns 2 `ints`.
:::

```go
package main

import "fmt"

func vals() (int, int) {
    return 3, 7
}
```

::: details 在下面的示例中，我们使用了多重赋值来获取函数调用的两个不同返回值。
Here we use the 2 different return values from the call with multiple assignment.
:::

```go
package main

import "fmt"

func vals() (int, int) {
    return 3, 7
}

func main() {
    a, b := vals()
    fmt.Println(a)
    fmt.Println(b)
}
```

::: details 如果你只想要返回值中的某个子集，可以使用下划线 `_` 作为空白标识符。
If you only want a subset of the returned values, use the blank identifier `_`.
:::

```go
package main

import "fmt"

func vals() (int, int) {
    return 3, 7
}

func main() {

    a, b := vals()
    fmt.Println(a)
    fmt.Println(b)

    _, c := vals()  // [!code focus:2]
    fmt.Println(c)
}
```

::: details 接受可变数量的参数是`Go`函数的另一个很好的特性；我们将在下一部分看到这个特性。
Accepting a variable number of arguments is another nice feature of `Go` functions; we’ll look at this next.
:::

### 运行

```go
package main

import "fmt"

func vals() (int, int) {
    return 3, 7
}

func main() {

    a, b := vals()
    fmt.Println(a)
    fmt.Println(b)

    _, c := vals()
    fmt.Println(c)
}
```

```bash
go run 13-multiple-return-values.go
# 3
# 7
# 7
```
