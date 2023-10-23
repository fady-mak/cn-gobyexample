::: details `switch`语句在许多分支中表达条件。
`Switch` statements express conditionals across many branches.
:::
```go

```
::: details 下面是一个基本的`switch`语句。
Here’s a basic `switch`.
:::
```go
package main

import "fmt"

func main() {
	i := 2
	fmt.Println("Write ", i, " as ")

	switch i {
	case 1:
		fmt.Println("one")
	case 2:
		fmt.Println("two")
	case 3:
		fmt.Println("three")
	}
}
```
::: details 你可以使用逗号在同一个`case`语句中分隔多个表达式。在这个例子中，我们还使用了可选的`default case`。
You can use commas to separate multiple expressions in the same `case` statement. We use the optional `default case` in this example as well.
:::
```go
package main

import (
	"fmt"
	"time"
)

func main() {

	switch time.Now().Weekday() {
	case time.Saturday, time.Sunday:
		fmt.Println("It's the Weekend")
	default:
		fmt.Println("It's the weekday")
	}
}
```

::: details 不带表达式的`switch`语句是表达`if/else`逻辑的另一种方式。在这里，我们还展示了`case`表达式可以是非常量的情况。
`switch` without an expression is an alternate way to express `if/else` logic. Here we also show how the `case` expressions can be non-constants.
:::
```go
package main

import (
	"fmt"
	"time"
)

func main() {

	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("It's before noon")
	default:
		fmt.Println("It's after noon")
	}
}
```

::: details 类型`switch`比较的是类型而不是值。你可以使用它来发现接口值的类型。在这个例子中，变量t的类型将对应于它的子句
A type `switch` compares types instead of values. You can use this to discover the type of an interface value. In this example, the variable t will have the type corresponding to its clause.
:::
```go
package main

import (
	"fmt"
)

func main() {

	whatAmI := func(i interface{}) {
		switch t := i.(type) {
		case bool:
			fmt.Println("I'm a bool")
		case int:
			fmt.Println("I'm an int")
		default:
			fmt.Printf("Dot't know type %T\n", t)
		}
	}
	whatAmI(true)
	whatAmI(1)
	whatAmI("hey")
}
```

### 运行

```go
package main

import (
	"fmt"
	"time"
)

func main() {

	i := 2
	fmt.Print("Write ", i, " as ")
	switch i {
	case 1:
		fmt.Println("one")
	case 2:
		fmt.Println("two")
	case 3:
		fmt.Println("three")
	}

	switch time.Now().Weekday() {
	case time.Saturday, time.Sunday:
		fmt.Println("It's the weekend")
	default:
		fmt.Println("It's a weekday")
	}

	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("It's before noon")
	default:
		fmt.Println("It's after noon")
	}

	whatAmI := func(i interface{}) {
		switch t := i.(type) {
		case bool:
			fmt.Println("I'm a bool")
		case int:
			fmt.Println("I'm an int")
		default:
			fmt.Printf("Don't know type %T\n", t)
		}
	}
	whatAmI(true)
	whatAmI(1)
	whatAmI("hey")
}

```

```bash
go run 07-switch.go 
# Write 2 as two
# It's a weekday
# It's before noon
# I'm a bool
# I'm an int
# Don't know type string
```