(function(o,s,P,e){"use strict";const c="https://raw.githubusercontent.com/Flashc0rd/BetterBG/main/bg/backgrounds.json",i=async()=>await(await fetch(c)).json(),u=n=>{let r=new Map;for(const a of n)r.set(a.uid,a);return r};var p=async()=>u(await i());const m=o.findByDisplayName("UserBanner",!1),{popoutBannerPremium:l}=o.findByProps("popoutBannerPremium");var d=n=>s.after("default",m,([{user:r}],a)=>{const t=n.get(r?.id)?.img;if(!(!a||r?.banner||!t))return a.props.style={"background-image":`url("${t}")`},a.props.className+=` ${l}`,a});const{avatarPositionPremium:f,avatarWrapperNormal:g}=o.findByProps("avatarPositionPremium"),h=o.findByDisplayName("Clickable").prototype;var y=n=>s.after("render",h,(r,a)=>{const t=a?.props?.children;if(!t?.props?.className?.includes?.(g))return;const B=e.findInReactTree(t,"src")?.split("/"),v=_.nth(B,-2);if(!!n.has(v))return a.props.children.props.className+=` ${f}`,a}),b=()=>{let n;return{onLoad:async()=>{const r=await p();n=[d(r),y(r)]},onUnload:()=>_.forEachRight(n,r=>r())}};return b})(cumcord.modules.webpack,cumcord.patcher,cumcord.modules.common,cumcord.utils);
