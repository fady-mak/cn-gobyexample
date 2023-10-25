import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.35a27b98.js";const u=JSON.parse('{"title":"映射(Maps)","description":"","frontmatter":{},"headers":[],"relativePath":"docs/10-maps.md","filePath":"docs/10-maps.md","key":"10-maps.md","conf":{"zh":"映射","en":"Maps","link":"10-maps.md","source":"10-maps.go"},"sourceCode":"https://github.com/fady-mak/cn-gobyexample/blob/main/sources/10-maps.go"}'),l={name:"docs/10-maps.md"},o=p(`<details class="details custom-block"><summary>映射（maps）是Go中的内置<a href="https://en.wikipedia.org/wiki/Associative_array" target="_blank" rel="noreferrer">关联数据类型</a>（在其他语言中有时称为哈希或字典）。</summary><p>Maps are Go’s built-in <a href="https://en.wikipedia.org/wiki/Associative_array" target="_blank" rel="noreferrer">associative data type</a> (sometimes called hashes or dicts in other languages).</p><details class="details custom-block"><summary>要创建一个空映射，可以使用内置的<code>make</code>函数：<code>make(map[key-type]val-type)</code>。</summary><p>To create an empty map, use the builtin <code>make</code>: <code>make(map[key-type]val-type)</code>.</p></details></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	m </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	m </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">make</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>使用常规的<code>name[key] = val</code>语法设置键值对。</summary><p>Set key/value pairs using typical <code>name[key] = val</code> syntax.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	m </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	m[</span><span style="color:#9ECBFF;">&quot;k1&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;"> </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	m[</span><span style="color:#9ECBFF;">&quot;k2&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">13</span></span>
<span class="line"><span style="color:#E1E4E8;">  fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map:&quot;</span><span style="color:#E1E4E8;">, m)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	m </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">make</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">)</span></span>
<span class="line has-focus"><span style="color:#24292E;">	m[</span><span style="color:#032F62;">&quot;k1&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span><span style="color:#24292E;"> </span></span>
<span class="line has-focus"><span style="color:#24292E;">	m[</span><span style="color:#032F62;">&quot;k2&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">13</span></span>
<span class="line"><span style="color:#24292E;">  fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;map:&quot;</span><span style="color:#24292E;">, m)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>使用<code>fmt.Println</code>等将映射打印出来会显示所有的键值对。</summary><p>Printing a map with e.g. <code>fmt.Println</code> will show all of its key/value pairs.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	m </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	m[</span><span style="color:#9ECBFF;">&quot;k1&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span></span>
<span class="line"><span style="color:#E1E4E8;">	m[</span><span style="color:#9ECBFF;">&quot;k2&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">13</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map:&quot;</span><span style="color:#E1E4E8;">, m)  </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// map: map[k1:7 k2:13]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	m </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">make</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	m[</span><span style="color:#032F62;">&quot;k1&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span></span>
<span class="line"><span style="color:#24292E;">	m[</span><span style="color:#032F62;">&quot;k2&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">13</span></span>
<span class="line has-focus"><span style="color:#24292E;">  fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;map:&quot;</span><span style="color:#24292E;">, m)  </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// map: map[k1:7 k2:13]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>使用<code>name[key]</code>获取键对应的值。</summary><p>Get a value for a key with <code>name[key]</code>.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	v1 </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> m[</span><span style="color:#9ECBFF;">&quot;k1&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;v1:&quot;</span><span style="color:#E1E4E8;">, v1)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// v1: 7</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	v1 </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> m[</span><span style="color:#032F62;">&quot;k1&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;v1:&quot;</span><span style="color:#24292E;">, v1)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// v1: 7</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>如果键不存在，则会返回值类型的<a href="https://go.dev/ref/spec#The_zero_value" target="_blank" rel="noreferrer">零值</a>。</summary><p>If the key doesn’t exist, the <a href="https://go.dev/ref/spec#The_zero_value" target="_blank" rel="noreferrer">zero value</a> of the value type is returned.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	v3 </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> m[</span><span style="color:#9ECBFF;">&quot;k3&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;v3:&quot;</span><span style="color:#E1E4E8;">, v3)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// v3: 0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	v3 </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> m[</span><span style="color:#032F62;">&quot;k3&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;v3:&quot;</span><span style="color:#24292E;">, v3)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// v3: 0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>调用内置的<code>len</code>函数可以返回映射中键值对的数量。</summary><p>The builtin <code>len</code> returns the number of key/value pairs when called on a map.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;len:&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(m))</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// len: 2</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;len:&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(m))</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// len: 2</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>使用内置的<code>delete</code>函数可以从映射中删除键值对。</summary><p>The builtin <code>delete</code> removes key/value pairs from a map.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">delete</span><span style="color:#E1E4E8;">(m, </span><span style="color:#9ECBFF;">&quot;k2&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map:&quot;</span><span style="color:#E1E4E8;">, m)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// map: map[k1:7]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">delete</span><span style="color:#24292E;">(m, </span><span style="color:#032F62;">&quot;k2&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;map:&quot;</span><span style="color:#24292E;">, m)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// map: map[k1:7]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>要从映射中删除所有的键值对，使用内置的<code>clear</code>函数。</summary><p>To remove all key/value pairs from a map, use the <code>clear</code> builtin.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">clear</span><span style="color:#E1E4E8;">(m)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map:&quot;</span><span style="color:#E1E4E8;">, m)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// map: map[]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">clear</span><span style="color:#24292E;">(m)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;map:&quot;</span><span style="color:#24292E;">, m)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// map: map[]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>从映射中获取值时，可选的第二个返回值表示键是否存在于映射中。这可以用于区分缺失的键和具有零值（如0或&quot;&quot;）的键。在这里，我们不需要值本身，所以使用空白标识符_将其忽略掉。</summary><p>The optional second return value when getting a value from a map indicates if the key was present in the map. This can be used to disambiguate between missing keys and keys with zero values like 0 or &quot;&quot;. Here we didn’t need the value itself, so we ignored it with the blank identifier _.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	_, prs </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> m[</span><span style="color:#9ECBFF;">&quot;k2&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;prs:&quot;</span><span style="color:#E1E4E8;">, prs)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// prs: false</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	_, prs </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> m[</span><span style="color:#032F62;">&quot;k2&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;prs:&quot;</span><span style="color:#24292E;">, prs)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// prs: false</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>还可以使用以下语法在同一行中声明和初始化新的映射。</summary><p>You can also declare and initialize a new map in the same line with this syntax.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	n </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map:&quot;</span><span style="color:#E1E4E8;">, n)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// map: map[bar:2 foo:1]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	n </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;map:&quot;</span><span style="color:#24292E;">, n)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// map: map[bar:2 foo:1]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary><code>maps</code>包中包含了一些对映射非常有用的实用函数。</summary><p>The <code>maps</code> package contains a number of useful utility functions for <code>maps</code>.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span></span>
<span class="line"><span style="color:#E1E4E8;">	n </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map:&quot;</span><span style="color:#E1E4E8;">, n)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// map: map[bar:2 foo:1]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">	n2 </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> maps.</span><span style="color:#79B8FF;">Equal</span><span style="color:#E1E4E8;">(n, n2) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;n == n2&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// n == n2</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// ... 省略重复代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#24292E;">	n </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;map:&quot;</span><span style="color:#24292E;">, n)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// map: map[bar:2 foo:1]</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">	n2 </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> maps.</span><span style="color:#005CC5;">Equal</span><span style="color:#24292E;">(n, n2) {</span></span>
<span class="line"><span style="color:#24292E;">		fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;n == n2&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// n == n2</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>请注意，使用<code>fmt.Println</code>打印映射时，它的形式是<code>map[k:v k:v]</code>。</summary><p>Note that maps appear in the form <code>map[k:v k:v]</code> when printed with <code>fmt.Println</code>.</p></details><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h3><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">maps</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	m </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	m[</span><span style="color:#9ECBFF;">&quot;k1&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span></span>
<span class="line"><span style="color:#E1E4E8;">	m[</span><span style="color:#9ECBFF;">&quot;k2&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">13</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map:&quot;</span><span style="color:#E1E4E8;">, m)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	v1 </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> m[</span><span style="color:#9ECBFF;">&quot;k1&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;v1:&quot;</span><span style="color:#E1E4E8;">, v1)</span></span>
<span class="line"><span style="color:#E1E4E8;">	v3 </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> m[</span><span style="color:#9ECBFF;">&quot;key3&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;v3:&quot;</span><span style="color:#E1E4E8;">, v3)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;len:&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(m))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">delete</span><span style="color:#E1E4E8;">(m, </span><span style="color:#9ECBFF;">&quot;k2&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map:&quot;</span><span style="color:#E1E4E8;">, m)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">clear</span><span style="color:#E1E4E8;">(m)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map:&quot;</span><span style="color:#E1E4E8;">, m)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	_, prs </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> m[</span><span style="color:#9ECBFF;">&quot;k2&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;prs:&quot;</span><span style="color:#E1E4E8;">, prs)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	n </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map:&quot;</span><span style="color:#E1E4E8;">, n)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	n2 </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> maps.</span><span style="color:#79B8FF;">Equal</span><span style="color:#E1E4E8;">(n, n2) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;n == n2&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">maps</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	m </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">make</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	m[</span><span style="color:#032F62;">&quot;k1&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span></span>
<span class="line"><span style="color:#24292E;">	m[</span><span style="color:#032F62;">&quot;k2&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">13</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;map:&quot;</span><span style="color:#24292E;">, m)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	v1 </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> m[</span><span style="color:#032F62;">&quot;k1&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;v1:&quot;</span><span style="color:#24292E;">, v1)</span></span>
<span class="line"><span style="color:#24292E;">	v3 </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> m[</span><span style="color:#032F62;">&quot;key3&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;v3:&quot;</span><span style="color:#24292E;">, v3)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;len:&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(m))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">delete</span><span style="color:#24292E;">(m, </span><span style="color:#032F62;">&quot;k2&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;map:&quot;</span><span style="color:#24292E;">, m)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">clear</span><span style="color:#24292E;">(m)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;map:&quot;</span><span style="color:#24292E;">, m)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	_, prs </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> m[</span><span style="color:#032F62;">&quot;k2&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;prs:&quot;</span><span style="color:#24292E;">, prs)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	n </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;map:&quot;</span><span style="color:#24292E;">, n)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	n2 </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> maps.</span><span style="color:#005CC5;">Equal</span><span style="color:#24292E;">(n, n2) {</span></span>
<span class="line"><span style="color:#24292E;">		fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;n == n2&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">-maps.go</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># map: map[k1:7 k2:13]</span></span>
<span class="line"><span style="color:#6A737D;"># v1: 7</span></span>
<span class="line"><span style="color:#6A737D;"># v3: 0</span></span>
<span class="line"><span style="color:#6A737D;"># len: 2</span></span>
<span class="line"><span style="color:#6A737D;"># map: map[k1:7]</span></span>
<span class="line"><span style="color:#6A737D;"># map: map[]</span></span>
<span class="line"><span style="color:#6A737D;"># prs: false</span></span>
<span class="line"><span style="color:#6A737D;"># map: map[bar:2 foo:1]</span></span>
<span class="line"><span style="color:#6A737D;"># n == n2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">-maps.go</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># map: map[k1:7 k2:13]</span></span>
<span class="line"><span style="color:#6A737D;"># v1: 7</span></span>
<span class="line"><span style="color:#6A737D;"># v3: 0</span></span>
<span class="line"><span style="color:#6A737D;"># len: 2</span></span>
<span class="line"><span style="color:#6A737D;"># map: map[k1:7]</span></span>
<span class="line"><span style="color:#6A737D;"># map: map[]</span></span>
<span class="line"><span style="color:#6A737D;"># prs: false</span></span>
<span class="line"><span style="color:#6A737D;"># map: map[bar:2 foo:1]</span></span>
<span class="line"><span style="color:#6A737D;"># n == n2</span></span></code></pre></div>`,26),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{u as __pageData,d as default};
