import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.35a27b98.js";const u=JSON.parse('{"title":"常量(Constants)","description":"","frontmatter":{},"headers":[],"relativePath":"docs/04-constants.md","filePath":"docs/04-constants.md","key":"04-constants.md","conf":{"zh":"常量","en":"Constants","link":"04-constants.md","source":"04-constants.go"},"sourceCode":"https://github.com/fady-mak/cn-gobyexample/blob/main/sources/04-constants.go"}'),p={name:"docs/04-constants.md"},o=l(`<details class="details custom-block"><summary>Go支持字符、字符串、布尔和数值的常量。</summary><p>Go supports constants of character, string, boolean, and numeric values.</p></details><details class="details custom-block"><summary><code>const</code>关键字用于声明常量。</summary><p><code>const</code> declares a constant value.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> s string </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;constant&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(s) </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> s string </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;constant&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line has-focus"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(s) </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary><code>const</code>语句可以出现在任何<code>var</code>语句可以出现的地方。</summary><p>A <code>const</code> statement can appear anywhere a <code>var</code> statement can.</p></details><details class="details custom-block"><summary>常量表达式可以执行具有任意精度的算术运算。</summary><p>Constant expressions perform arithmetic with arbitrary precision.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500000000</span><span style="color:#E1E4E8;">  </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> d </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">e</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> n  </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(d)  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500000000</span><span style="color:#24292E;">  </span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> d </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#D73A49;">e</span><span style="color:#005CC5;">20</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> n  </span></span>
<span class="line has-focus"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(d)  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>数值常量在没有给定类型之前是没有类型的，例如通过显式转换给定类型。</summary><p>A numeric constant has no type until it’s given one, such as by an explicit conversion.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500000000</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> d </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">e</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> n</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(d)</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">int64</span><span style="color:#E1E4E8;">(d)) </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500000000</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> d </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#D73A49;">e</span><span style="color:#005CC5;">20</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> n</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(d)</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">int64</span><span style="color:#24292E;">(d)) </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>通过在需要类型的上下文中使用数值，例如变量赋值或函数调用，可以给数字赋予类型。例如，这里的<code>math.Sin</code>期望一个<code>float64</code>类型的参数。</summary><p>A number can be given a type by using it in a context that requires one, such as a variable assignment or function call. For example, here math.Sin expects a <code>float64</code>.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">math</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500000000</span><span style="color:#E1E4E8;"> </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(math.</span><span style="color:#79B8FF;">Sin</span><span style="color:#E1E4E8;">(n)) </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">math</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500000000</span><span style="color:#24292E;"> </span></span>
<span class="line has-focus"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(math.</span><span style="color:#005CC5;">Sin</span><span style="color:#24292E;">(n)) </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h3><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">math</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> s string </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;constant&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(s)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500000000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> d </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">e</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> n</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(d)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">int64</span><span style="color:#E1E4E8;">(d))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(math.</span><span style="color:#79B8FF;">Sin</span><span style="color:#E1E4E8;">(n))</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">math</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> s string </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;constant&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(s)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500000000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> d </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#D73A49;">e</span><span style="color:#005CC5;">20</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> n</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(d)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">int64</span><span style="color:#24292E;">(d))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(math.</span><span style="color:#005CC5;">Sin</span><span style="color:#24292E;">(n))</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">04</span><span style="color:#9ECBFF;">-constant.go</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;"># constant</span></span>
<span class="line"><span style="color:#6A737D;"># 6e+11</span></span>
<span class="line"><span style="color:#6A737D;"># 600000000000</span></span>
<span class="line"><span style="color:#6A737D;"># -0.28470407323754404</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">04</span><span style="color:#032F62;">-constant.go</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;"># constant</span></span>
<span class="line"><span style="color:#6A737D;"># 6e+11</span></span>
<span class="line"><span style="color:#6A737D;"># 600000000000</span></span>
<span class="line"><span style="color:#6A737D;"># -0.28470407323754404</span></span></code></pre></div>`,13),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
