(function(e){function t(t){for(var n,a,o=t[0],c=t[1],d=t[2],u=0,f=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,d||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0178":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"app"}},[r("v-content",[r("router-view")],1)],1)},i=[],a={name:"App",components:{},data:function(){return{}}},o=a,c=r("2877"),d=r("6544"),l=r.n(d),u=r("7496"),f=r("a75b"),m=Object(c["a"])(o,s,i,!1,null,null,null),v=m.exports;l()(m,{VApp:u["a"],VContent:f["a"]});var p=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[r("AddUserField"),e.hasUsers?r("UsersList"):e._e(),e.hasUsers?r("v-row",{staticClass:"pa-3",attrs:{justify:"end"}},[r("v-btn",{attrs:{depressed:"",tile:"",outlined:"","min-width":"130px",color:"primary",disabled:e.friends.inProcess||!e.hasChecked},on:{click:e.getFriends}},[e._v("Построить")])],1):e._e(),e.hasUsers?r("FriendsList"):e._e()],1)],1)],1)],1)},b=[],g=r("5530"),x=r("2f62"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("v-text-field",{attrs:{id:"addField",label:"ID пользователя","error-messages":e.users.errorText},scopedSlots:e._u([{key:"append",fn:function(){return[r("v-btn",{attrs:{type:"submit",depressed:"",tile:"",color:"primary","min-width":"130px",disabled:e.users.inProcess}},[e._v(" добавить ")])]},proxy:!0}])})],1)},k=[],y=(r("498a"),{computed:Object(g["a"])({},Object(x["d"])({users:function(e){return e.users}})),methods:Object(g["a"])({},Object(x["b"])("users",{addUser:"add"}),{submit:function(e){if(!this.users.inProcess){var t=e.target.elements.addField.value.trim();this.addUser({id:t})}}})}),O=y,T=r("8336"),j=r("4bd4"),C=r("8654"),V=Object(c["a"])(O,w,k,!1,null,null,null),I=V.exports;l()(V,{VBtn:T["a"],VForm:j["a"],VTextField:C["a"]});var E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{tile:""}},[r("v-card-title",[e._v("Пользователи")]),r("v-list",{staticClass:"pa-0"},[r("v-list-item-group",{attrs:{multiple:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._l(e.sortedByName,(function(t,n){return[r("v-list-item",{key:t.id,attrs:{value:t.id,"three-line":e.$vuetify.breakpoint.xsOnly},scopedSlots:e._u([{key:"default",fn:function(n){var s=n.active;return[r("v-list-item-content",[r("v-list-item-title",[e._v(" "+e._s(t.first_name)+" "+e._s(t.last_name)+" ")]),r("v-list-item-subtitle",[e._v(" Пол: "+e._s(e.userSex(t.id))+" | Возраст: "+e._s(e.userAge(t.id))+" | Друзей: "+e._s(e.friendsCount(t.id))+" ")])],1),r("v-list-item-action",{staticClass:"mr-1"},[e.$vuetify.breakpoint.smAndUp?r("v-checkbox",{attrs:{"input-value":s,"true-value":t.id,dense:""}}):e._e()],1),r("v-list-item-action",[r("v-btn",{attrs:{small:"",depressed:"",text:"",color:"red",value:t.id},on:{click:function(t){return e.deleteUser(t)}}},[e._v(" X ")])],1)]}}],null,!0)}),r("v-divider",{key:"divider-"+n})]}))],2)],1)],1)},W=[],F={computed:Object(g["a"])({},Object(x["d"])({users:function(e){return e.users}}),{},Object(x["c"])("users",{checkedIds:"checkedIds",userSex:"getSex",userAge:"getAge",friendsCount:"getFriendsCountValue",sortedByName:"sortedByName"}),{checked:{get:function(){return this.checkedIds},set:function(e){this.toggle({checkedIds:e})}}}),methods:Object(g["a"])({},Object(x["b"])("users",{toggle:"toggle",delete:"delete"}),{deleteUser:function(e){this.delete({id:e.currentTarget.value})}})},P=F,L=r("b0af"),D=r("99d9"),A=r("ac7c"),S=r("ce7e"),$=r("8860"),B=r("da13"),U=r("1800"),N=r("5d23"),R=r("1baa"),M=Object(c["a"])(P,E,W,!1,null,null,null),G=M.exports;l()(M,{VBtn:T["a"],VCard:L["a"],VCardTitle:D["c"],VCheckbox:A["a"],VDivider:S["a"],VList:$["a"],VListItem:B["a"],VListItemAction:U["a"],VListItemContent:N["a"],VListItemGroup:R["a"],VListItemSubtitle:N["b"],VListItemTitle:N["c"]});var J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.showWait?r("h3",[e._v(e._s(e.friends.waitText))]):e._e(),e.showErr?r("h3",[e._v(e._s(e.friends.errorText))]):e._e(),e.showList?r("v-card",{attrs:{tile:""}},[r("v-card-title",[e._v("Друзья")]),r("v-list",{staticClass:"pa-0"},[e._l(e.sortedFriends,(function(t,n){return[r("v-list-item",{key:t.id,staticClass:"sorted-colored",style:e.cssVars(t.isFriendOf.length),attrs:{dense:""},on:{click:function(r){return e.goToFriend(t.id)}}},[e._v(" "+e._s(t.first_name)+" "+e._s(t.last_name)+" ")]),r("v-divider",{key:"divider-"+n})]}))],2)],1):e._e()],1)},X=[],Y={computed:Object(g["a"])({},Object(x["d"])({friends:function(e){return e.friends}}),{},Object(x["c"])("friends",{sortedFriends:"sortedByName"}),{cssVars:function(){return function(e){return e<=6?{"--lightness":"".concat(100-10*e,"%")}:{"--lightness":"40%"}}},showWait:function(){return this.friends.waitText},showErr:function(){return this.friends.errorText&&!this.friends.waitText&&0==this.friends.list.length},showList:function(){return this.friends.list.length>0&&!this.friends.waitText&&!this.friends.errorText}}),methods:Object(g["a"])({},Object(x["b"])("friends",{getOne:"getData"}),{goToFriend:function(e){this.getOne({id:e}),this.$router.push({name:"friend",params:{id:e}})}})},q=Y,z=(r("5b87"),Object(c["a"])(q,J,X,!1,null,"7cd27ea2",null)),H=z.exports;l()(z,{VCard:L["a"],VCardTitle:D["c"],VDivider:S["a"],VList:$["a"],VListItem:B["a"]});var K={components:{AddUserField:I,UsersList:G,FriendsList:H},computed:Object(g["a"])({},Object(x["d"])({users:function(e){return e.users},friends:function(e){return e.friends}}),{},Object(x["c"])({hasChecked:"users/hasChecked"}),{hasUsers:function(){return this.users.list.length>0}}),methods:Object(g["a"])({},Object(x["b"])("friends",{getFriends:"add"}))},Q=K,Z=r("62ad"),ee=r("a523"),te=r("0fd9"),re=Object(c["a"])(Q,h,b,!1,null,null,null),ne=re.exports;l()(re,{VBtn:T["a"],VCol:Z["a"],VContainer:ee["a"],VRow:te["a"]});var se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[r("FriendCard")],1)],1)],1)],1)},ie=[],ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isFind?r("div",[r("v-card",{attrs:{tile:""}},[r("v-card-title",{staticClass:"display-1"},[e._v(" "+e._s(e.friend.first_name)+" "),e.$vuetify.breakpoint.xsOnly?r("br"):e._e(),e._v(" "+e._s(e.friend.last_name)+" ")]),r("v-card-subtitle",[e._v(" Дружит c: "+e._s(e.getNames(e.friend.isFriendOf))+" ")]),r("v-row",{staticClass:"mx-0",attrs:{justify:"center"}},[e.showPosts?r("v-card-title",[e._v(" Записи на стене ")]):e._e(),e.showWait?r("v-card-title",[e._v(" "+e._s(e.friends.waitWallText)+" ")]):e._e(),e.showErr?r("v-card-title",[e._v(" "+e._s(e.friends.errorWallText)+" ")]):e._e()],1),e.showPosts?r("v-window",{attrs:{"show-arrows":""}},e._l(e.friends.wallList,(function(t,n){return r("v-window-item",{key:"card-"+n,staticClass:"fill-height",class:{"px-12":e.$vuetify.breakpoint.smAndUp}},[r("v-card",{attrs:{"min-height":"500",flat:"",tile:""}},[r("v-row",{staticClass:"fill-height",attrs:{"mx-4":"",tag:"v-card-text"}},[r("v-card-text",[r("div",{staticClass:"text--primary"},[e._v(" "+e._s(e.getDate(t.date))+" ")]),t.post?r("div",[r("div",{staticClass:"text--primary"},[e._v(" Пост ")]),r("p",[e._v(e._s(t.post))])]):e._e(),t.repost?r("div",[r("div",{staticClass:"text--primary"},[e._v(" Репост ")]),r("p",[e._v(e._s(t.repost))])]):e._e()])],1)],1)],1)})),1):e._e()],1),r("v-row",{staticClass:"pa-3"},[r("v-btn",{attrs:{depressed:"",tile:"",outlined:"","min-width":"130px",color:"primary",to:{name:"users"},block:e.$vuetify.breakpoint.xsOnly}},[e._v("Назад к пользователям")])],1)],1):r("E404")},oe=[],ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Страница не найдена")]),r("hr"),e._v(" Начать с "),r("router-link",{attrs:{to:{path:"/"}}},[e._v("главной")])],1)},de=[],le={},ue=Object(c["a"])(le,ce,de,!1,null,null,null),fe=ue.exports,me={components:{E404:fe},computed:Object(g["a"])({},Object(x["d"])({friends:function(e){return e.friends},users:function(e){return e.users}}),{},Object(x["c"])({getFriendData:"friends/findData",getNames:"users/getNames"}),{id:function(){return this.$route.params.id},friend:function(){return this.getFriendData(this.id)},getDate:function(){return function(e){return new Date(1e3*e).toLocaleString()}},isFind:function(){return null!==this.friend},showWait:function(){return this.friends.waitWallText},showErr:function(){return this.friends.errorWallText&&!this.friends.waitWallText&&0==this.friends.wallList.length},showPosts:function(){return this.friends.wallList.length>0&&!this.friends.waitWallText&&!this.friends.errorWallText}})},ve=me,pe=r("f665"),he=r("1e6c"),_e=Object(c["a"])(ve,ae,oe,!1,null,null,null),be=_e.exports;l()(_e,{VBtn:T["a"],VCard:L["a"],VCardSubtitle:D["a"],VCardText:D["b"],VCardTitle:D["c"],VRow:te["a"],VWindow:pe["a"],VWindowItem:he["a"]});var ge={components:{FriendCard:be},computed:{}},xe=ge,we=Object(c["a"])(xe,se,ie,!1,null,null,null),ke=we.exports;l()(we,{VCol:Z["a"],VContainer:ee["a"],VRow:te["a"]}),n["a"].use(p["a"]);var ye=[{path:"/",redirect:"/users"},{name:"users",path:"/users",component:ne},{name:"friend",path:"/friend/:id",component:ke},{path:"*",component:fe}],Oe=new p["a"]({mode:"history",routes:ye}),Te=(r("99af"),r("4de4"),r("c740"),r("4160"),r("a15b"),r("d81d"),r("a434"),r("ac1f"),r("1276"),r("159b"),r("d871")),je="https://api.vk.com/method/";function Ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:je;return Te(r+e,t).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))}))}var Ve="ea77532eea77532eea77532e70ea070ed9eea77ea77532eb4050153d22b3696dcaabeb1";function Ie(e){return e.token&&(Ve=e.token),Ce("users.get?user_ids=".concat(e.id,"&fields=sex,bdate&access_token=").concat(Ve,"&v=5.103"))}function Ee(e){return e.token&&(Ve=e.token),Ce("friends.get?user_id=".concat(e.id,"&access_token=").concat(Ve,"&v=5.103"))}var We={namespaced:!0,state:{list:[],errorText:null,inProcess:!1},getters:{findInd:function(e){return function(t){return e.list.findIndex((function(e){return e.id==t}))}},isAdded:function(e,t){return function(e){return-1!=t.findInd(e)}},checked:function(e){return e.list.filter((function(e){return e.checked}))},hasChecked:function(e,t){return t.checked.length>0},checkedIds:function(e,t){return t.checked.map((function(e){return e.id}))},getSex:function(e,t){return function(r){var n=t.findInd(r),s=e.list[n].sex,i="н/д";switch(s){case 1:i="Ж";break;case 2:i="М";break}return i}},getAge:function(e,t){return function(r){var n=t.findInd(r),s=e.list[n].bdate;if(s){var i=s.split(".");if(i[2]){var a=i[2]+"."+i[1]+"."+i[0];return((new Date).getTime()-new Date(a))/315576e5|0}}return"н/д"}},getFriendsCountValue:function(e,t){return function(r){var n=t.findInd(r),s=e.list[n].friendsCount,i="н/д";return s&&(i=s),i}},getNames:function(e,t){return function(r){return r.map((function(r){var n=t.findInd(r);return"".concat(e.list[n].first_name," ").concat(e.list[n].last_name)})).join(", ")}},sortedByName:function(e){return _.orderBy(e.list,["first_name","last_name"],["asc","asc"])}},mutations:{add:function(e,t){var r=t.id,n=t.first_name,s=t.last_name,i=t.sex,a=t.bdate,o=t.friendsCount;e.list.push({id:r,first_name:n,last_name:s,sex:i,bdate:a,friendsCount:o,checked:!1}),e.errorText&&(e.errorText=null)},delete:function(e,t){e.list.splice(t,1)},check:function(e,t){e.list[t].checked=!0},clearAllChecked:function(e){e.list.forEach((function(e){return e.checked=!1}))},addErr:function(e,t){var r=t.error_msg;switch(r){case"Invalid user id":e.errorText="Пользователь не найден";break;case"Deleted":e.errorText="Пользователь удален";break;case"Is added":e.errorText="Пользователь уже добавлен";break;case"Banned":e.errorText="Пользователь заблокирован";break;default:e.errorText=errorMsg}},startProcess:function(e){e.inProcess=!0},stopProcess:function(e){e.inProcess=!1}},actions:{add:function(e,t){e.commit("startProcess"),Ie(t).then((function(r){if(r.response)if("deleted"===r.response[0].deactivated)e.commit("addErr",{error_msg:"Deleted"});else if("banned"===r.response[0].deactivated)e.commit("addErr",{error_msg:"Banned"});else if(e.getters.isAdded(r.response[0].id))e.commit("addErr",{error_msg:"Is added"});else{var n=r.response[0];Ee(t).then((function(t){var r=null;t.response&&(r=t.response.count,n=Object(g["a"])({},n,{friendsCount:r})),e.commit("add",n)}))}else r.error&&e.commit("addErr",r.error);e.commit("stopProcess")}))},toggle:function(e,t){var r=t.checkedIds;e.commit("clearAllChecked"),r.forEach((function(t){var r=e.getters.findInd(t);e.commit("check",r)}))},delete:function(e,t){var r=t.id,n=e.getters.findInd(r);e.commit("delete",n),0==e.state.list.length&&(e.commit("friends/clear",null,{root:!0}),e.commit("friends/addErr",{error_msg:null},{root:!0}))}}},Fe=(r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("1da1")),Pe="ea77532eea77532eea77532e70ea070ed9eea77ea77532eb4050153d22b3696dcaabeb1";function Le(e){return e.token&&(Pe=e.token),Ce("friends.get?user_id=".concat(e.id,"&fields=first_name&access_token=").concat(Pe,"&v=5.103"))}function De(e){return e.token&&(Pe=e.token),Ce("wall.get?owner_id=".concat(e.id,"&access_token=").concat(Pe,"&v=5.103"))}var Ae={namespaced:!0,state:{list:[],errorText:null,inProcess:!1,waitText:null,wallList:[],errorWallText:null,waitWallText:null},getters:{findInd:function(e){return function(t){return e.list.findIndex((function(e){return e.id==t}))}},findData:function(e,t){return function(r){var n=t.findInd(r);return-1!==n?e.list[n]:null}},sortedByName:function(e){return e.list.length>1?_.orderBy(e.list,["first_name","last_name"],["asc","asc"]):1===e.list.length?e.list:null}},mutations:{add:function(e,t){var r=t.id,n=t.first_name,s=t.last_name,i=t.isFriendOf,a=e.list.findIndex((function(e){return e.id==r}));-1!=a?e.list[a].isFriendOf.push(i[0]):e.list.push({id:r,first_name:n,last_name:s,isFriendOf:i}),e.errorText&&(e.errorText=null)},clear:function(e){e.list.splice(0)},clearWallList:function(e){e.wallList.splice(0)},addErr:function(e,t){var r=t.error_msg;e.errorText=r},addWallErr:function(e,t){var r=t.error_msg;e.errorWallText=r},wait:function(e,t){var r=t.wait_msg;e.waitText=r},waitWall:function(e,t){var r=t.wait_msg;e.waitWallText=r},startProcess:function(e){e.inProcess=!0},stopProcess:function(e){e.inProcess=!1},addWallText:function(e,t){var r=t.date,n=t.post,s=t.repost;e.wallList.push({date:r,post:n,repost:s})}},actions:{add:function(e){if(e.rootGetters["users/hasChecked"]){e.commit("startProcess"),e.commit("addErr",{error_msg:null}),e.commit("wait",{wait_msg:"Ждите..."}),e.commit("clear");var t=e.rootGetters["users/checkedIds"];(function(){var r=Object(Fe["a"])(regeneratorRuntime.mark((function r(){var n,s,i,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=!0,s=!1,i=void 0,r.prev=3,a=regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=c.value,t.next=3,Le({id:r}).then((function(t){t.response&&t.response.items&&t.response.items.forEach((function(t){t.deactivated||e.rootGetters["users/isAdded"](t.id)||e.commit("add",Object(g["a"])({},t,{isFriendOf:[r]}))}))}));case 3:case"end":return t.stop()}}),t)})),o=t[Symbol.iterator]();case 6:if(n=(c=o.next()).done){r.next=11;break}return r.delegateYield(a(),"t0",8);case 8:n=!0,r.next=6;break;case 11:r.next=17;break;case 13:r.prev=13,r.t1=r["catch"](3),s=!0,i=r.t1;case 17:r.prev=17,r.prev=18,n||null==o.return||o.return();case 20:if(r.prev=20,!s){r.next=23;break}throw i;case 23:return r.finish(20);case 24:return r.finish(17);case 25:e.commit("wait",{wait_msg:null}),0==e.state.list.length&&e.commit("addErr",{error_msg:"Друзья не найдены или скрыты"}),e.commit("stopProcess");case 28:case"end":return r.stop()}}),r,null,[[3,13,17,25],[18,,20,24]])})));function n(){return r.apply(this,arguments)}return n})()()}},getData:function(e,t){var r=t.id;e.commit("addWallErr",{error_msg:null}),e.commit("waitWall",{wait_msg:"Ждите..."}),e.commit("clearWallList"),function(){var t=Object(Fe["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,De({id:r}).then((function(t){t.response&&t.response.items&&t.response.items.forEach((function(t){t.date&&t.text&&!t.copy_history?e.commit("addWallText",{date:t.date,post:t.text,repost:null}):t.date&&!t.text&&t.copy_history?t.copy_history[0].text&&e.commit("addWallText",{date:t.date,post:null,repost:t.copy_history[0].text}):t.date&&t.text&&t.copy_history&&t.copy_history[0].text&&e.commit("addWallText",{date:t.date,post:t.text,repost:t.copy_history[0].text})}))}));case 2:e.commit("waitWall",{wait_msg:null}),0==e.state.wallList.length&&e.commit("addWallErr",{error_msg:"Записи на стене не найдены или скрыты"});case 4:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()()},clearList:function(e){e.commit("clear")}}};n["a"].use(x["a"]);var Se=new x["a"].Store({modules:{users:We,friends:Ae},strict:!1}),$e=r("f309");n["a"].use($e["a"]);var Be=new $e["a"],Ue=r("9955"),Ne=r.n(Ue),Re=r("2ef0"),Me=r.n(Re);n["a"].config.productionTip=!1,n["a"].use(Ne.a,{lodash:Me.a}),new n["a"]({router:Oe,store:Se,vuetify:Be,render:function(e){return e(v)}}).$mount("#app")},"5b87":function(e,t,r){"use strict";var n=r("0178"),s=r.n(n);s.a}});
//# sourceMappingURL=app.738aa521.js.map