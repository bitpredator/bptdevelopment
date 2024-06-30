"use strict";(self.webpackChunkbptdevelopment=self.webpackChunkbptdevelopment||[]).push([[670],{2781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),s=t(1151);const r={sidebar_position:2},o="esx Deprecation",a={id:"FiveM/sharedevent/sharedevent",title:"esx:getSharedObject Deprecation",description:"Hello! This Event has been in ESX for around 5 years and should no longer be used since we now have way better ways to import the ESX object into your script!",source:"@site/docs/FiveM/sharedevent/sharedevent.md",sourceDirName:"FiveM/sharedevent",slug:"/FiveM/sharedevent/",permalink:"/bptdevelopment/docs/FiveM/sharedevent/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"es_extended",permalink:"/bptdevelopment/docs/FiveM/es_extended/"},next:{title:"On Drink",permalink:"/bptdevelopment/docs/FiveM/bpt_basicneeds/events/ondrink"}},d={},l=[{value:"Import",id:"import",level:2},{value:"Export",id:"export",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import-1",level:3},{value:"Export",id:"export-1",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"esx-deprecation",children:["esx",":getSharedObject"," Deprecation"]}),"\n",(0,i.jsx)(n.p,{children:"Hello! This Event has been in ESX for around 5 years and should no longer be used since we now have way better ways to import the ESX object into your script!"}),"\n",(0,i.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,i.jsxs)(n.p,{children:["The import can be used by simply adding this into the ",(0,i.jsx)(n.code,{children:"fxmanifest.lua"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"shared_script '@es_extended/imports.lua'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The import is the ",(0,i.jsx)(n.strong,{children:"best"})," and recommended way to use ESX within a script, this is because it will automatically sync data between ESX and the script,\nmeaing the script will have automatic knowlege of ESX.PlayerData aswell as if you are loaded in aswell as the ability to detect when you are Relogging and/or switching characters, meaning no vulnerable events needed, to having to grab the entire playerdata table every time you want to use it, its just there, and working and amazing."]}),"\n",(0,i.jsx)(n.h2,{id:"export",children:"Export"}),"\n",(0,i.jsx)(n.p,{children:"The Export can be simply used by doing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'ESX = exports["es_extended"]:getSharedObject()\n'})}),"\n",(0,i.jsx)(n.p,{children:"This Is great if your working on a multi-framework script so that the user does not have to change anything to switch between the frameworks.\nIt Also has the benifit of not requiring you to wait into it has recived the object and prevents Race conditions."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"We will show how exactly this is done in the following example. I don't recommend this script to anyone, but we'll show it anyway."}),"\n",(0,i.jsxs)(n.p,{children:["We will demonstrate this on the deprecated ",(0,i.jsx)(n.a,{href:"https://github.com/apoiat/ESX_CommunityService",children:"esx_communityservice"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"import-1",children:"Import"}),"\n",(0,i.jsxs)(n.p,{children:["First, we will show the ",(0,i.jsx)(n.strong,{children:"recommended"})," and most advantageous method, the import method."]}),"\n",(0,i.jsxs)(n.p,{children:["Delete lines ",(0,i.jsx)(n.code,{children:"13"})," and ",(0,i.jsx)(n.code,{children:"28"}),"-> ",(0,i.jsx)(n.code,{children:"33"})," from the ",(0,i.jsx)(n.code,{children:"client/main.lua"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"ESX = nil\n\nCitizen.CreateThread(function()\n\twhile ESX == nil do\n\t\tTriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)\n\t\tCitizen.Wait(0)\n\tend\nend)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Subsequently, we will also remove the lines ",(0,i.jsx)(n.code,{children:"1"})," and ",(0,i.jsx)(n.code,{children:"3"})," from the ",(0,i.jsx)(n.code,{children:"server/main.lua"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"ESX = nil\n\nTriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We then ",(0,i.jsx)(n.strong,{children:"import"})," the es_extended tables into the resource.\nThis Can be done by adding the follow line into the ",(0,i.jsx)(n.code,{children:"fxmanifest.lua"})," or the ",(0,i.jsx)(n.code,{children:"__resource.lua"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"shared_script '@es_extended/imports.lua'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"export-1",children:"Export"}),"\n",(0,i.jsxs)(n.p,{children:["As the second and last option, we will show the export method. We will again delete the same lines from the client and server file as the ",(0,i.jsx)(n.code,{children:"import"})," method above."]}),"\n",(0,i.jsxs)(n.p,{children:["However, unlike the import, we now export the ESX table into our resource.\nWe add this export to the very beginning of the ",(0,i.jsx)(n.code,{children:"client/main.lua"})," and the ",(0,i.jsx)(n.code,{children:"server/main.lua"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'ESX = exports["es_extended"]:getSharedObject()\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);