(this["webpackJsonplive-streamers"]=this["webpackJsonplive-streamers"]||[]).push([[0],{21:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(12),c=a.n(l),s=(a(26),a(27),a(6)),i=a.n(s),o=a(19),h=a(10),u=a(13),m=a(14),d=a(20),p=a(18),v=a(46),f=a(47),g=a(48),w=a(49),E=a(52),C=a(40),_=a(41),b=a(42),x=a(43),k=a(44),y=a(45),N=(a(29),function(e){var t=e.user_name,a=e.title,n=e.viewer_count,l=e.url,c=e.profile_image_url,s=e.changeChannel;return r.a.createElement("div",null,r.a.createElement(C.a,{className:"ml-2 mr-2 mb-1"},r.a.createElement(E.a,{onClick:function(){return s(l)}},r.a.createElement(_.a,{top:!0,width:"100%",src:c,alt:"Profile Image"}),r.a.createElement(b.a,null,r.a.createElement(x.a,null,t),r.a.createElement(k.a,null,a),r.a.createElement(y.a,null,"Viewers: ".concat(n))))))}),O=(a(33),function(e){var t=e.liveChannelsStream,a=e.liveChannelsProfile,n=e.changeChannel;return r.a.createElement(v.a,{color:"dark",dark:!0,className:"fixed-top flex-md-nowrap p-0 shadow"},r.a.createElement(f.a,null,r.a.createElement(g.a,{className:"col-6"},r.a.createElement(w.a,{href:"https://dzrana.github.io/live-streamers/",className:"col-sm-3 col-md-2 mr-0"},"Live Streamers")),r.a.createElement(g.a,{className:"col-6"},r.a.createElement("div",{className:"d-xl-none dropdown"},r.a.createElement(E.a,{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Streamers"),r.a.createElement("div",{className:"dropdown-menu bg-dark sidebar streamers","aria-labelledby":"dropdownMenuButton"},r.a.createElement("ul",{className:"nav flex-column"},t.map((function(e,l){return a.length===t.length?r.a.createElement(N,{key:t[l].id,user_name:t[l].user_name,title:t[l].title,viewer_count:t[l].viewer_count,url:"https://www.twitch.tv/".concat(t[l].user_name.toLowerCase()),profile_image_url:a[l].profile_image_url,changeChannel:n}):r.a.createElement("h1",{key:t[l].id},"LOADING!")}))))))))}),j=a(50),S=(a(34),function(e){var t=e.liveChannelsStream,a=e.liveChannelsProfile,n=e.changeChannel;return r.a.createElement(j.a,{className:"col-md-2 bg-dark sidebar"},r.a.createElement("div",{className:"sidebar-sticky"},r.a.createElement("ul",{className:"nav flex-column"},t.map((function(e,l){return a.length===t.length?r.a.createElement(N,{key:t[l].id,user_name:t[l].user_name,title:t[l].title,viewer_count:t[l].viewer_count,url:"https://www.twitch.tv/".concat(t[l].user_name.toLowerCase()),profile_image_url:a[l].profile_image_url,changeChannel:n}):r.a.createElement("h1",{key:t[l].id},"LOADING!")})))))}),R=a(17),B=a.n(R),z=a(51),I="4pa4htam4huynxlz1hbq15jnrs7clq",P=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).changeChannel=function(t){e.setState({currentChannel:t})},e.state={liveChannelsStream:[],liveChannelsProfile:[],currentChannel:""},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(i.a.mark((function e(){var t,a,n,r,l,c,s,u,m,d,p,v=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",a=[],n="Bearer ".concat(document.location.hash.substring(14,44)),e.prev=3,e.next=6,fetch("https://api.twitch.tv/helix/users",{headers:{Authorization:n,"Client-ID":I}});case 6:return r=e.sent,e.next=9,r.json();case 9:l=e.sent,t=l.data[0].id,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log("ERROR BRO: ",e.t0);case 16:return e.prev=16,e.next=19,fetch("https://api.twitch.tv/helix/users/follows?from_id=".concat(t,"&first=100"),{headers:{Authorization:n,"Client-ID":I}});case 19:return c=e.sent,e.next=22,c.json();case 22:s=e.sent,u=Object(o.a)(s.data);try{for(u.s();!(m=u.n()).done;)d=m.value,a.push(d.to_id)}catch(f){u.e(f)}finally{u.f()}e.next=30;break;case 27:e.prev=27,e.t1=e.catch(16),console.log("ERROR BRO: ",e.t1);case 30:(p=function(){var e=Object(h.a)(i.a.mark((function e(){var t,r,l,c,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,t="https://api.twitch.tv/helix/streams?user_id=",r=0;r<a.length;r++)r!==a.length-1?t+="".concat(a[r],"&user_id="):t+=a[r];return e.next=5,fetch(t,{headers:{Authorization:n,"Client-ID":I}});case 5:return l=e.sent,e.next=8,l.json();case 8:for(c=e.sent,v.setState({liveChannelsStream:c.data}),t="https://api.twitch.tv/helix/users?login=",s=v.state.liveChannelsStream,o=0;o<s.length;o++)o!==s.length-1?t+="".concat(s[o].user_name,"&login="):t+=s[o].user_name;return e.next=15,fetch(t,{headers:{Authorization:n,"Client-ID":I}});case 15:return l=e.sent,e.next=18,l.json();case 18:c=e.sent,v.setState({liveChannelsProfile:c.data}),setTimeout(p,12e3),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.log("ERROR BRO: ",e.t0);case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}())();case 32:case"end":return e.stop()}}),e,null,[[3,13],[16,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.liveChannelsStream,a=e.liveChannelsProfile,n=e.currentChannel;return""===document.location.hash?r.a.createElement(z.a,{className:"d-flex justify-content-center align-items-center login"},r.a.createElement("a",{href:"https://id.twitch.tv/oauth2/authorize?client_id=".concat(I,"&redirect_uri=https://dzrana.github.io/live-streamers/&response_type=token&scope=channel_feed_read")},r.a.createElement(E.a,{className:"bg-dark"},"Login"))):r.a.createElement("div",null,r.a.createElement(O,{liveChannelsStream:t,liveChannelsProfile:a,changeChannel:this.changeChannel}),r.a.createElement(z.a,{fluid:!0},r.a.createElement(f.a,{className:"pt-5"},r.a.createElement(g.a,{className:"d-none d-xl-block "},r.a.createElement(S,{liveChannelsStream:t,liveChannelsProfile:a,changeChannel:this.changeChannel})),r.a.createElement(g.a,null,r.a.createElement(B.a,{url:n,controls:!0,playing:!0,width:"63vw",height:"94vh"})),r.a.createElement(g.a,null,n&&r.a.createElement("iframe",{title:"chat",frameBorder:"0",scrolling:"yes",id:"chat_embed",src:"https://www.twitch.tv/embed/".concat(n.substring(22),"/chat?darkpopout"),width:"100%",height:"100%"})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.a8178032.chunk.js.map