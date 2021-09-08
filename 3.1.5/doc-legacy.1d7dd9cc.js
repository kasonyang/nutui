System.register(["./vendor-legacy.01386dd6.js"],(function(s){"use strict";var a,n,t;return{setters:[function(s){a=s.e,n=s.o,t=s.G}],execute:function(){const l={class:"markdown-body"},p=[t('<h1>Tab 选项卡</h1><p>常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式。</p><blockquote><p>注意，由于小程序端依赖的swiper组件存在兼容性问题，因此在小程序端暂时只支持基础的tab切换功能，待swiper组件修复后，开放所有功能。</p></blockquote><h2>安装</h2><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { Tab, TabPanel,Swiper,SwiperItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { Tab, TabPanel,Swiper,SwiperItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Tab);\napp.use(TabPanel);\napp.use(Swiper);\napp.use(SwiperItem);\n\n</code></pre><h2>基础样式，默认 tab-title 宽度均分相等</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;全部&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签全部内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待付款&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待付款内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待收获&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待收获内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;已完成&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签已完成内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>\n</code></pre><h2>默认显示 tab：</h2><p>defaultIndex 设置默认显示 tab switchTab 监听切换 tab 返回事件</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span> <span class="hljs-attr">:defaultIndex</span>=<span class="hljs-string">&quot;1&quot;</span> @<span class="hljs-attr">switchTab</span>=<span class="hljs-string">&quot;switchTab&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;全部&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签全部内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待付款&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待付款内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待收获&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待收获内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;已完成&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签已完成内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">import</span> { createComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/packages/utils/create&#39;</span>;\n  <span class="hljs-keyword">const</span> { createDemo } = createComponent(<span class="hljs-string">&#39;tab&#39;</span>);\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({\n    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">switchTab</span>(<span class="hljs-params">activeInddex: number, event: MouseEvent</span>) </span>{\n        <span class="hljs-built_in">console</span>.log(activeInddex, event);\n      }\n      <span class="hljs-keyword">return</span> {\n        switchTab\n      };\n    }\n  });\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre><h2>animatedTime 开启切换标签内容时的转场动画时间</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span> <span class="hljs-attr">:animatedTime</span>=<span class="hljs-string">&quot;500&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;全部&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签全部内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待付款&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待付款内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待收获&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待收获内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;已完成&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签已完成内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>\n</code></pre><h2>禁止 tab 内容滑动</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span> <span class="hljs-attr">:no-swiping</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;全部&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签全部内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待付款&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待付款内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待收获&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待收获内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;已完成&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签已完成内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>\n</code></pre><h2>设置 scrollType=“scroll”，标签栏可以在水平方向上滚动</h2><p>切换时会自动将当前标签居中。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span> <span class="hljs-attr">:animatedTime</span>=<span class="hljs-string">&quot;500&quot;</span> <span class="hljs-attr">scrollType</span>=<span class="hljs-string">&quot;scroll&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;全部&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签全部内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待付款&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待付款内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待收获&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待收获内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;已完成&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签已完成内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;已取消&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签已取消内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待评价&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待评价内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>\n</code></pre><h2>设置 slot:header 可以自定义标签</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;全部&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:header</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;dongdong&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签全部内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待付款&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待付款内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待收获&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待收获内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;已完成&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签已完成内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;已取消&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签已取消内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;待评价&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签待评价内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>\n</code></pre><h2>左右 tab 布局</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">:animatedTime</span>=<span class="hljs-string">&quot;500&quot;</span> <span class="hljs-attr">:defaultIndex</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;页签一&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签一内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;页签二&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签二内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;页签三&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签三内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;页签四&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签四内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;页签五&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签五内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;页签六&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签六内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;页签七&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签七内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>&lt;/nut-tab-panel\n  &gt;\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>\n</code></pre><h2>异步操作</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span> <span class="hljs-attr">:animatedTime</span>=<span class="hljs-string">&quot;500&quot;</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;editList.length&gt;0&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">:tab-title</span>=<span class="hljs-string">&quot;item.title&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item,index) in editList&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>这里是页签{{index}}内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;changeList&quot;</span>&gt;</span>改变数据<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { ref , reactive,toRefs } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;\n<span class="hljs-keyword">import</span> { createComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../utils/create&#39;</span>;\n<span class="hljs-keyword">const</span> { createDemo } = createComponent(<span class="hljs-string">&#39;tab&#39;</span>);\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> resData = reactive({\n      <span class="hljs-attr">editList</span>:[\n        {\n          <span class="hljs-attr">title</span>:<span class="hljs-string">&#39;标签一&#39;</span>\n        },\n        {\n          <span class="hljs-attr">title</span>:<span class="hljs-string">&#39;标签二&#39;</span>\n        }\n      ]\n    });\n    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeList</span>(<span class="hljs-params"></span>)</span>{\n      resData.editList.push({\n        <span class="hljs-attr">title</span>:<span class="hljs-string">&#39;标签&#39;</span>+resData.editList.length\n      })\n    }\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(resData),\n      changeList\n    };\n  }\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre><h3>Prop</h3><h3>nut-tab</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>页签栏的位置，可选值 horizontal/vertical</td><td>String</td><td>horizontal</td></tr><tr><td>default-index</td><td>默认选中的页签栏</td><td>Number</td><td>0</td></tr><tr><td>animated-time</td><td>开启切换标签内容时的转场动画时间</td><td>Number</td><td>0</td></tr><tr><td>no-swiping</td><td>禁止 tab 内容滑动</td><td>Boolean</td><td>false</td></tr><tr><td>scrollType</td><td>页签栏的分布，默认平均分布，设置为&quot;scroll&quot;，有最小宽度，发生滚动</td><td>string</td><td>“default“</td></tr></tbody></table><h3>nut-tab-panel</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>tab-title</td><td>页签的标题</td><td>String</td><td>‘’</td></tr><tr><td>slot:header</td><td>页签 title 的自定义 slot</td><td>vnode</td><td>–</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>switch-tab</td><td>切换页签时触发事件</td><td>点击的索引值和触发元素</td></tr></tbody></table>',30)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(n(),a("div",l,p)))})}}}));
