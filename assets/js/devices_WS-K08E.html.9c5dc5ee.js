"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47455],{5843:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>c});var i=o(6254);const a={},d=(0,o(58079).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[11]||(t[11]=(0,i.Lk)("h1",{id:"aqara-ws-k08e",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#aqara-ws-k08e"},[(0,i.Lk)("span",null,"Aqara WS-K08E")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"WS-K08E")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Aqara"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Light switch H2 EU (double rocker)")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"power, current, energy, led_indicator, flip_indicator_light, switch (state), device_temperature, power_outage_count, power_on_behavior, operation_mode, lock_relay, multi_click, action")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WS-K08E.png",alt:"Aqara WS-K08E"})])],-1))])]),t[12]||(t[12]=(0,i.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,i.Lk)("span",null,"OTA updates")])],-1)),(0,i.Lk)("p",null,[t[8]||(t[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,i.eW)("."))]),t[13]||(t[13]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[10]||(t[10]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,i.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;energy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="led-indicator-binary" tabindex="-1"><a class="header-anchor" href="#led-indicator-binary"><span>Led indicator (binary)</span></a></h3><p>LED indicator. Value can be found in the published state on the <code>led_indicator</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_indicator&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_indicator&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led indicator is ON, if <code>OFF</code> OFF.</p><h3 id="flip-indicator-light-binary" tabindex="-1"><a class="header-anchor" href="#flip-indicator-light-binary"><span>Flip indicator light (binary)</span></a></h3><p>After turn on, the indicator light turns on while switch is off, and vice versa. Value can be found in the published state on the <code>flip_indicator_light</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;flip_indicator_light&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;flip_indicator_light&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> flip indicator light is ON, if <code>OFF</code> OFF.</p><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint"><span>Switch (left endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint"><span>Switch (right endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric"><span>Device temperature (numeric)</span></a></h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric"><span>Power outage count (numeric)</span></a></h3><p>Number of power outages (since last pairing). Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>previous</code>, <code>off</code>, <code>inverted</code>.</p><h3 id="operation-mode-enum-left-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-left-endpoint"><span>Operation mode (enum, left endpoint)</span></a></h3><p>Decoupled mode for left switch. Value can be found in the published state on the <code>operation_mode_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_left&quot;: NEW_VALUE}</code>. The possible values are: <code>decoupled</code>, <code>control_relay</code>.</p><h3 id="operation-mode-enum-right-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-right-endpoint"><span>Operation mode (enum, right endpoint)</span></a></h3><p>Decoupled mode for right switch. Value can be found in the published state on the <code>operation_mode_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_right&quot;: NEW_VALUE}</code>. The possible values are: <code>decoupled</code>, <code>control_relay</code>.</p><h3 id="lock-relay-binary-left-endpoint" tabindex="-1"><a class="header-anchor" href="#lock-relay-binary-left-endpoint"><span>Lock relay (binary, left endpoint)</span></a></h3><p>Lock left switch. Value can be found in the published state on the <code>lock_relay_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lock_relay_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lock_relay_left&quot;: NEW_VALUE}</code>. If value equals <code>true</code> lock relay is ON, if <code>false</code> OFF.</p><h3 id="lock-relay-binary-right-endpoint" tabindex="-1"><a class="header-anchor" href="#lock-relay-binary-right-endpoint"><span>Lock relay (binary, right endpoint)</span></a></h3><p>Lock right switch. Value can be found in the published state on the <code>lock_relay_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lock_relay_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lock_relay_right&quot;: NEW_VALUE}</code>. If value equals <code>true</code> lock relay is ON, if <code>false</code> OFF.</p><h3 id="multi-click-binary-left-down-endpoint" tabindex="-1"><a class="header-anchor" href="#multi-click-binary-left-down-endpoint"><span>Multi click (binary, left_down endpoint)</span></a></h3><p>Multi-click mode for left down button. Value can be found in the published state on the <code>multi_click_left_down</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;multi_click_left_down&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;multi_click_left_down&quot;: NEW_VALUE}</code>. If value equals <code>true</code> multi click is ON, if <code>false</code> OFF.</p><h3 id="multi-click-binary-right-down-endpoint" tabindex="-1"><a class="header-anchor" href="#multi-click-binary-right-down-endpoint"><span>Multi click (binary, right_down endpoint)</span></a></h3><p>Multi-click mode for right down button. Value can be found in the published state on the <code>multi_click_right_down</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;multi_click_right_down&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;multi_click_right_down&quot;: NEW_VALUE}</code>. If value equals <code>true</code> multi click is ON, if <code>false</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>hold_left</code>, <code>hold_left_down</code>, <code>hold_right</code>, <code>hold_right_down</code>, <code>single_left</code>, <code>single_left_down</code>, <code>single_right</code>, <code>single_right_down</code>, <code>double_left</code>, <code>double_left_down</code>, <code>double_right</code>, <code>double_right_down</code>, <code>release_left</code>, <code>release_left_down</code>, <code>release_right</code>, <code>release_right_down</code>.</p>',40))])}]]),c=JSON.parse('{"path":"/devices/WS-K08E.html","title":"Aqara WS-K08E control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara WS-K08E control via MQTT","description":"Integrate your Aqara WS-K08E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-01T20:02:57.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Led indicator (binary)","slug":"led-indicator-binary","link":"#led-indicator-binary","children":[]},{"level":3,"title":"Flip indicator light (binary)","slug":"flip-indicator-light-binary","link":"#flip-indicator-light-binary","children":[]},{"level":3,"title":"Switch (left endpoint)","slug":"switch-left-endpoint","link":"#switch-left-endpoint","children":[]},{"level":3,"title":"Switch (right endpoint)","slug":"switch-right-endpoint","link":"#switch-right-endpoint","children":[]},{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Power on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Operation mode (enum, left endpoint)","slug":"operation-mode-enum-left-endpoint","link":"#operation-mode-enum-left-endpoint","children":[]},{"level":3,"title":"Operation mode (enum, right endpoint)","slug":"operation-mode-enum-right-endpoint","link":"#operation-mode-enum-right-endpoint","children":[]},{"level":3,"title":"Lock relay (binary, left endpoint)","slug":"lock-relay-binary-left-endpoint","link":"#lock-relay-binary-left-endpoint","children":[]},{"level":3,"title":"Lock relay (binary, right endpoint)","slug":"lock-relay-binary-right-endpoint","link":"#lock-relay-binary-right-endpoint","children":[]},{"level":3,"title":"Multi click (binary, left_down endpoint)","slug":"multi-click-binary-left-down-endpoint","link":"#multi-click-binary-left-down-endpoint","children":[]},{"level":3,"title":"Multi click (binary, right_down endpoint)","slug":"multi-click-binary-right-down-endpoint","link":"#multi-click-binary-right-down-endpoint","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1741602197000},"filePathRelative":"devices/WS-K08E.md"}')}}]);