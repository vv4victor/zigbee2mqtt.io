"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84777],{83965:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>p,data:()=>o});var e=a(6254);const t={},p=(0,a(58079).A)(t,[["render",function(n,s){return(0,e.uX)(),(0,e.CE)("div",null,s[0]||(s[0]=[(0,e.Fv)('<h1 id="external-extensions" tabindex="-1"><a class="header-anchor" href="#external-extensions"><span>External extensions</span></a></h1><p>External extensions provide a way to extend Zigbee2MQTT behavior, they work identically to internal extensions.</p><p>To get familiar with the Extension framework, refer to the <a href="https://github.com/Koenkk/zigbee2mqtt/tree/master/lib/extension" target="_blank" rel="noopener noreferrer">source code of internal extensions</a>.</p><p>External extensions are stored in <code>data/external_extensions</code> folder and have to export a JavaScript Class that conforms to the <code>Extension</code> base class (see above link).</p><p>Example:</p><p>File: <code>data/external_extensions/my-first-extension.js</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">MyExampleExtension</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">zigbee<span class="token punctuation">,</span> mqtt<span class="token punctuation">,</span> state<span class="token punctuation">,</span> publishEntityState<span class="token punctuation">,</span> eventBus<span class="token punctuation">,</span> enableDisableExtension<span class="token punctuation">,</span> restartCallback<span class="token punctuation">,</span> addExtension<span class="token punctuation">,</span> settings<span class="token punctuation">,</span> logger</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>zigbee <span class="token operator">=</span> zigbee<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>mqtt <span class="token operator">=</span> mqtt<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>publishEntityState <span class="token operator">=</span> publishEntityState<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus <span class="token operator">=</span> eventBus<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>enableDisableExtension <span class="token operator">=</span> enableDisableExtension<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>restartCallback <span class="token operator">=</span> restartCallback<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>addExtension <span class="token operator">=</span> addExtension<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>settings <span class="token operator">=</span> settings<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>logger <span class="token operator">=</span> logger<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;Loaded  MyExampleExtension&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token doc-comment comment">/**</span>\n<span class="line">     * Called when the extension starts (on Zigbee2MQTT startup, or when the extension is saved at runtime)</span>\n<span class="line">     */</span></span>\n<span class="line">    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>mqtt<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;example/extension&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello from MyExampleExtension&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">        <span class="token comment">// All possible events can be seen here: https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/eventBus.ts</span></span>\n<span class="line"></span>\n<span class="line">        <span class="token comment">// Subscribe to MQTT messages</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">.</span><span class="token function">onMQTTMessage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Received MQTT message on topic &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>topic<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; with message &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token doc-comment comment">/**</span>\n<span class="line">     * Called when the extension stops (on Zigbee2MQTT shutdown, or when the extension is saved/removed at runtime)</span>\n<span class="line">     */</span></span>\n<span class="line">    <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">.</span><span class="token function">removeListeners</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyExampleExtension<span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The typing for the constructor parameters is as below:</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line">zigbee<span class="token operator">:</span> Zigbee<span class="token punctuation">,</span> <span class="token comment">// see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/zigbee.ts</span></span>\n<span class="line">mqtt<span class="token operator">:</span> <span class="token constant">MQTT</span><span class="token punctuation">,</span> <span class="token comment">// see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/mqtt.ts</span></span>\n<span class="line">state<span class="token operator">:</span> State<span class="token punctuation">,</span> <span class="token comment">// see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/state.ts</span></span>\n<span class="line">publishEntityState<span class="token operator">:</span> PublishEntityState<span class="token punctuation">,</span></span>\n<span class="line">eventBus<span class="token operator">:</span> EventBus<span class="token punctuation">,</span> <span class="token comment">// see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/eventBus.ts</span></span>\n<span class="line"><span class="token function-variable function">enableDisableExtension</span><span class="token operator">:</span> <span class="token punctuation">(</span>enable<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token function-variable function">restartCallback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token function-variable function">addExtension</span><span class="token operator">:</span> <span class="token punctuation">(</span>extension<span class="token operator">:</span> Extension<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">,</span></span>\n<span class="line">logger<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span> logger<span class="token punctuation">,</span> <span class="token comment">// see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/logger.ts</span></span>\n<span class="line">settings<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span> settings<span class="token punctuation">,</span> <span class="token comment">// see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/settings.ts</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <a href="https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/types/types.d.ts" target="_blank" rel="noopener noreferrer">https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/types/types.d.ts</a> for more typing details.</p><h2 id="extensions-list" tabindex="-1"><a class="header-anchor" href="#extensions-list"><span>Extensions list</span></a></h2><p>When Zigbee2MQTT starts it publishes <code>zigbee2mqtt/bridge/extensions</code> with payload <code>[{&quot;name&quot;: &quot;my-first-extension.js&quot;: &quot;code&quot;: &lt;HERE COMES YOUR EXTENSION SOURCE CODE&gt;}]</code> containing all the extensions loaded from the file system. The same message is also published when an extension changes at runtime (from one of the below actions), with the appropriately updated payload.</p><h2 id="save-extension" tabindex="-1"><a class="header-anchor" href="#save-extension"><span>Save extension</span></a></h2><p>To save an extension at runtime, send a message to <code>zigbee2mqtt/bridge/request/extension/save</code> with payload <code>{&quot;name&quot;: &quot;my-first-extension.js&quot;, &quot;code&quot;: &lt;HERE COMES YOUR EXTENSION SOURCE CODE&gt;}</code>. The code will be saved in <code>data/external_extensions/</code> in the file with the given name.</p><h2 id="remove-extension" tabindex="-1"><a class="header-anchor" href="#remove-extension"><span>Remove extension</span></a></h2><p>To remove an extension at runtime, send a message to <code>zigbee2mqtt/bridge/request/extension/remove</code> with payload <code>{&quot;name&quot;: &quot;my-first-extension.js&quot;}</code>. The file will be deleted from <code>data/external_extensions/</code>.</p>',16)]))}]]),o=JSON.parse('{"path":"/advanced/more/external_extensions.html","title":"External extensions","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebar":"auto"},"headers":[{"level":2,"title":"Extensions list","slug":"extensions-list","link":"#extensions-list","children":[]},{"level":2,"title":"Save extension","slug":"save-extension","link":"#save-extension","children":[]},{"level":2,"title":"Remove extension","slug":"remove-extension","link":"#remove-extension","children":[]}],"git":{"updatedTime":1741602197000},"filePathRelative":"advanced/more/external_extensions.md"}')}}]);