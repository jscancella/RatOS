"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9360],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=n(3117),r=(n(7294),n(3905));const i={},a="Troubleshooting",s={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"My steppers are running backwards!",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Voron V2.4 (BETA)",permalink:"/docs/printers/voron-v24"},next:{title:"Manual Firmware Compilation",permalink:"/docs/manual-firmware-compilation"}},l={},p=[{value:"My steppers are running backwards!",id:"my-steppers-are-running-backwards",level:2},{value:"Everytime i update my changes are gone.",id:"everytime-i-update-my-changes-are-gone",level:2},{value:"Klipper says the MCU is unable to connect",id:"klipper-says-the-mcu-is-unable-to-connect",level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",level:2},{value:"Unparsed config option &#39;config_path: ~/klipper_config&#39; detected in section [server]",id:"unparsed-config-option-config_path-klipper_config-detected-in-section-server",level:2},{value:"Section &#39;gcode_shell_command generate_shaper_graph_x&#39; (or others) is not a valid config section",id:"section-gcode_shell_command-generate_shaper_graph_x-or-others-is-not-a-valid-config-section",level:2},{value:"Connection to moonraker failed",id:"connection-to-moonraker-failed",level:2},{value:"Get help",id:"get-help",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h2",{id:"my-steppers-are-running-backwards"},"My steppers are running backwards!"),(0,r.kt)("p",null,"Refer to the stepper section at the top of printer.cfg, you can add or remove ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," in front of the dir_pin to reverse the direction of that particular stepper."),(0,r.kt)("h2",{id:"everytime-i-update-my-changes-are-gone"},"Everytime i update my changes are gone."),(0,r.kt)("p",null,"You're not supposed to change ",(0,r.kt)("em",{parentName:"p"},"any")," files inside the managed RatOS config/ folder. You should ",(0,r.kt)("em",{parentName:"p"},"only")," change your printer.cfg, if you need to change settings refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/includes-and-overrides"},"Inlcudes & Overrides Documentation")," section.\n",(0,r.kt)("img",{alt:"Hands off the RatOS Managed Config Folder!",src:n(7943).Z,width:"894",height:"590"})),(0,r.kt)("h2",{id:"klipper-says-the-mcu-is-unable-to-connect"},"Klipper says the MCU is unable to connect"),(0,r.kt)("p",null,"Double check your USB connection, try another cable (the one that comes with the board usually works), and check that your firmware was flashed correctly (refer to the guide for your board).\nIf you need to flash new firmware (for example autoflashing will not work if you upgrade klipper before flashing your board and it's properly connected), use the ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPILE_BINARIES")," macro to generate new firmware binaries for all supported boards. Then download the binary for your board from the ",(0,r.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder in the Machine tab, and flash it via SD card."),(0,r.kt)("h2",{id:"i-updated-klipper-and-now-i-get-an-error"},"I updated klipper and now i get an error!"),(0,r.kt)("p",null,"When you update klipper you might see an error that looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Firmware version mismatch between host and guest",src:n(262).Z,width:"849",height:"260"})),(0,r.kt)("p",null,"This is because klipper made changes to a part of the MCU firmware that we use. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware. For convenience, and ease of use, the newest firmware is compiled and put in the ",(0,r.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder which you can find in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MACHINE")," tab in Mainsail. You can use this to flash your MCU the same way you did initially, via SD Card. RatOS attempts to flash supported boards automatically when klipper is updated. If you're getting this error you're probably using a board which does not support automatic flashing via USB. It's also possible that you updated klipper without having your board flashed and connected. In that case, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPILE_BINARIES")," macro to generate new firmware binaries for all supported boards. Then download the binary for your board from the ",(0,r.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder in the Machine tab, and flash that via SD card."),(0,r.kt)("h2",{id:"unparsed-config-option-config_path-klipper_config-detected-in-section-server"},"Unparsed config option 'config_path: ~/klipper_config' detected in section ","[","server","]"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unparsed config option",src:n(9179).Z,width:"1000",height:"692"}),"\nThis happens because moonraker has moved ",(0,r.kt)("inlineCode",{parentName:"p"},"config_path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"log_path")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"[server]")," section to the ",(0,r.kt)("inlineCode",{parentName:"p"},"[file_manager]")," section. You can fix this by moving those to options into the ",(0,r.kt)("inlineCode",{parentName:"p"},"[file_manager]")," (create it if it doesn't already exist) in moonraker.conf."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"[server]\nhost = 0.0.0.0\nport = 7125\nenable_debug_logging = False\nconfig_path = ~/klipper_config\nlog_path = ~/klipper_logs\n")),(0,r.kt)("p",null,"becomes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"[server]\nhost = 0.0.0.0\nport = 7125\nenable_debug_logging = False\n\n[file_manager]\nconfig_path = ~/klipper_config\nlog_path = ~/klipper_logs\n")),(0,r.kt)("p",null,"You may have to ssh into your raspberry pi and edit the file with nano:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh pi@ratos.local\nnano ~/klipper_config/moonraker.conf\n")),(0,r.kt)("p",null,"Use ctrl+o to write your changes to moonraker.conf and then ctrl+x to exit nano. Then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl restart moonraker\n")),(0,r.kt)("p",null,"And you should be back in action."),(0,r.kt)("h2",{id:"section-gcode_shell_command-generate_shaper_graph_x-or-others-is-not-a-valid-config-section"},"Section 'gcode_shell_command generate_shaper_graph_x' (or others) is not a valid config section"),(0,r.kt)("p",null,"This happens if you hard reset klipper through mainsail, to relink the extensions go to the configurator at ",(0,r.kt)("a",{parentName:"p",href:"http://ratos.local/configure"},"http://ratos.local/configure"),', click the "Actions" dropdown menu in the top right and pick "Symlink klippy extensions". Then go back to mainsail and restart the klipper service by clicking on the power icon in the top right corner, then the refresh icon next to "Klipper" under "Service controls". You should now be back in action. '),(0,r.kt)("h2",{id:"connection-to-moonraker-failed"},"Connection to moonraker failed"),(0,r.kt)("p",null,"If you see the mainsail interface but you get an error about the connecting to moonraker, the connection to the pi is fine, but you're using a non standard IPv4 or IPv6 range that is not whitelisted in moonraker (only standard local ip ranges are whitelisted for security reasons). Try using the ip address of your pi (look it up in your routers admin interface) instead of ratos.local, or fix it by adding your IP range in CIDR notation to the ",(0,r.kt)("inlineCode",{parentName:"p"},"[authorization]")," section in ~/klipper_config/moonraker.conf on the pi. You can do that through SSH, by running: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh ratos.local\nnano ~/klipper_config/moonraker.conf\nsudo systemctl restart moonraker\n")),(0,r.kt)("p",null,"Alternatively you can delete the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"[authorization]")," section, which will allow anyone to connect to moonraker (this is insecure, so do not do this if your network is open to - our your pi is reachable by - the outside world)"),(0,r.kt)("h2",{id:"get-help"},"Get help"),(0,r.kt)("p",null,"For further support check out the RatOS-support and klipper channels on Discord. Use the invite link below to join."),(0,r.kt)("a",{href:"https://discord.gg/ratrig",class:"button button--primary"},"Join the Unnofficial RatRig Discord Community"))}u.isMDXComponent=!0},7943:function(e,t,n){t.Z=n.p+"assets/images/config-folder-783bb1478f027bfd6ad4aab7505bc287.png"},262:function(e,t,n){t.Z=n.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"},9179:function(e,t,n){t.Z=n.p+"assets/images/moonraker_unparsed_config-eb4c0f2b6c16094920135b33fe1192f3.png"}}]);