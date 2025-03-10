"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[28140],{32379:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>a,data:()=>l});var n=t(6254);const o={},a=(0,t(58079).A)(o,[["render",function(e,i){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[i[8]||(i[8]=(0,n.Lk)("h1",{id:"tuya-ctl-r1-ty-zigbee",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#tuya-ctl-r1-ty-zigbee"},[(0,n.Lk)("span",null,"Tuya CTL-R1-TY-Zigbee")])],-1)),(0,n.Lk)("table",null,[i[6]||(i[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[i[2]||(i[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"CTL-R1-TY-Zigbee")],-1)),(0,n.Lk)("tr",null,[i[1]||(i[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,n.k6)((()=>i[0]||(i[0]=[(0,n.eW)("Tuya")]))),_:1})])]),i[3]||(i[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"24G radar human presence motion sensor.")],-1)),i[4]||(i[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"illuminance, presence, presence_sensitivity, detection_range, detection_delay, illuminance_treshold_max, illuminance_treshold_min, presence_illuminance_switch, light_switch, light_linkage, detection_method, indicator_light, identify")],-1)),i[5]||(i[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/CTL-R1-TY-Zigbee.png",alt:"Tuya CTL-R1-TY-Zigbee"})])],-1))])]),i[9]||(i[9]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>i[7]||(i[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),i[10]||(i[10]=(0,n.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="presence-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#presence-sensitivity-numeric"><span>Presence sensitivity (numeric)</span></a></h3><p>Presence sensitivity. Value can be found in the published state on the <code>presence_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="detection-range-numeric" tabindex="-1"><a class="header-anchor" href="#detection-range-numeric"><span>Detection range (numeric)</span></a></h3><p>Detection range. Value can be found in the published state on the <code>detection_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_range&quot;: NEW_VALUE}</code>. The minimal value is <code>1.5</code> and the maximum value is <code>4.5</code>. The unit of this value is <code>m</code>.</p><h3 id="detection-delay-numeric" tabindex="-1"><a class="header-anchor" href="#detection-delay-numeric"><span>Detection delay (numeric)</span></a></h3><p>Presence detection delay. Value can be found in the published state on the <code>detection_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>600</code>. The unit of this value is <code>s</code>.</p><h3 id="illuminance-treshold-max-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-treshold-max-numeric"><span>Illuminance treshold max (numeric)</span></a></h3><p>The max illumiance threshold to turn on the light. Value can be found in the published state on the <code>illuminance_treshold_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_treshold_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2000</code>. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-treshold-min-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-treshold-min-numeric"><span>Illuminance treshold min (numeric)</span></a></h3><p>The min illumiance threshold to turn on the light. Value can be found in the published state on the <code>illuminance_treshold_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_treshold_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2000</code>. The unit of this value is <code>lx</code>.</p><h3 id="presence-illuminance-switch-binary" tabindex="-1"><a class="header-anchor" href="#presence-illuminance-switch-binary"><span>Presence illuminance switch (binary)</span></a></h3><p>Whether to enable &#39;light_switch&#39; illumination is between min/max threshold. Value can be found in the published state on the <code>presence_illuminance_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_illuminance_switch&quot;: NEW_VALUE}</code>. If value equals <code>true</code> presence illuminance switch is ON, if <code>false</code> OFF.</p><h3 id="light-switch-binary" tabindex="-1"><a class="header-anchor" href="#light-switch-binary"><span>Light switch (binary)</span></a></h3><p>This state will determine the light on/off based on the lighting threshold and presence sensing. Value can be found in the published state on the <code>light_switch</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> light switch is ON, if <code>OFF</code> OFF.</p><h3 id="light-linkage-binary" tabindex="-1"><a class="header-anchor" href="#light-linkage-binary"><span>Light linkage (binary)</span></a></h3><p>Light linkage. Value can be found in the published state on the <code>light_linkage</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_linkage&quot;: NEW_VALUE}</code>. If value equals <code>true</code> light linkage is ON, if <code>false</code> OFF.</p><h3 id="detection-method-enum" tabindex="-1"><a class="header-anchor" href="#detection-method-enum"><span>Detection method (enum)</span></a></h3><p>When &#39;only_move&#39; is used, presence will only be triggered when there is movement. Value can be found in the published state on the <code>detection_method</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_method&quot;: NEW_VALUE}</code>. The possible values are: <code>only_move</code>, <code>exist_move</code>.</p><h3 id="indicator-light-enum" tabindex="-1"><a class="header-anchor" href="#indicator-light-enum"><span>Indicator light (enum)</span></a></h3><p>Controls when the indicator light is turned on. Value can be found in the published state on the <code>indicator_light</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_light&quot;: NEW_VALUE}</code>. The possible values are: <code>presence</code>, <code>off</code>, <code>on</code>.</p><h3 id="identify-binary" tabindex="-1"><a class="header-anchor" href="#identify-binary"><span>Identify (binary)</span></a></h3><p>After turning on, the indicator light quickly flashes, used to locate devices. Value can be found in the published state on the <code>identify</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. If value equals <code>true</code> identify is ON, if <code>false</code> OFF.</p>',28))])}]]),l=JSON.parse('{"path":"/devices/CTL-R1-TY-Zigbee.html","title":"Tuya CTL-R1-TY-Zigbee control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya CTL-R1-TY-Zigbee control via MQTT","description":"Integrate your Tuya CTL-R1-TY-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-01T18:54:40.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Presence sensitivity (numeric)","slug":"presence-sensitivity-numeric","link":"#presence-sensitivity-numeric","children":[]},{"level":3,"title":"Detection range (numeric)","slug":"detection-range-numeric","link":"#detection-range-numeric","children":[]},{"level":3,"title":"Detection delay (numeric)","slug":"detection-delay-numeric","link":"#detection-delay-numeric","children":[]},{"level":3,"title":"Illuminance treshold max (numeric)","slug":"illuminance-treshold-max-numeric","link":"#illuminance-treshold-max-numeric","children":[]},{"level":3,"title":"Illuminance treshold min (numeric)","slug":"illuminance-treshold-min-numeric","link":"#illuminance-treshold-min-numeric","children":[]},{"level":3,"title":"Presence illuminance switch (binary)","slug":"presence-illuminance-switch-binary","link":"#presence-illuminance-switch-binary","children":[]},{"level":3,"title":"Light switch (binary)","slug":"light-switch-binary","link":"#light-switch-binary","children":[]},{"level":3,"title":"Light linkage (binary)","slug":"light-linkage-binary","link":"#light-linkage-binary","children":[]},{"level":3,"title":"Detection method (enum)","slug":"detection-method-enum","link":"#detection-method-enum","children":[]},{"level":3,"title":"Indicator light (enum)","slug":"indicator-light-enum","link":"#indicator-light-enum","children":[]},{"level":3,"title":"Identify (binary)","slug":"identify-binary","link":"#identify-binary","children":[]}]}],"git":{"updatedTime":1741602197000},"filePathRelative":"devices/CTL-R1-TY-Zigbee.md"}')}}]);