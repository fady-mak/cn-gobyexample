:::details 函数在 `Go` 中是至关重要的。我们将通过几个不同的例子学习有关函数的知识。
Functions are central in `Go`. We’ll learn about functions with a few different examples.
:::

:::details 下面是一个函数，它接受两个 `int` 类型的参数并将它们的和作为 `int` 类型的返回值。
Here’s a function that takes two `ints` and returns their sum as an `int`.
:::

:::details 在 `Go` 中，需要显式声明返回值类型，即它不会自动返回最后一个表达式的值。
`Go` requires explicit returns, i.e. it won’t automatically return the value of the last expression.
:::

```go
package main

import "fmt"

func plus(a int, b int) int {

  return a + b
}
```

:::details 当有多个相同类型的连续参数时，你可以省略类似类型的参数的类型名称，直到声明类型的最后一个参数。
When you have multiple consecutive parameters of the same type, you may omit the type name for the like-typed parameters up to the final parameter that declares the type.
:::

```go
package main

import "fmt"

func plusPlus(a, b, c int) int {
    return a + b + c
}
```

:::details 调用函数就像你期望的那样，使用`name(args)`的形式。
Call a function just as you’d expect, with name(args).
:::

```go
package main

import "fmt"

func plus(a int, b int) int {

    return a + b
}

func plusPlus(a, b, c int) int {
    return a + b + c
}

func main() {

    res := plus(1, 2)
    fmt.Println("1+2 =", res)

    res = plusPlus(1, 2, 3)
    fmt.Println("1+2+3 =", res)
}
```

:::details `Go` 语言中的函数还有其他一些特性。其中之一是多返回值，我们将在下一部分看到。
There are several other features to `Go` functions. One is multiple return values, which we’ll look at next.
:::

### 运行

```go
package main

import "fmt"

func plus(a int, b int) int {

    return a + b
}

func plusPlus(a, b, c int) int {
    return a + b + c
}

func main() {

    res := plus(1, 2)
    fmt.Println("1+2 =", res)

    res = plusPlus(1, 2, 3)
    fmt.Println("1+2+3 =", res)
}
```

```bash
go run 12-functions.go
1+2 = 3
1+2+3 = 6
```
