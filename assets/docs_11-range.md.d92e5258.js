import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.35a27b98.js";const d=JSON.parse('{"title":"范围(Range)","description":"","frontmatter":{},"headers":[],"relativePath":"docs/11-range.md","filePath":"docs/11-range.md","key":"11-range.md","conf":{"zh":"范围","en":"Range","link":"11-range.md","source":"11-range.go"},"sourceCode":"https://github.com/fady-mak/cn-gobyexample/blob/main/sources/11-range.go"}'),l={name:"docs/11-range.md"},o=p(`<details class="details custom-block"><summary><code>range</code>可以迭代各种数据结构中的元素。让我们看看如何在一些我们已经学过的数据结构中使用<code>range</code>。</summary><p><code>range</code> iterates over elements in a variety of data structures. Let’s see how to use <code>range</code> with some of the data structures we’ve already learned.</p></details><details class="details custom-block"><summary>在这里，我们使用<code>range</code>来对切片中的数字进行求和。数组的工作原理也是如此。</summary><p>Here we use <code>range</code> to sum the numbers in a slice. Arrays work like this too.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	nums </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> []</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">	sum </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> _, num </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> nums {</span></span>
<span class="line"><span style="color:#E1E4E8;">		sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> num</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;sum:&quot;</span><span style="color:#E1E4E8;">, sum)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// sum: 9</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	nums </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> []</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">	sum </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> _, num </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> nums {</span></span>
<span class="line"><span style="color:#24292E;">		sum </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> num</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;sum:&quot;</span><span style="color:#24292E;">, sum)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// sum: 9</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>对于数组和切片，<code>range</code>提供了每个条目的索引和值。在上面的例子中，我们不需要索引，所以用空白标识符_来忽略它。但有时我们确实需要索引。</summary><p><code>range</code> on arrays and slices provides both the index and value for each entry. Above we didn’t need the index, so we ignored it with the blank identifier _. Sometimes we actually want the indexes though.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	nums </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> []</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 省略重复代码...</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i, num </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> nums { </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">			fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;index:&quot;</span><span style="color:#E1E4E8;">, i)</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">//	index: 1</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	nums </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> []</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 省略重复代码...</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i, num </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> nums { </span></span>
<span class="line has-focus"><span style="color:#24292E;">		</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> {</span></span>
<span class="line has-focus"><span style="color:#24292E;">			fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;index:&quot;</span><span style="color:#24292E;">, i)</span></span>
<span class="line has-focus"><span style="color:#24292E;">			</span><span style="color:#6A737D;">//	index: 1</span></span>
<span class="line has-focus"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>对于映射，<code>range</code>会迭代键/值对。</summary><p><code>range</code> on map iterates over key/value pairs.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	kvs </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;apple&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;banana&quot;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> k, v </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> kvs {</span></span>
<span class="line"><span style="color:#E1E4E8;">		fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;"> =&gt; </span><span style="color:#79B8FF;">%s\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, k, v)</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// a =&gt; apple</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// b =&gt; banana</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	kvs </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;apple&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;banana&quot;</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> k, v </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> kvs {</span></span>
<span class="line"><span style="color:#24292E;">		fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;"> =&gt; </span><span style="color:#005CC5;">%s\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, k, v)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// a =&gt; apple</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// b =&gt; banana</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary><code>range</code>还可以迭代映射的键。</summary><p><code>range</code> can also iterate over just the keys of a map.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	kvs </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;apple&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;banana&quot;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> k, v </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> kvs {</span></span>
<span class="line"><span style="color:#E1E4E8;">		fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;"> =&gt; </span><span style="color:#79B8FF;">%s\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, k, v)</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// a =&gt; apple</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// b =&gt; banana</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> kvs { </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">		fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;key:&quot;</span><span style="color:#E1E4E8;">, k)</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	}</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// key: a</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// key: b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	kvs </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;apple&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;banana&quot;</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> k, v </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> kvs {</span></span>
<span class="line"><span style="color:#24292E;">		fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;"> =&gt; </span><span style="color:#005CC5;">%s\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, k, v)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// a =&gt; apple</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// b =&gt; banana</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> kvs { </span></span>
<span class="line has-focus"><span style="color:#24292E;">		fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;key:&quot;</span><span style="color:#24292E;">, k)</span></span>
<span class="line has-focus"><span style="color:#24292E;">	}</span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// key: a</span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// key: b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>对于字符串，<code>range</code>会迭代<code>Unicode码点</code>。第一个值是<code>rune</code>的起始字节索引，第二个值是<code>rune</code>本身。有关详细信息，请参阅<a href="/cn-gobyexample/docs/18-strings-and-runes.html">字符串和rune</a>。</summary><p><code>range</code> on strings iterates over <code>Unicode code</code> points. The first value is the starting byte index of the <code>rune</code> and the second the <code>rune</code> itself. See <a href="/cn-gobyexample/docs/18-strings-and-runes">Strings and Runes</a> for more details.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i, c </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go&quot;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(i, c)</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 0 103</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 1 111</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i, c </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go&quot;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(i, c)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 0 103</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 1 111</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h3><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	nums </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> []</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">	sum </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> _, num </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> nums {</span></span>
<span class="line"><span style="color:#E1E4E8;">		sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> num</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;sum:&quot;</span><span style="color:#E1E4E8;">, sum)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i, num </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> nums {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">			fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;index:&quot;</span><span style="color:#E1E4E8;">, i)</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	kvs </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;apple&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;banana&quot;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> k, v </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> kvs {</span></span>
<span class="line"><span style="color:#E1E4E8;">		fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;"> =&gt; </span><span style="color:#79B8FF;">%s\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, k, v)</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> kvs {</span></span>
<span class="line"><span style="color:#E1E4E8;">		fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;key:&quot;</span><span style="color:#E1E4E8;">, k)</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i, c </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go&quot;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(i, c)</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	nums </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> []</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">	sum </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> _, num </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> nums {</span></span>
<span class="line"><span style="color:#24292E;">		sum </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> num</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;sum:&quot;</span><span style="color:#24292E;">, sum)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i, num </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> nums {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;index:&quot;</span><span style="color:#24292E;">, i)</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	kvs </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;apple&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;banana&quot;</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> k, v </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> kvs {</span></span>
<span class="line"><span style="color:#24292E;">		fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;"> =&gt; </span><span style="color:#005CC5;">%s\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, k, v)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> kvs {</span></span>
<span class="line"><span style="color:#24292E;">		fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;key:&quot;</span><span style="color:#24292E;">, k)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i, c </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go&quot;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(i, c)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">11</span><span style="color:#9ECBFF;">-range.go</span></span>
<span class="line"><span style="color:#6A737D;"># sum: 9</span></span>
<span class="line"><span style="color:#6A737D;"># index: 1</span></span>
<span class="line"><span style="color:#6A737D;"># a =&gt; apple</span></span>
<span class="line"><span style="color:#6A737D;"># b =&gt; banana</span></span>
<span class="line"><span style="color:#6A737D;"># key: a</span></span>
<span class="line"><span style="color:#6A737D;"># key: b</span></span>
<span class="line"><span style="color:#6A737D;"># 0 103</span></span>
<span class="line"><span style="color:#6A737D;"># 1 111</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">11</span><span style="color:#032F62;">-range.go</span></span>
<span class="line"><span style="color:#6A737D;"># sum: 9</span></span>
<span class="line"><span style="color:#6A737D;"># index: 1</span></span>
<span class="line"><span style="color:#6A737D;"># a =&gt; apple</span></span>
<span class="line"><span style="color:#6A737D;"># b =&gt; banana</span></span>
<span class="line"><span style="color:#6A737D;"># key: a</span></span>
<span class="line"><span style="color:#6A737D;"># key: b</span></span>
<span class="line"><span style="color:#6A737D;"># 0 103</span></span>
<span class="line"><span style="color:#6A737D;"># 1 111</span></span></code></pre></div>`,14),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const m=s(l,[["render",t]]);export{d as __pageData,m as default};
