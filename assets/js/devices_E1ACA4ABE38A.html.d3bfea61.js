"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[58891],{47321:(e,t,s)=>{s.r(t),s.d(t,{comp:()=>a,data:()=>i});var o=s(6254);const n={},a=(0,s(58079).A)(n,[["render",function(e,t){const s=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[18]||(t[18]=(0,o.Lk)("h1",{id:"sengled-e1aca4abe38a",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#sengled-e1aca4abe38a"},[(0,o.Lk)("span",null,"Sengled E1ACA4ABE38A")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"E1ACA4ABE38A")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(s,{to:"/supported-devices/#v=Sengled"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Sengled")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Element downlight smart LED bulb")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"light (state, brightness)")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E1ACA4ABE38A.png",alt:"Sengled E1ACA4ABE38A"})])],-1))])]),t[19]||(t[19]=(0,o.Lk)("h2",{id:"device-type",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#device-type"},[(0,o.Lk)("span",null,"Device Type")])],-1)),(0,o.Lk)("p",null,[t[9]||(t[9]=(0,o.eW)("Sengled bulbs are Zigbee ")),(0,o.bF)(s,{to:"/advanced/zigbee/01_zigbee_network.html#end-device"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("end devices")]))),_:1}),t[10]||(t[10]=(0,o.eW)(", not ")),(0,o.bF)(s,{to:"/advanced/zigbee/01_zigbee_network.html#router"},{default:(0,o.k6)((()=>t[8]||(t[8]=[(0,o.eW)("routers")]))),_:1}),t[11]||(t[11]=(0,o.eW)(", and therefore will not extend the reach of your Zigbee network. For more information see the ")),t[12]||(t[12]=(0,o.Lk)("a",{href:"https://support.sengled.com/hc/en-us/articles/115010871308-Do-any-Sengled-Zigbee-devices-act-as-Zigbee-repeaters-",target:"_blank",rel:"noopener noreferrer"},"Sengled FAQ",-1)),t[13]||(t[13]=(0,o.eW)("."))]),t[20]||(t[20]=(0,o.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,o.Lk)("span",null,"OTA updates")])],-1)),(0,o.Lk)("p",null,[t[15]||(t[15]=(0,o.eW)("This device supports OTA updates, for more information see ")),(0,o.bF)(s,{to:"/guide/usage/ota_updates.html"},{default:(0,o.k6)((()=>t[14]||(t[14]=[(0,o.eW)("OTA updates")]))),_:1}),t[16]||(t[16]=(0,o.eW)("."))]),t[21]||(t[21]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(s,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[17]||(t[17]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[22]||(t[22]=(0,o.Fv)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition"><span>Transition</span></a></h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping"><span>Moving/stepping</span></a></h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',13))])}]]),i=JSON.parse('{"path":"/devices/E1ACA4ABE38A.html","title":"Sengled E1ACA4ABE38A control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sengled E1ACA4ABE38A control via MQTT","description":"Integrate your Sengled E1ACA4ABE38A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"headers":[{"level":2,"title":"Device Type","slug":"device-type","link":"#device-type","children":[]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]}]}],"git":{"updatedTime":1741602197000},"filePathRelative":"devices/E1ACA4ABE38A.md"}')}}]);