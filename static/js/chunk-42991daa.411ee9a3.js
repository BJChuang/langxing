(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42991daa"],{"16b1":function(e,t,n){"use strict";n("aa83")},"7abe":function(e,t,n){"use strict";n.r(t);var a=n("1da1"),c=(n("96cf"),n("ac1f"),n("5319"),n("7a23")),o=n("afbc"),i=n("79f6"),u=n("dfe3"),l=n("a1e9"),r=n("5c40"),E=function(e){return Object(c["B"])("data-v-0f7bdbd3"),e=e(),Object(c["z"])(),e},b={class:"contation"},s=E((function(){return Object(c["i"])("h3",null,"蒜苗iOS(TestFlight)名额有限，仅支持付费用户且到期时间大于30天。",-1)})),O=E((function(){return Object(c["i"])("p",{class:"payText"},"支付后刷新此页面获取IOS下载方式",-1)})),p=Object(c["k"])({setup:function(e){var t=Object(l["l"])(),n=Object(l["l"])(),E=Object(l["l"])(!1),p=function(){localStorage.clear(),o["a"].replace("/index")},j=function(){o["a"].push("/detail")},d=function(){console.log(1),window.location.href="mailto:hi@suanmiao.app?subject=%E8%8E%B7%E5%8F%96iOS%E9%82%80%E8%AF%B7%E9%93%BE%E6%8E%A5&body=%E8%B4%A6%E5%8F%B7%3A%20%3C%E8%AF%B7%E6%8F%90%E4%BE%9B%E6%82%A8%E7%9A%84%E8%92%9C%E8%8B%97%E8%B4%A6%E5%8F%B7%3E%20%0A%E6%8E%A5%E6%94%B6iOS%E7%9A%84%E9%82%AE%E7%AE%B1%3A%20%3C%E8%AF%B7%E6%8F%90%E4%BE%9B%E6%8E%A5%E6%94%B6TestFlight%E9%82%80%E8%AF%B7%E7%9A%84%E9%82%AE%E7%AE%B1%3E"};return Object(r["C"])(Object(a["a"])(regeneratorRuntime.mark((function e(){var a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["c"])({Token:localStorage.getItem("u_token")});case 2:return a=e.sent,t.value=a,e.next=6,Object(i["b"])({Token:localStorage.getItem("u_token"),Count:1});case 6:c=e.sent,n.value=c.OrderList.length,console.log(n.value),console.log(n.value>0),console.log(1e3*t.value.EnterpriseQuantity-(new Date).getTime()>2592e6),n.value>0&&(1e3*t.value.ExpiredAt-(new Date).getTime()>2592e6||1e3*t.value.EnterpriseQuantity-(new Date).getTime()>2592e6)&&(console.log("opop"),E.value=!0);case 12:case"end":return e.stop()}}),e)})))),function(e,n){return Object(c["y"])(),Object(c["h"])("div",b,[s,t.value?(Object(c["y"])(),Object(c["h"])(c["a"],{key:0},[Object(c["i"])("p",null,Object(c["H"])(t.value.Mobile),1),Object(c["i"])("p",null,Object(c["H"])(t.value.ExpiredAt?"黄金VIP":"钻石VIP")+"："+Object(c["H"])(t.value.ExpiredAt?Object(c["I"])(u["a"]).formatTime(new Date(1e3*t.value.ExpiredAt),"-",0):Object(c["I"])(u["a"]).formatTime(new Date(1e3*t.value.EnterpriseQuantity),"-",0)),1)],64)):Object(c["g"])("",!0),Object(c["i"])("button",{onClick:n[0]||(n[0]=function(e){return E.value?d():j()})},Object(c["H"])(E.value?"请提供您的账号发送邮件到hi@suanmiao.app 获取IOS邀请链接":"续费VIP"),1),O,Object(c["i"])("h2",{onClick:p},"退出")])}}}),j=(n("16b1"),n("6b0d")),d=n.n(j);const f=d()(p,[["__scopeId","data-v-0f7bdbd3"]]);t["default"]=f},aa83:function(e,t,n){}}]);