"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34536],{24128:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>c,data:()=>a});var i=o(6254);const d={},c=(0,o(58079).A)(d,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"schneider-electric-meg5126-0300-meg5171-0000",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#schneider-electric-meg5126-0300-meg5171-0000"},[(0,i.Lk)("span",null,"Schneider Electric MEG5126-0300/MEG5171-0000")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"MEG5126-0300/MEG5171-0000")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Schneider Electric")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Merten MEG5171 PlusLink Dimmer insert with Merten Wiser System M Push Button (2fold)")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"light (state, brightness, level_config), ballast_minimum_level, ballast_maximum_level, dimmer_mode, indicator_mode, switch_actions")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MEG5126-0300-MEG5171-0000.png",alt:"Schneider Electric MEG5126-0300/MEG5171-0000"})])],-1))])]),t[9]||(t[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>level_config</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h3 id="ballast-minimum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-minimum-level-numeric"><span>Ballast minimum level (numeric)</span></a></h3><p>Specifies the minimum light output of the ballast. Value can be found in the published state on the <code>ballast_minimum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_minimum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_minimum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="ballast-maximum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-maximum-level-numeric"><span>Ballast maximum level (numeric)</span></a></h3><p>Specifies the maximum light output of the ballast. Value can be found in the published state on the <code>ballast_maximum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_maximum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_maximum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="dimmer-mode-enum" tabindex="-1"><a class="header-anchor" href="#dimmer-mode-enum"><span>Dimmer mode (enum)</span></a></h3><p>Sets dimming mode to autodetect or fixed RC/RL/RL_LED mode (max load is reduced in RL_LED). Value can be found in the published state on the <code>dimmer_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;dimmer_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;dimmer_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>auto</code>, <code>rc</code>, <code>rl</code>, <code>rl_led</code>.</p><h3 id="indicator-mode-enum-right-endpoint" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum-right-endpoint"><span>Indicator mode (enum, right endpoint)</span></a></h3><p>Set Indicator Mode for right switch.. Value can be found in the published state on the <code>indicator_mode_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode_right&quot;: NEW_VALUE}</code>. The possible values are: <code>reverse_with_load</code>, <code>consistent_with_load</code>, <code>always_off</code>, <code>always_on</code>.</p><h3 id="indicator-mode-enum-left-endpoint" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum-left-endpoint"><span>Indicator mode (enum, left endpoint)</span></a></h3><p>Set Indicator Mode for left switch.. Value can be found in the published state on the <code>indicator_mode_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode_left&quot;: NEW_VALUE}</code>. The possible values are: <code>reverse_with_load</code>, <code>consistent_with_load</code>, <code>always_off</code>, <code>always_on</code>.</p><h3 id="switch-actions-enum-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-right-endpoint"><span>Switch actions (enum, right endpoint)</span></a></h3><p>Set Switch Action for right Button.. Value can be found in the published state on the <code>switch_actions_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_right&quot;: NEW_VALUE}</code>. The possible values are: <code>light</code>, <code>light_opposite</code>, <code>dimmer</code>, <code>dimmer_opposite</code>, <code>standard_shutter</code>, <code>standard_shutter_opposite</code>, <code>schneider_shutter</code>, <code>schneider_shutter_opposite</code>, <code>scene</code>, <code>toggle_light</code>, <code>toggle_dimmer</code>, <code>alternate_light</code>, <code>alternate_dimmer</code>, <code>not_used</code>.</p><h3 id="switch-actions-enum-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-left-endpoint"><span>Switch actions (enum, left endpoint)</span></a></h3><p>Set Switch Action for left Button.. Value can be found in the published state on the <code>switch_actions_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_left&quot;: NEW_VALUE}</code>. The possible values are: <code>light</code>, <code>light_opposite</code>, <code>dimmer</code>, <code>dimmer_opposite</code>, <code>standard_shutter</code>, <code>standard_shutter_opposite</code>, <code>schneider_shutter</code>, <code>schneider_shutter_opposite</code>, <code>scene</code>, <code>toggle_light</code>, <code>toggle_dimmer</code>, <code>alternate_light</code>, <code>alternate_dimmer</code>, <code>not_used</code>.</p>',19))])}]]),a=JSON.parse('{"path":"/devices/MEG5126-0300_MEG5171-0000.html","title":"Schneider Electric MEG5126-0300/MEG5171-0000 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric MEG5126-0300/MEG5171-0000 control via MQTT","description":"Integrate your Schneider Electric MEG5126-0300/MEG5171-0000 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Ballast minimum level (numeric)","slug":"ballast-minimum-level-numeric","link":"#ballast-minimum-level-numeric","children":[]},{"level":3,"title":"Ballast maximum level (numeric)","slug":"ballast-maximum-level-numeric","link":"#ballast-maximum-level-numeric","children":[]},{"level":3,"title":"Dimmer mode (enum)","slug":"dimmer-mode-enum","link":"#dimmer-mode-enum","children":[]},{"level":3,"title":"Indicator mode (enum, right endpoint)","slug":"indicator-mode-enum-right-endpoint","link":"#indicator-mode-enum-right-endpoint","children":[]},{"level":3,"title":"Indicator mode (enum, left endpoint)","slug":"indicator-mode-enum-left-endpoint","link":"#indicator-mode-enum-left-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, right endpoint)","slug":"switch-actions-enum-right-endpoint","link":"#switch-actions-enum-right-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, left endpoint)","slug":"switch-actions-enum-left-endpoint","link":"#switch-actions-enum-left-endpoint","children":[]}]}],"git":{"updatedTime":1741602197000},"filePathRelative":"devices/MEG5126-0300_MEG5171-0000.md"}')}}]);