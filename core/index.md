---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  image: '/go.svg'
  name: 'Go by Example For CN'
  tagline: 'Go by Example 是对 Go 基于实践的介绍，包含一系列带有注释说明的示例程序'
  actions:
    - theme: brand
      text: Get Started
      link: /introduction
    - theme: alt
      text: View Site Source
      link: https://github.com/fady-mak/cn-gobyexample

features:
  - title: 01. Hello World
    details:
    link: '/docs/01-hello-world.md'

  - title: 02. Values
    details: 值
    link: '/docs/02-values.md'

  - title: 03. Variables
    details: 变量
    link: '/docs/03-variables.md'

  - title: 04. Constants
    details: 常量
    link: '/docs/04-constants.md'

  - title: 05. For
    details: 循环
    link: '/docs/05-for.md'

  - title: 06. If/Else
    details: If/Else语句
    link: '/docs/06-if-else.md'

  - title: 07. Switch
    details: Switch语句
    link: '/docs/07-switch.md'

  - title: 08. Arrays
    details: 数组
    link: '/docs/08-arrays.md'

  - title: 09. Slices
    details: 切片
    link: '/docs/09-slices.md'

  - title: 10. Maps
    details: 映射
    link: '/docs/10-maps.md'

  - title: 11. Range
    details: 范围
    link: '/docs/11-range.md'

  - title: 12. Functions
    details: 函数
    link: '/docs/12-functions.md'

  - title: 13. Multiple Return Values
    details: 多返回值
    link: '/docs/13-multiple-return-values'

  - title: 14. Variadic Functions
    details: 可变参数函数
    # link: '/docs/14-variadic-functions.md'

  - title: 15. Closures
    details: 闭包
    # link: '/docs/15-closures.md'

  - title: 16. Recursion
    details: 递归
    # link: '/docs/16-recursion.md'

  - title: 17. Pointers
    details: 指针
    # link: '/docs/17-pointers.md'

  - title: 18. Strings and Runes
    details: 字符串和符文
    # link: '/docs/18-strings-and-runes.md'

  - title: 19. Structs
    details: 结构体
    # link: '/docs/19-structs.md'

  - title: 20. Methods
    details: 方法
    # link: '/docs/20-methods.md'

  - title: 21. Interfaces
    details: 接口
    # link: '/docs/21-interfaces.md'

  - title: 22. Struct Embedding
    details: 结构体嵌套
    # link: '/docs/22-struct-embedding.md'

  - title: 23. Generics
    details: 泛型
    # link: '/docs/23-generics.md'

  - title: 24. Errors
    details: 错误处理
    # link: '/docs/24-errors.md'

  - title: 25. Goroutines
    details: Go协程
    # link: '/docs/25-goroutines.md'

  - title: 26. Channels
    details: 通道
    # link: '/docs/26-channels.md'

  - title: 27. Channel Buffering
    details: 通道缓冲
    # link: '/docs/27-channel-buffering.md'

  - title: 28. Channel Synchronization
    details: 通道同步
    # link: '/docs/28-channel-synchronization'

  - title: 29. Channel Directions
    details: 通道方向
    # link: '/docs/29-channel-directions.md'

  - title: 30. Select
    details: Select语句
    # link: '/docs/30-select.md'

  - title: 31. Timeouts
    details: 超时处理
    # link: '/docs/31-timeouts.md'

  - title: 32. Non-Blocking Channel Operations
    details: 非阻塞通道操作
    # link: '/docs/32-non-blocking-channel-op'

  - title: 33. Closing Channels
    details: 关闭通道
    # link: '/docs/33-closing-channels.md'

  - title: 34. Range over Channels
    details: 通过通道遍历
    # link: '/docs/34-range-over-channels.md'

  - title: 35. Timers
    details: 定时器
    # link: '/docs/35-timers.md'

  - title: 36. Tickers
    details: 定时触发器
    # link: '/docs/36-tickers.md'

  - title: 37. Worker Pools
    details: 工作池
    # link: '/docs/37-worker-pools.md'

  - title: 38. WaitGroups
    details: 等待组
    # link: '/docs/38-waitgroups.md'

  - title: 39. Rate Limiting
    details: 限流
    # link: '/docs/39-rate-limiting.md'

  - title: 40. Atomic Counters
    details: 原子计数器
    # link: '/docs/40-atomic-counters.md'

  - title: 41. Mutexes
    details: 互斥锁
    # link: '/docs/41-mutexes.md'

  - title: 42. Stateful Goroutines
    details: 有状态的Go协程
    # link: '/docs/42-stateful-goroutines.md'

  - title: 43. Sorting
    details: 排序
    # link: '/docs/43-sorting.md'

  - title: 44. Sorting by Functions
    details: 根据函数排序
    # link: '/docs/44-sorting-by-functions.md'

  - title: 45. Panic
    details: 异常处理
    # link: '/docs/45-panic.md'

  - title: 46. Defer
    details: 延迟执行
    # link: '/docs/46-defer.md'

  - title: 47. Recover
    details: 恢复异常
    # link: '/docs/47-recover.md'

  - title: 48. String Functions
    details: 字符串函数
    # link: '/docs/48-string-functions.md'

  - title: 49. String Formatting
    details: 字符串格式化
    # link: '/docs/49-string-formatting.md'

  - title: 50. Text Templates
    details: 文本模板
    # link: '/docs/50-text-templates.md'

  - title: 51. Regular Expressions
    details: 正则表达式
    # link: '/docs/51-regular-expressions.md'

  - title: 52. JSON
    details:
    # link: '/docs/52-json.md'

  - title: 53. XML
    details:
    # link: '/docs/53-xml.md'

  - title: 54. Time
    details: 时间
    # link: '/docs/54-time.md'

  - title: 55. Epoch
    details: 纪元
    # link: '/docs/55-epoch.md'

  - title: 56. Time Formatting / Parsing
    details: 时间格式化/解析
    # link: '/docs/56-time-formatting-parsing'

  - title: 57. Random Numbers
    details: 随机数
    # link: '/docs/57-random-numbers.md'

  - title: 58. Number Parsing
    details: 数字解析
    # link: '/docs/58-number-parsing.md'

  - title: 59. URL Parsing
    details: URL解析
    # link: '/docs/59-url-parsing.md'

  - title: 60. SHA256 Hashes
    details: SHA256哈希
    # link: '/docs/60-sha256-hashes.md'

  - title: 61. Base64 Encoding
    details: Base64编码
    # link: '/docs/61-base64-encoding.md'

  - title: 62. Reading Files
    details: 读取文件
    # link: '/docs/62-reading-files.md'

  - title: 63. Writing Files
    details: 写入文件
    # link: '/docs/63-writing-files.md'

  - title: 64. Line Filters
    details: 行过滤器
    # link: '/docs/64-line-filters.md'

  - title: 65. File Paths
    details: 文件路径
    # link: '/docs/65-file-paths.md'

  - title: 66. Directories
    details: 目录
    # link: '/docs/66-directories.md'

  - title: 67. Temporary Files and Directories
    details: 临时文件和目录
    # link: '/docs/67-temporary-files-and-dir'

  - title: 68. Embed Directive
    details: 嵌入指令
    # link: '/docs/68-embed-directive.md'

  - title: 69. Testing and Benchmarking
    details: 测试和基准测试
    # link: '/docs/69-testing-and-benchmarkin'

  - title: 70. Command-Line Arguments
    details: 命令行参数
    # link: '/docs/70-command-line-arguments.'

  - title: 71. Command-Line Flags
    details: 命令行标志
    # link: '/docs/71-command-line-flags.md'

  - title: 72. Command-Line Subcommands
    details: 命令行子命令
    # link: '/docs/72-command-line-subcommand'

  - title: 73. Environment Variables
    details: 环境变量
    # link: '/docs/73-environment-variables.m'

  - title: 74. Logging
    details: 日志记录
    # link: '/docs/74-logging.md'

  - title: 75. HTTP Client
    details: HTTP客户端
    # link: '/docs/75-http-client.md'

  - title: 76. HTTP Server
    details: HTTP服务器
    # link: '/docs/76-http-server.md'

  - title: 77. Context
    details: 上下文
    # link: '/docs/77-context.md'

  - title: 78. Spawning Processes
    details: 启动进程
    # link: '/docs/78-spawning-processes.md'

  - title: 79. Exec'ing Processes
    details: 执行进程
    # link: '/docs/79-exec-ing-processes.md'

  - title: 80. Signals
    details: 信号
    # link: '/docs/80-signals.md'

  - title: 81. Exit
    details: 退出
    # link: '/docs/81-exit.md'
---
