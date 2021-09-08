import{e as s,o as a,G as t}from"./vendor.3379a4e5.js";const n={class:"markdown-body"},l=[t('<h1>NumberKeyboard 数字键盘</h1><h3>介绍</h3><p>虚拟数字键盘，用于输入支付密码的场景。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">//vue</span>\n<span class="hljs-keyword">import</span> { NumberKeyboard,Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">//taro</span>\n<span class="hljs-keyword">import</span> { NumberKeyboard,Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(NumberKeyboard);\napp.use(Popup);\n\n</code></pre><h2>代码示例</h2><h3>基础用法 默认键盘</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-numberkeyboard</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;input&quot;</span> @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close()&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-numberkeyboard</span>&gt;</span>\n</code></pre><h3>带右侧栏键盘</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-numberkeyboard</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;rightColumn&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">:custom-key</span>=<span class="hljs-string">&quot;customKey1&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;input&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close()&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-numberkeyboard</span>&gt;</span>\n</code></pre><h3>随机数键盘</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-numberkeyboard</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;rightColumn&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">randomKeys</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:custom-key</span>=<span class="hljs-string">&quot;customKey1&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;input&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close(）&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-numberkeyboard</span>&gt;</span>\n</code></pre><h3>带标题栏键盘</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-numberkeyboard</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;默认键盘&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">:custom-key</span>=<span class="hljs-string">&quot;customKey2&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;input&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close()&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-numberkeyboard</span>&gt;</span>\n</code></pre><h3>双向绑定：</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-numberkeyboard</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;6&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close()&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-numberkeyboard</span>&gt;</span>\n</code></pre><h2>Prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visible</td><td>是否显示键盘</td><td>boolean</td><td>false</td></tr><tr><td>title</td><td>键盘标题</td><td>string</td><td>-</td></tr><tr><td>type</td><td>键盘模式</td><td>string</td><td><code>default</code>：默认样式<br><code>rightColumn</code>：带右侧栏</td></tr><tr><td>custom-key</td><td>自定义键盘额外的键</td><td>array<br>string</td><td>数组形式最多支持添加2个,超出默认取前2项</td></tr><tr><td>v-model</td><td>当前输入值</td><td>string</td><td>-</td></tr><tr><td>maxlength</td><td>输入值最大长度，结合 v-model 使用</td><td>number <br> string</td><td>6</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>input</td><td>点击按键时触发</td><td>按键内容</td></tr><tr><td>delete</td><td>点击删除键时触发</td><td>-</td></tr><tr><td>close</td><td>点击关闭按钮或非键盘区域时触发</td><td>-</td></tr></tbody></table>',20)],p={setup:(t,{expose:p})=>(p({frontmatter:{}}),(t,p)=>(a(),s("div",n,l)))};export{p as default};
