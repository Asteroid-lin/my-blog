<template><div><h1 id="vuepress-theme-hope-2-0-新功能展示" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope-2-0-新功能展示" aria-hidden="true">#</a> VuePress Theme Hope 2.0 新功能展示</h1>
<p>本文展示了升级后的 VuePress Theme Hope 2.0 的各种强大功能。</p>
<h2 id="🔍-搜索功能" tabindex="-1"><a class="header-anchor" href="#🔍-搜索功能" aria-hidden="true">#</a> 🔍 搜索功能</h2>
<p>现在支持更强大的搜索功能：</p>
<ul>
<li><strong>智能搜索建议</strong></li>
<li><strong>搜索历史记录</strong></li>
<li><strong>快捷键支持</strong> (按 <code v-pre>/</code> 快速搜索)</li>
</ul>
<h2 id="📝-markdown-增强" tabindex="-1"><a class="header-anchor" href="#📝-markdown-增强" aria-hidden="true">#</a> 📝 Markdown 增强</h2>
<h3 id="数学公式" tabindex="-1"><a class="header-anchor" href="#数学公式" aria-hidden="true">#</a> 数学公式</h3>
<p>行内公式：$E = mc^2$</p>
<p>块级公式：
$$
\begin{align}
\nabla \times \vec{\mathbf{B}} -, \frac1c, \frac{\partial\vec{\mathbf{E}}}{\partial t} &amp;= \frac{4\pi}{c}\vec{\mathbf{j}} \
\nabla \cdot \vec{\mathbf{E}} &amp;= 4 \pi \rho \
\nabla \times \vec{\mathbf{E}}, +, \frac1c, \frac{\partial\vec{\mathbf{B}}}{\partial t} &amp;= \vec{\mathbf{0}} \
\nabla \cdot \vec{\mathbf{B}} &amp;= 0
\end{align}
$$</p>
<h3 id="图表支持" tabindex="-1"><a class="header-anchor" href="#图表支持" aria-hidden="true">#</a> 图表支持</h3>
<div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre v-pre class="language-mermaid"><code><span class="token keyword">graph</span> TD
    A<span class="token text string">[开始]</span> <span class="token arrow operator">--></span> B<span class="token text string">{是否登录?}</span>
    B <span class="token arrow operator">--></span><span class="token label property">|是|</span> C<span class="token text string">[显示主页]</span>
    B <span class="token arrow operator">--></span><span class="token label property">|否|</span> D<span class="token text string">[跳转登录]</span>
    D <span class="token arrow operator">--></span> E<span class="token text string">[输入用户名密码]</span>
    E <span class="token arrow operator">--></span> F<span class="token text string">{验证成功?}</span>
    F <span class="token arrow operator">--></span><span class="token label property">|是|</span> C
    F <span class="token arrow operator">--></span><span class="token label property">|否|</span> G<span class="token text string">[显示错误信息]</span>
    G <span class="token arrow operator">--></span> E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表" aria-hidden="true">#</a> 任务列表</h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 完成 VuePress 升级</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 配置搜索功能</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 添加博客功能</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 优化 SEO 配置</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 添加评论系统</label></li>
</ul>
<h3 id="代码组" tabindex="-1"><a class="header-anchor" href="#代码组" aria-hidden="true">#</a> 代码组</h3>
<CodeGroup>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"小傅哥"</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"小傅哥"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroup>
<h3 id="提示框" tabindex="-1"><a class="header-anchor" href="#提示框" aria-hidden="true">#</a> 提示框</h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这是一个提示框，用于显示重要信息。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">警告</p>
<p>这是一个警告框，用于显示警告信息。</p>
</div>
<div class="hint-container danger">
<p class="hint-container-title">危险</p>
<p>这是一个危险框，用于显示危险信息。</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">信息</p>
<p>这是一个信息框，用于显示一般信息。</p>
</div>
<h3 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h3>
<p>这是一个包含脚注的示例<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>。</p>
<h2 id="🎨-主题功能" tabindex="-1"><a class="header-anchor" href="#🎨-主题功能" aria-hidden="true">#</a> 🎨 主题功能</h2>
<h3 id="主题切换" tabindex="-1"><a class="header-anchor" href="#主题切换" aria-hidden="true">#</a> 主题切换</h3>
<p>现在支持多种主题颜色：</p>
<ul>
<li>蓝色主题</li>
<li>红色主题</li>
<li>绿色主题</li>
<li>橙色主题</li>
</ul>
<h3 id="全屏模式" tabindex="-1"><a class="header-anchor" href="#全屏模式" aria-hidden="true">#</a> 全屏模式</h3>
<p>点击右上角的全屏按钮可以进入全屏模式。</p>
<h3 id="返回顶部" tabindex="-1"><a class="header-anchor" href="#返回顶部" aria-hidden="true">#</a> 返回顶部</h3>
<p>滚动页面时会显示返回顶部按钮。</p>
<h2 id="📱-响应式设计" tabindex="-1"><a class="header-anchor" href="#📱-响应式设计" aria-hidden="true">#</a> 📱 响应式设计</h2>
<p>主题完全支持响应式设计，在手机、平板、桌面设备上都有良好的显示效果。</p>
<h2 id="🚀-性能优化" tabindex="-1"><a class="header-anchor" href="#🚀-性能优化" aria-hidden="true">#</a> 🚀 性能优化</h2>
<ul>
<li>图片懒加载</li>
<li>代码高亮优化</li>
<li>搜索索引优化</li>
<li>构建速度提升</li>
</ul>
<hr>
<blockquote>
<p>这些功能让 VuePress Theme Hope 2.0 成为了一个功能强大、易于使用的静态网站生成器！</p>
</blockquote>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>这是脚注的内容。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


