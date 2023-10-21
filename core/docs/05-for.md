::: details `for`循环是Go的唯一循环结构。这里有一些基本类型的`for`循环。
`for` is Go’s only looping construct. Here are some basic types of `for` loops.
:::

::: details 最基本的类型，只有一个条件。
The most basic type, with a single condition.
:::

```go
package main

import "fmt"

func main() {
	i := 1  // [!code focus:5]
	for i <= 3 {
		fmt.Println(i)
		i = i + 1     
	}
}

```


::: details 经典的初始化/条件/后续操作的`for`循环。
A classic initial/condition/after `for` loop.
:::

```go
package main

import "fmt"

func main() {
	for j := 7; j <= 9; j++ { // [!code focus:3]
		fmt.Println(j)
	}
}

```


::: details 如果没有条件，`for`循环将会一直重复执行，直到你跳出循环或从包含该循环的函数中返回。
`for` without a condition will loop repeatedly until you break out of the loop or return from the enclosing function.
:::

```go
package main

import "fmt"

func main() {
	for { // [!code focus:4]
		fmt.Println("loop")
		break              
	}
}

```


::: details 你还可以使用`continue`语句来进入下一次循环迭代。
You can also `continue` to the next iteration of the loop.
:::

```go
package main

import "fmt"

func main() {
	for n := 0; n <= 5; n++ { // [!code focus]
		if n%2 == 0 { // [!code focus]
			continue // [!code focus]
		} // [!code focus]
		fmt.Println(n) // [!code focus]
	} // [!code focus]
}

```


::: details 当我们查看range语句、通道和其他数据结构时，还会看到其他类型的`for`循环形式。
We’ll see some other `for` forms later when we look at range statements, channels, and other data structures.
:::



### 运行
```go
package main

import "fmt"

func main() {

	i := 1
	for i <= 3 {
		fmt.Println(i)
		i = i + 1
	}

	for j := 7; j <= 9; j++ {
		fmt.Println(j)
	}

	for {
		fmt.Println("loop")
		break
	}

	for n := 0; n <= 5; n++ {
		if n%2 == 0 {
			continue
		}
		fmt.Println(n)
	}
}

```

```bash
go run 05-for.go
# 1
# 2
# 3
# 7
# 8
# 9
# loop
# 1
# 3
# 5
```