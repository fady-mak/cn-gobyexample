::: details 在Go中，使用`if`和`else`进行分支判断非常直观。
Branching with `if` and `else` in Go is straight-forward.
:::

::: details 下面是一个基本的例子。
Here’s a basic example.
:::
```go
package main

import "fmt"

func main() {
	if 7%2 == 0 {
		fmt.Println("7 is even")
	} else {
		fmt.Println("7 is not even")
	}
}

```
::: details 你可以使用没有`else`的`if`语句。
You can have an `if` statement without an `else`.
:::
```go
package main

import "fmt"

func main() {
	if 8%4 == 0 {
		fmt.Println("8 is divisible by 4")
	}
}
```
::: details 一个语句可以位于条件语句之前；在该语句中声明的任何变量都可以在当前分支和所有后续分支中使用。
A statement can precede conditionals; any variables declared in this statement are available in the current and all subsequent branches.
:::
```go
package main

import "fmt"

func main() {
	if num := 9; num < 0 {
		fmt.Println(num, "is negative")
	} else if num < 10 {
		fmt.Println(num, "has 1 digit")
	} else {
		fmt.Println(num, "has multiple digits")
	}
}
```

::: details 请注意，在Go中，条件语句不需要括号，但是必须有大括号。
Note that you don’t need parentheses around conditions in Go, but that the braces are required.
:::

::: details Go中没有三元`if`语句，所以即使是基本条件，你也需要使用完整的`if`语句。
There is no ternary `if` in Go, so you’ll need to use a full `if` statement even for basic conditions.
:::




### 运行
```go
package main

import "fmt"

func main() {

	if 7%2 == 0 {
		fmt.Println("7 is even")
	} else {
		fmt.Println("7 is odd")
	}

	if 8%4 == 0 {
		fmt.Println("8 is divisible by 4")
	}

	if num := 9; num < 0 {
		fmt.Println(num, "is negative")
	} else if num < 10 {
		fmt.Println(num, "has 1 digit")
	} else {
		fmt.Println(num, "has multiple digits")
	}
}

```

```bash
go run 06-if-else.go 
# 7 is odd
# 8 is divisible by 4
# 9 has 1 digit
```