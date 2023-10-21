import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.35a27b98.js";const F=JSON.parse('{"title":"变量(Variables)","description":"","frontmatter":{},"headers":[],"relativePath":"docs/03-variables.md","filePath":"docs/03-variables.md","key":"03-variables.md","conf":{"zh":"变量","en":"Variables","link":"03-variables.md","source":"03-variables.go"},"sourceCode":"https://github.com/fady-mak/cn-gobyexample/blob/main/sources/03-variables.go"}'),p={name:"docs/03-variables.md"},o=l(`<details class="details custom-block"><summary>在Go中，变量需要显式声明，并由编译器用于检查函数调用的类型正确性。</summary><p>In Go, variables are explicitly declared and used by the compiler to e.g. check type-correctness of function calls.</p></details><details class="details custom-block"><summary>var关键字用于声明一个或多个变量。</summary><p>var declares 1 or more variables.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;initial&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(a)    </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;initial&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line has-focus"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(a)    </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>你可以一次声明多个变量。</summary><p>You can declare multiple variables at once.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> b, c </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(b, c)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> b, c </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(b, c)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>Go会根据初始化值推断变量的类型。</summary><p>Go will infer the type of initialized variables.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> d </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(d)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> d </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(d)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary>没有对应初始化值的变量将被赋予零值。例如，<code>int</code>类型的零值为<code>0</code>。</summary><p>Variables declared without a corresponding initialization are zero-valued. For example, the zero value for an <code>int</code> is <code>0</code>.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> e </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line has-focus"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> e </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(e)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><details class="details custom-block"><summary><code>:=</code>语法是声明并初始化变量的简写形式，例如在此例中的 <code>var f string = &quot;apple&quot;</code>。此语法只能在函数内部使用。</summary><p>The <code>:=</code> syntax is shorthand for declaring and initializing a variable, e.g. for <code>var f string = &quot;apple&quot;</code> in this case. This syntax is only available inside functions.</p></details><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">	f </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;apple&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(f)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line has-focus"><span style="color:#24292E;">	f </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;apple&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(f)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">03</span><span style="color:#9ECBFF;">-values.go</span></span>
<span class="line"><span style="color:#6A737D;"># golang</span></span>
<span class="line"><span style="color:#6A737D;"># 1+1 = 2</span></span>
<span class="line"><span style="color:#6A737D;"># 7.3/3.0 = 2.433333333333333</span></span>
<span class="line"><span style="color:#6A737D;"># false</span></span>
<span class="line"><span style="color:#6A737D;"># true</span></span>
<span class="line"><span style="color:#6A737D;"># false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">03</span><span style="color:#032F62;">-values.go</span></span>
<span class="line"><span style="color:#6A737D;"># golang</span></span>
<span class="line"><span style="color:#6A737D;"># 1+1 = 2</span></span>
<span class="line"><span style="color:#6A737D;"># 7.3/3.0 = 2.433333333333333</span></span>
<span class="line"><span style="color:#6A737D;"># false</span></span>
<span class="line"><span style="color:#6A737D;"># true</span></span>
<span class="line"><span style="color:#6A737D;"># false</span></span></code></pre></div>`,13),e=[o];function c(t,r,i,y,E,d){return a(),n("div",null,e)}const m=s(p,[["render",c]]);export{F as __pageData,m as default};
