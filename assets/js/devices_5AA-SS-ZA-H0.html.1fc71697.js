"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8039],{31216:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>c,data:()=>o});var a=t(6254);const l={},c=(0,t(58079).A)(l,[["render",function(e,n){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n[8]||(n[8]=(0,a.Lk)("h1",{id:"leedarson-5aa-ss-za-h0",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#leedarson-5aa-ss-za-h0"},[(0,a.Lk)("span",null,"Leedarson 5AA-SS-ZA-H0")])],-1)),(0,a.Lk)("table",null,[n[6]||(n[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[n[2]||(n[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"5AA-SS-ZA-H0")],-1)),(0,a.Lk)("tr",null,[n[1]||(n[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Leedarson"},{default:(0,a.k6)((()=>n[0]||(n[0]=[(0,a.eW)("Leedarson")]))),_:1})])]),n[3]||(n[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Motion sensor")],-1)),n[4]||(n[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"occupancy, illuminance")],-1)),n[5]||(n[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/5AA-SS-ZA-H0.png",alt:"Leedarson 5AA-SS-ZA-H0"})])],-1))])]),n[9]||(n[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>n[7]||(n[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),n[10]||(n[10]=(0,a.Fv)('<ul><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li><li><p><code>illuminance_raw</code>: Expose the raw illuminance value. The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p>',6))])}]]),o=JSON.parse('{"path":"/devices/5AA-SS-ZA-H0.html","title":"Leedarson 5AA-SS-ZA-H0 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Leedarson 5AA-SS-ZA-H0 control via MQTT","description":"Integrate your Leedarson 5AA-SS-ZA-H0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-04-29T17:11:59.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]}]}],"git":{"updatedTime":1741602197000},"filePathRelative":"devices/5AA-SS-ZA-H0.md"}')}}]);