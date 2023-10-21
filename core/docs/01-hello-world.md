::: details 我们的第一个程序将打印经典的“hello world”信息。以下是完整的源代码。
Our first program will print the classic “hello world” message. Here’s the full source code.
:::

```go
package main

import "fmt"

func main() {
	fmt.Println("hello world")
}
```
::: details 要运行程序，请将代码放在hello-world.go中并使用go run命令。
To run the program, put the code in hello-world.go and use go run.
:::

```bash
go run hello-world.go
```

::: details 有时我们希望将程序构建为二进制文件。我们可以使用go build命令来实现。
Sometimes we’ll want to build our programs into binaries. We can do this using go build.
:::

```bash
go build hello-world.go
ls
# hello-world    hello-world.go
```

::: details 然后，我们可以直接执行构建好的二进制文件。
We can then execute the built binary directly.
:::

::: details 现在，我们已经学会了如何运行和构建基本的Go程序，让我们更深入地了解这门语言。
Now that we can run and build basic Go programs, let’s learn more about the language.
:::

