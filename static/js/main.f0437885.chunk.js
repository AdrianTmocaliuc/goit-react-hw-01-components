(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__3RH0y",description:"Profile_description__3Npip",name:"Profile_name__3BEHl",tag:"Profile_tag__35aDR",avatar:"Profile_avatar__3qYGX",stats:"Profile_stats__3Zc1f"}},function(e,a,t){e.exports={friendList:"FriendList_friendList__ZP1xr",isOnline:"FriendList_isOnline__2vGEr",isOfline:"FriendList_isOfline__2Qoo2",status:"FriendList_status__3WJxr",item:"FriendList_item__3Wx3A",avatar:"FriendList_avatar__2UC7f",name:"FriendList_name__wa-3A"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__1Mn1z",title:"Statistics_title__WKRjF",list:"Statistics_list__27lF6",item:"Statistics_item__3aYuh",label:"Statistics_label__1wk0Z",percentage:"Statistics_percentage__A7E8Q"}},function(e,a,t){e.exports={type:"TransactionHistory_type__4qEbB",transactionHistory:"TransactionHistory_transactionHistory__HEFTX",transactionItem:"TransactionHistory_transactionItem__128a0"}},,,,,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),i=t(9),s=t.n(i),r=(t(18),t(1)),d=t.n(r),l=t(0),o=function(e){var a=e.user,t=a.avatar,c=a.name,n=a.location,i=a.tag,s=a.stats;return Object(l.jsxs)("div",{className:d.a.profile,children:[Object(l.jsxs)("div",{className:d.a.description,children:[Object(l.jsx)("img",{src:t,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:d.a.avatar}),Object(l.jsx)("p",{className:d.a.name,children:c}),Object(l.jsxs)("p",{className:d.a.tag,children:["@",i]}),Object(l.jsx)("p",{className:d.a.location,children:n})]}),Object(l.jsxs)("ul",{className:d.a.stats,children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Followers"}),Object(l.jsx)("span",{className:d.a.quantity,children:s.followers})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Views"}),Object(l.jsx)("span",{className:d.a.quantity,children:s.views})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Likes"}),Object(l.jsx)("span",{className:d.a.quantity,children:s.likes})]})]})]})},b=t(3),p=t.n(b);var j=function(e){var a=e.stats;return Object(l.jsxs)("section",{className:p.a.statistics,children:[Object(l.jsx)("h2",{className:p.a.title,children:"Upload stats"}),Object(l.jsx)("ul",{className:p.a.list,children:a.map((function(e){var a=e.id,t=e.label,c=e.percentage;return Object(l.jsxs)("li",{className:p.a.item,style:{backgroundColor:"#".concat(Math.floor(16777215*Math.random()).toString(16))},children:[Object(l.jsx)("span",{className:p.a.label,children:t}),Object(l.jsxs)("span",{className:p.a.percentage,children:[c,"%"]})]},a)}))})]})},m=t(6),u=t(7),f=t(2),O=t.n(f),y=function(e){var a=e.name,t=e.avatar,c=e.isOnline;return Object(l.jsxs)("li",{className:O.a.item,children:[Object(l.jsx)("span",{className:"".concat(O.a.status," ").concat(c?O.a.isOnline:O.a.isOfline)}),Object(l.jsx)("img",{className:O.a.avatar,src:t,alt:a,width:"48"}),Object(l.jsx)("p",{className:O.a.name,children:a})]})},_=["id"],h=function(e){var a=e.friends;return Object(l.jsx)("ul",{className:O.a.friendList,children:a.map((function(e){var a=e.id,t=Object(u.a)(e,_);return Object(l.jsx)(y,Object(m.a)({},t),a)}))})},x=t(4),v=t.n(x),g=function(e){var a=e.type,t=e.amount,c=e.currency;return Object(l.jsxs)("tr",{className:v.a.transactionItem,children:[Object(l.jsx)("td",{className:v.a.type,children:a}),Object(l.jsx)("td",{children:t}),Object(l.jsx)("td",{children:c})]})},N=["id"],w=function(e){var a=e.items;return Object(l.jsxs)("table",{className:v.a.transactionHistory,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Amount"}),Object(l.jsx)("th",{children:"Currency"})]})}),Object(l.jsx)("tbody",{children:a.map((function(e){var a=e.id,t=Object(u.a)(e,N);return Object(l.jsx)(g,Object(m.a)({},t),a)}))})]})},L=t(10),S=t(11),F=t(12),P=t(13);var H=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{user:L}),Object(l.jsx)(j,{stats:S}),Object(l.jsx)(h,{friends:F}),Object(l.jsx)(w,{items:P})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(H,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.f0437885.chunk.js.map