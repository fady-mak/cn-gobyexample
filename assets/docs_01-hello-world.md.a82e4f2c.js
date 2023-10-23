import{_ as s,o as l,c as a,Q as o}from"./chunks/framework.35a27b98.js";const m=JSON.parse('{"title":"Hello World","description":"","frontmatter":{},"headers":[],"relativePath":"docs/01-hello-world.md","filePath":"docs/01-hello-world.md","key":"01-hello-world.md","conf":{"zh":"Hello World","en":"Hello World","link":"01-hello-world.md","source":"01-hello-world.go"},"sourceCode":"https://github.com/fady-mak/cn-gobyexample/blob/main/sources/01-hello-world.go"}'),n={name:"docs/01-hello-world.md"},e=o(`<details class="details custom-block"><summary>我们的第一个程序将打印经典的“hello world”信息。以下是完整的源代码。</summary><p>Our first program will print the classic “hello world” message. Here’s the full source code.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello world&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello world&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>要运行程序，请将代码放在hello-world.go中并使用go run命令。</summary><p>To run the program, put the code in hello-world.go and use go run.</p></details><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello-world.go</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello-world.go</span></span></code></pre></div><details class="details custom-block"><summary>有时我们希望将程序构建为二进制文件。我们可以使用go build命令来实现。</summary><p>Sometimes we’ll want to build our programs into binaries. We can do this using go build.</p></details><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello-world.go</span></span>
<span class="line"><span style="color:#B392F0;">ls</span></span>
<span class="line"><span style="color:#6A737D;"># hello-world    hello-world.go</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello-world.go</span></span>
<span class="line"><span style="color:#6F42C1;">ls</span></span>
<span class="line"><span style="color:#6A737D;"># hello-world    hello-world.go</span></span></code></pre></div><details class="details custom-block"><summary>然后，我们可以直接执行构建好的二进制文件。</summary><p>We can then execute the built binary directly.</p></details><details class="details custom-block"><summary>现在，我们已经学会了如何运行和构建基本的Go程序，让我们更深入地了解这门语言。</summary><p>Now that we can run and build basic Go programs, let’s learn more about the language.</p></details>`,8),p=[e];function t(c,r,i,d,y,u){return l(),a("div",null,p)}const E=s(n,[["render",t]]);export{m as __pageData,E as default};