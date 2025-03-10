"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[83941],{7645:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>a,data:()=>s});var n=i(6254);const o={},a=(0,i(58079).A)(o,[["render",function(e,t){const i=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[11]||(t[11]=(0,n.Lk)("h1",{id:"philips-8719514440937-8719514440999",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#philips-8719514440937-8719514440999"},[(0,n.Lk)("span",null,"Philips 8719514440937/8719514440999")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"8719514440937/8719514440999")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(i,{to:"/supported-devices/#v=Philips"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Philips")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Hue Tap dial switch")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, action, action_direction, action_type, action_time, brightness, action_step_size")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/8719514440937-8719514440999.png",alt:"Philips 8719514440937/8719514440999"})])],-1))])]),t[12]||(t[12]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>The device can be set to pairing mode by removing the device&#39;s back cover. There is a small &quot;setup&quot; button next to the battery which must be pressed for a few seconds by using a paperclip or something similiar, which will bring the device into pairing mode. If this is a brand new device, hold button 1 for 3 sec to pair. If this does not work, holding down the top left (#1) button for approximately five seconds may put the device into pairing mode.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',4)),(0,n.Lk)("p",null,[t[8]||(t[8]=(0,n.eW)("This device supports OTA updates, for more information see ")),(0,n.bF)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,n.eW)("."))]),t[13]||(t[13]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[10]||(t[10]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,n.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_press</code>, <code>button_1_press_release</code>, <code>button_1_hold</code>, <code>button_1_hold_release</code>, <code>button_2_press</code>, <code>button_2_press_release</code>, <code>button_2_hold</code>, <code>button_2_hold_release</code>, <code>button_3_press</code>, <code>button_3_press_release</code>, <code>button_3_hold</code>, <code>button_3_hold_release</code>, <code>button_4_press</code>, <code>button_4_press_release</code>, <code>button_4_hold</code>, <code>button_4_hold_release</code>, <code>dial_rotate_left_step</code>, <code>dial_rotate_left_slow</code>, <code>dial_rotate_left_fast</code>, <code>dial_rotate_right_step</code>, <code>dial_rotate_right_slow</code>, <code>dial_rotate_right_fast</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>.</p><h3 id="action-direction-enum" tabindex="-1"><a class="header-anchor" href="#action-direction-enum"><span>Action direction (enum)</span></a></h3><p>Direction in which the dial was turned. Value can be found in the published state on the <code>action_direction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>right</code>, <code>left</code>.</p><h3 id="action-type-enum" tabindex="-1"><a class="header-anchor" href="#action-type-enum"><span>Action type (enum)</span></a></h3><p>Type of the rotation, value in the first message is <code>step</code> and in the next messages value is <code>rotate</code>. Value can be found in the published state on the <code>action_type</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>step</code>, <code>rotate</code>.</p><h3 id="action-time-numeric" tabindex="-1"><a class="header-anchor" href="#action-time-numeric"><span>Action time (numeric)</span></a></h3><p>value in seconds representing the amount of time the last action took. Value can be found in the published state on the <code>action_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="brightness-numeric" tabindex="-1"><a class="header-anchor" href="#brightness-numeric"><span>Brightness (numeric)</span></a></h3><p>Raw rotation state value of the dial which represents brightness from 0-255. Value can be found in the published state on the <code>brightness</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="action-step-size-numeric" tabindex="-1"><a class="header-anchor" href="#action-step-size-numeric"><span>Action step size (numeric)</span></a></h3><p>amount of steps the last action took on the dial exposed as a posive value from 0-255. Value can be found in the published state on the <code>action_step_size</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p>',17))])}]]),s=JSON.parse('{"path":"/devices/8719514440937_8719514440999.html","title":"Philips 8719514440937/8719514440999 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Philips 8719514440937/8719514440999 control via MQTT","description":"Integrate your Philips 8719514440937/8719514440999 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-08-31T11:26:27.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action direction (enum)","slug":"action-direction-enum","link":"#action-direction-enum","children":[]},{"level":3,"title":"Action type (enum)","slug":"action-type-enum","link":"#action-type-enum","children":[]},{"level":3,"title":"Action time (numeric)","slug":"action-time-numeric","link":"#action-time-numeric","children":[]},{"level":3,"title":"Brightness (numeric)","slug":"brightness-numeric","link":"#brightness-numeric","children":[]},{"level":3,"title":"Action step size (numeric)","slug":"action-step-size-numeric","link":"#action-step-size-numeric","children":[]}]}],"git":{"updatedTime":1741602197000},"filePathRelative":"devices/8719514440937_8719514440999.md"}')}}]);