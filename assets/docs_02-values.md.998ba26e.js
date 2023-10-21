import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.35a27b98.js";const C=JSON.parse('{"title":"值(Values)","description":"","frontmatter":{},"headers":[],"relativePath":"docs/02-values.md","filePath":"docs/02-values.md","key":"02-values.md","conf":{"zh":"值","en":"Values","link":"02-values.md","source":"02-values.go"},"sourceCode":"https://github.com/fady-mak/cn-gobyexample/blob/main/sources/02-values.go"}'),p={name:"docs/02-values.md"},o=l(`<details class="details custom-block"><summary>Go拥有多种值类型，包括字符串、整数、浮点数、布尔值等。以下是一些基本示例：</summary><p>Go has various value types including strings, integers, floats, booleans, etc. Here are a few basic examples.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;go&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;lang&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1+1 =&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;7.3/3.0 =&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7.3</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">3.0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;go&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;lang&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1+1 =&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;7.3/3.0 =&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7.3</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">3.0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>字符串可以通过 + 连接。</summary><p>Strings, which can be added together with +.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;go&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;lang&quot;</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// golang</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1+1 =&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;7.3/3.0 =&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7.3</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">3.0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line has-focus"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;go&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;lang&quot;</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// golang</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1+1 =&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;7.3/3.0 =&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7.3</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">3.0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>整数和浮点数</summary><p>Integers and floats.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;go&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;lang&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1+1 =&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 1+1 = 2 </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;7.3/3.0 =&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7.3</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">3.0</span><span style="color:#E1E4E8;">) </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 7.3/3.0 = 2.433333333333333 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;go&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;lang&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1+1 =&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 1+1 = 2 </span></span>
<span class="line has-focus"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;7.3/3.0 =&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7.3</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">3.0</span><span style="color:#24292E;">) </span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 7.3/3.0 = 2.433333333333333 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>布尔值，可以使用布尔运算符进行操作，就像你期望的那样。</summary><p>Booleans, with boolean operators as you’d expect.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;go&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;lang&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1+1 =&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;7.3/3.0 =&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7.3</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">3.0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">) </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// false </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">) </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// true </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// false </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;go&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;lang&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1+1 =&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;7.3/3.0 =&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7.3</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">3.0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">) </span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// false </span></span>
<span class="line has-focus"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">) </span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// true </span></span>
<span class="line has-focus"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) </span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// false </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h3><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;initial&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(a)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> b, c </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(b, c)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> d </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(d)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> e </span><span style="color:#F97583;">int</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	f </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;apple&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(f)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;initial&quot;</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(a)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> b, c </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(b, c)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> d </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(d)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> e </span><span style="color:#D73A49;">int</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(e)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	f </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;apple&quot;</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(f)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">variables.go</span></span>
<span class="line"><span style="color:#6A737D;"># initial</span></span>
<span class="line"><span style="color:#6A737D;"># 1 2</span></span>
<span class="line"><span style="color:#6A737D;"># true</span></span>
<span class="line"><span style="color:#6A737D;"># 0</span></span>
<span class="line"><span style="color:#6A737D;"># apple</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">variables.go</span></span>
<span class="line"><span style="color:#6A737D;"># initial</span></span>
<span class="line"><span style="color:#6A737D;"># 1 2</span></span>
<span class="line"><span style="color:#6A737D;"># true</span></span>
<span class="line"><span style="color:#6A737D;"># 0</span></span>
<span class="line"><span style="color:#6A737D;"># apple</span></span></code></pre></div>`,11),t=[o];function e(c,r,y,E,i,F){return n(),a("div",null,t)}const m=s(p,[["render",e]]);export{C as __pageData,m as default};
