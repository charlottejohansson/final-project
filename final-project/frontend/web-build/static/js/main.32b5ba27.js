(()=>{"use strict";var e={2989:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ke});var n=r(885),o=r(8577),i=r(2643),s=r(3127),a=r(3526),l=r(4589),c=r(756),u=r(4942),d=r(6521),f=r(6933),p=r(1314),h=r(4640),g=r(1083),j=r(6991),y=16,b=26,x=20,m=30,O={fontSize:b,lineHeight:m},v={fontSize:y,lineHeight:x},w={fontSize:y,lineHeight:x},P=10,S=15,C=20,T=30,k=50,E="#11030C",D="#301025",R="#DC35A1",z="#FCEEF7",_="rgba(252, 238, 247, 0.04)",I={backgroundColor:E,alignItems:"center",flex:1},B=r(3207),L=r(8164),H=r(6011),A=function(e){var t=e.title,r=e.onPress;return(0,H.jsx)(B.default,{style:U.button,onPress:r,children:(0,H.jsx)(f.default,{style:U.text,children:t})})},U=d.default.create({button:{backgroundColor:R,paddingTop:S,paddingBottom:S,paddingLeft:T,paddingRight:T,borderRadius:30,alignItems:"center"},text:{fontSize:b,lineHeight:m,color:z}}),M=(d.default.create({button:{borderWidth:"2px",borderColor:R,paddingTop:S,paddingBottom:S,paddingLeft:T,paddingRight:T,borderRadius:30},text:{fontSize:b,lineHeight:m,color:R}}),function(e){var t=e.name,r=e.size,n=e.onPress;return(0,H.jsx)(B.default,{style:N.button,onPress:n,children:(0,H.jsx)(L.default,{name:t,size:r,color:"#FCEEF7"})})}),N=d.default.create({button:{backgroundColor:R,padding:S,borderRadius:30}}),W=r(2489),K=function(e){var t=e.source,r=e.title;return(0,H.jsxs)(p.default,{style:{flex:1,width:150,marginBottom:20,marginHorizontal:10,flexGrow:1},children:[(0,H.jsx)(g.default,{style:G.Image,source:t}),(0,H.jsx)(W.LinearGradient,{colors:["rgba(0,0,0,0.8) 20%","transparent"],style:G.overlay}),(0,H.jsx)(f.default,{style:G.text,children:r})]})},G=d.default.create({Image:{resizeMode:"Contain",justifyContent:"flex-start",height:200,borderRadius:10,borderWidth:1,borderColor:D},text:{color:z,fontSize:y,position:"absolute",top:15,left:15,flex:1,width:130},overlay:{width:"100%",height:200,position:"absolute",top:0,left:0}});function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=d.default.create({heading:{paddingBottom:S,width:"100%",flexDirection:"row",justifyContent:"space-between",paddingTop:k,paddingBottom:C},icon:{paddingVertical:3},headerContainer:{paddingBottom:S,width:"100%",alignContent:"center",paddingHorizontal:S},movieCardContainer:{justifyContent:"center",paddingVertical:P,width:"100%",flexDirection:"row",flexWrap:"wrap"},searchPage:{paddingVertical:P,borderBottomColor:D,borderBottomWidth:1},searchBar:{backgroundColor:_,borderColor:D,borderWidth:1,borderRadius:35,flexDirection:"row",paddingLeft:C,width:"100%"},input:{fontSize:y,lineHeight:x,paddingTop:S,paddingBottom:S,color:z,flex:1},h2:{fontSize:b,lineHeight:m,color:z,marginLeft:T},text:{fontSize:y,color:z,paddingLeft:P,flex:1}});const J=function(e){var t=e.movies,r=(0,s.useState)(null),i=(0,n.default)(r,2),a=i[0],l=i[1],c=(0,s.useState)([]),u=(0,n.default)(c,2),d=u[0],y=u[1];return(0,H.jsxs)(p.default,{style:V({},I),children:[(0,H.jsxs)(p.default,{style:X.headerContainer,children:[(0,H.jsxs)(p.default,{style:X.heading,children:[(0,H.jsx)(o.Link,{to:"/",children:(0,H.jsx)(L.default,{style:{opacity:0},name:"chevron-left",size:24,color:z})}),(0,H.jsx)(o.Link,{to:"/",children:(0,H.jsx)(f.default,{style:X.h2,children:"Stream.guide"})}),(0,H.jsx)(o.Link,{to:"/login",children:(0,H.jsx)(L.default,{style:X.icon,name:"user-circle",size:24,color:z})})]}),(0,H.jsxs)(p.default,{style:X.searchBar,children:[(0,H.jsx)(h.default,{style:X.input,placeholder:"Search movies",placeholderTextColor:"rgba(252,238,247,0.5)",returnKeyType:"search",keyboardType:"default",type:"text",onChangeText:function(e){l(e),y(null)}}),(0,H.jsx)(M,{name:"search",size:24,onPress:function(e){e.preventDefault();fetch("https://watchmode.p.rapidapi.com/autocomplete-search/?search_value="+a+"&search_type=2",{method:"GET",headers:{"X-RapidAPI-Key":"4609bbe44amshe3f86b78da14a2cp13f543jsnbad29ed23699","X-RapidAPI-Host":"watchmode.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){y(e.results)})).catch((function(e){console.warn(e)}))},type:"submit"})]})]}),(0,H.jsxs)(j.default,{children:[d&&(0,H.jsx)(p.default,{children:d.map((function(e){return(0,H.jsx)(p.default,{style:X.searchPage,children:(0,H.jsx)(o.Link,{to:"/MovieDetailsSearch/"+e.id,children:(0,H.jsxs)(p.default,{style:{flexDirection:"row",alignItems:"center",paddingHorizontal:20,flexGrow:1},children:[(0,H.jsx)(g.default,{style:{width:50,height:70,borderRadius:7},source:{uri:""+e.image_url}}),(0,H.jsx)(f.default,{style:X.text,children:e.name})]})})},e.id)}))}),(0,H.jsxs)(p.default,{style:{paddingVertical:S,width:"100%"},children:[(0,H.jsx)(f.default,{style:X.h2,children:"New Releases"}),(0,H.jsx)(p.default,{style:X.movieCardContainer,children:t.map((function(e){return(0,H.jsx)(o.Link,{to:"/MovieDetails/"+e.id,children:(0,H.jsx)(K,{title:e.title,source:{uri:"https://image.tmdb.org/t/p/w342"+e.poster_path}})},e.id)}))})]})]})]})};var q=(0,c.createSlice)({name:"user",initialState:{userId:null,username:null,accessToken:null,error:null},reducers:{setUserId:function(e,t){e.userId=t.payload},setUsername:function(e,t){e.username=t.payload},setAccessToken:function(e,t){e.accessToken=t.payload},setError:function(e,t){e.error=t.payload}}});const Q=q;var Y=function(e){return"https://final-project-t3aeo2jk2a-lz.a.run.app//"+e},Z=function(e){var t=e.placeholder,r=e.onChangeText,n=e.secureTextEntry;return(0,H.jsx)(h.default,{style:$.input,onChangeText:r,placeholder:t,secureTextEntry:n,placeholderTextColor:"rgba(252,238,247,0.5)"})},$=d.default.create({input:{borderWidth:1,borderColor:D,backgroundColor:_,color:z,paddingTop:S,paddingBottom:S,paddingLeft:C,paddingRight:S,borderRadius:40,fontSize:b,lineHeight:m,marginBottom:C}}),ee=function(){return(0,H.jsxs)(p.default,{style:te.header,children:[(0,H.jsx)(o.Link,{to:"/",children:(0,H.jsx)(L.default,{style:te.icon,name:"chevron-left",size:20,color:z})}),(0,H.jsx)(o.Link,{to:"/",children:(0,H.jsx)(f.default,{style:te.text,children:"Stream.guide"})}),(0,H.jsx)(o.Link,{to:"/login",children:(0,H.jsx)(L.default,{style:te.icon,name:"user-circle",size:24,color:z})})]})},te=d.default.create({text:{fontSize:b,lineHeight:m,color:z},icon:{paddingVertical:3},header:{flexDirection:"row",justifyContent:"space-between",paddingTop:k,paddingBottom:C,width:"100%",paddingHorizontal:20}});function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=d.default.create({container:ne(ne({},I),{},{justifyContent:"center"}),innerContainer:{width:300,alignContent:"flex-start"},h2:ne(ne({},O),{},{color:z,paddingBottom:P}),text:ne(ne({},w),{},{color:z,textAlign:"center"}),linkText:ne(ne({},w),{},{color:R,paddingTop:3,paddingLeft:4})});const ie=function(){var e=(0,s.useState)(""),t=(0,n.default)(e,2),r=t[0],l=t[1],c=(0,s.useState)(""),u=(0,n.default)(c,2),d=u[0],h=u[1],g=(0,s.useState)("login"),j=(0,n.default)(g,2),y=j[0],b=(j[1],(0,s.useState)(null)),x=(0,n.default)(b,2),m=(x[0],x[1],(0,a.useDispatch)()),O=(0,i.useNavigate)(),v=(0,a.useSelector)((function(e){return e.user.accessToken}));(0,s.useEffect)((function(){v&&O("/main")}),[v]);var w=function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:d})};fetch(Y(y),t).then((function(e){return e.json()})).then((function(e){e.success?(0,a.batch)((function(){m(Q.actions.setUsername(e.response.username)),m(Q.actions.setUserId(e.response.id)),m(Q.actions.setAccessToken(e.response.accessToken)),m(Q.actions.setError(null))})):(alert("error, could not find user - make sure you've registered and that the password is correct "),(0,a.batch)((function(){m(Q.actions.setUsername(null)),m(Q.actions.setUserId(null)),m(Q.actions.setAccessToken(null)),m(Q.actions.setError(e.response))})))}))};return(0,H.jsxs)(p.default,{style:oe.container,children:[(0,H.jsx)(ee,{}),(0,H.jsx)(p.default,{style:oe.container,onPress:w,children:(0,H.jsxs)(p.default,{style:oe.innerContainer,children:[(0,H.jsx)(f.default,{style:oe.h2,children:"Login"}),(0,H.jsx)(Z,{placeholder:"Username",onChangeText:l,value:r,autoCapitalize:"none",returnKeyType:"next",blurOnSubmit:!1,onSubmitEditing:function(){return passwordInputRef.current&&passwordInputRef.current.focus()}}),(0,H.jsx)(Z,{placeholder:"Password",blurOnSubmit:!1,secureTextEntry:!0,textContentType:d,onChangeText:h,returnKeyType:"next"}),(0,H.jsx)(A,{title:"Login",onPress:w,type:"submit"}),(0,H.jsx)(p.default,{style:{paddingTop:S},children:(0,H.jsxs)(f.default,{style:oe.text,children:["Don't have an account?",(0,H.jsx)(o.Link,{to:"/register",children:(0,H.jsx)(f.default,{style:oe.linkText,children:"Sign up here"})})]})})]})})]})};function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le=d.default.create({container:ae(ae({},I),{},{justifyContent:"center"}),innerContainer:{gap:C,alignContent:"flex-start",width:300},h2:ae(ae({},O),{},{color:z,paddingBottom:P}),text:ae(ae({},w),{},{color:z,textAlign:"center"})});const ce=function(){var e=(0,s.useState)(""),t=(0,n.default)(e,2),r=t[0],o=t[1],l=(0,s.useState)(""),c=(0,n.default)(l,2),u=c[0],d=c[1],h=(0,s.useState)("register"),g=(0,n.default)(h,2),j=g[0],y=(g[1],(0,s.useState)(null)),b=(0,n.default)(y,2),x=b[0],m=(b[1],(0,a.useDispatch)()),O=(0,i.useNavigate)(),v=(0,a.useSelector)((function(e){return e.user.accessToken}));(0,s.useEffect)((function(){v&&O("/main")}),[v]);var w=function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:u})};fetch(Y(j),t).then((function(e){return e.json()})).then((function(e){e.success?(0,a.batch)((function(){m(Q.actions.setUsername(e.response.username)),m(Q.actions.setUserId(e.response.id)),m(Q.actions.setAccessToken(e.response.accessToken)),m(Q.actions.setError(null))})):(alert("Password must be over 8 characters."),(0,a.batch)((function(){m(Q.actions.setUsername(null)),m(Q.actions.setUserId(null)),m(Q.actions.setAccessToken(null)),m(Q.actions.setError(e.response))})))}))};return(0,H.jsxs)(p.default,{style:le.container,onPress:w,children:[(0,H.jsx)(ee,{}),(0,H.jsx)(p.default,{style:le.container,onPress:w,children:(0,H.jsxs)(p.default,{style:le.innerContainer,children:[(0,H.jsx)(f.default,{style:le.h2,children:"Register"}),(0,H.jsx)(Z,{placeholder:"Enter username",onChangeText:o,value:r,autoCapitalize:"none",returnKeyType:"next",blurOnSubmit:!1,onSubmitEditing:function(){return passwordInputRef.current&&passwordInputRef.current.focus()}}),(0,H.jsx)(Z,{placeholder:"Enter Password",blurOnSubmit:!1,secureTextEntry:!0,onChangeText:d,returnKeyType:"next"}),(0,H.jsx)(A,{title:"Sign up",onPress:w,type:"submit"}),(0,H.jsxs)(f.default,{style:le.text,children:[u&&u.length<8?"Password must be over 8 characters":"",null!==x&&(0,H.jsx)(f.default,{style:{fontSize:"21px",color:"white"},children:x})]})]})})]})};var ue=(0,c.createSlice)({name:"profiles",initialState:{items:[],error:null},reducers:{setItems:function(e,t){e.items=t.payload},setError:function(e,t){e.error=t.payload}}});const de=ue;function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he=d.default.create({container:{justifyContent:"center",alignItems:"center",paddingLeft:C,paddingRight:C,opacity:"40%",height:"70%"},loaderContainer:pe(pe({},I),{},{justifyContent:"center"}),h2:pe(pe({},O),{},{color:z}),text:pe(pe({},w),{},{color:z}),textInput:{color:z}});const ge=function(){(0,a.useSelector)((function(e){return e.profiles.items}));var e=(0,a.useDispatch)(),t=(0,a.useSelector)((function(e){return e.user.accessToken})),r=(0,i.useNavigate)(),o=(0,s.useState)(!0),l=(0,n.default)(o,2),c=l[0],u=l[1];return(0,s.useEffect)((function(){t||r("/login")}),[]),(0,s.useEffect)((function(){var r={method:"GET",headers:{"Content-Type":"application/json",Authorization:t}};fetch(Y("profiles"),r).then((function(e){return e.json()})).then((function(t){t.success?(e(de.actions.setItems(t.response)),e(de.actions.setError(null))):(e(de.actions.setItems([])),e(de.actions.setError(t.response)))})).finally((function(){setTimeout((function(){u(!1)}),1e3)}))}),[]),c?(0,H.jsxs)(p.default,{style:he.loaderContainer,children:[(0,H.jsx)(L.default,{style:he.icon,name:"spinner",size:24,color:z}),(0,H.jsx)(f.default,{style:he.h2,children:"Loading..."})]}):(0,H.jsxs)(p.default,{style:pe({},I),children:[(0,H.jsx)(ee,{}),(0,H.jsxs)(p.default,{style:he.container,children:[(0,H.jsx)(f.default,{style:he.h2,children:"Profile functions"}),(0,H.jsx)(f.default,{style:he.h2,children:"coming soon"}),(0,H.jsx)(L.default,{style:{marginTop:T},name:"gift",size:100,color:z})]}),(0,H.jsx)(A,{title:"Sign out",onPress:function(){r("/"),e(Q.actions.setAccessToken(null))},type:"submit"})]})};var je=d.default.create({container:{flex:1,backgroundColor:E,alignItems:"center",justifyContent:"center"}});const ye=function(){return(0,H.jsxs)(p.default,{style:je.container,children:[(0,H.jsx)(f.default,{children:"Not found :( Click "}),(0,H.jsx)(o.Link,{to:"/",children:(0,H.jsx)(f.default,{children:"here"})}),(0,H.jsx)(f.default,{children:"to go to start page"})]})};function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function xe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var me=d.default.create({container:xe(xe({},I),{},{justifyContent:"center"}),background:{width:"100%",height:"100%",position:"absolute"},overlay:{backgroundColor:"rgba(0,0,0,0.8)",width:"100%",height:"100%",position:"absolute",top:0,left:0},innerContainer:{marginHorizontal:S,height:"80%",width:340},poster:{width:240,height:350,borderRadius:10,marginBottom:15},h2:xe(xe({},O),{},{color:z,marginBottom:P}),h3:xe(xe({},v),{},{color:z,marginBottom:P}),text:{color:z,marginBottom:P}});const Oe=function(){var e=(0,s.useState)({}),t=(0,n.default)(e,2),r=t[0],o=t[1],a=(0,i.useParams)().movie_id,l=((0,i.useNavigate)(),(0,s.useState)(!0)),c=(0,n.default)(l,2),u=c[0],d=c[1];return(0,s.useEffect)((function(){fetch(function(e){return"https://api.themoviedb.org/3/movie/"+e+"?api_key=ef036d5d52e9f5b31fbadf6ef00b48d2&language=en-US"}(a)).then((function(e){return e.json()})).then((function(e){o(e)})).finally((function(){setTimeout((function(){d(!1)}),500)}))}),[]),u?(0,H.jsxs)(p.default,{style:me.container,children:[(0,H.jsx)(L.default,{style:me.icon,name:"spinner",size:24,color:z}),(0,H.jsx)(f.default,{style:me.h2,children:"Loading..."})]}):(0,H.jsxs)(p.default,{style:xe({},I),children:[(0,H.jsx)(g.default,{style:me.background,source:{uri:"https://image.tmdb.org/t/p/w342/"+r.poster_path}}),(0,H.jsx)(p.default,{style:me.overlay}),(0,H.jsx)(ee,{}),(0,H.jsxs)(j.default,{style:me.innerContainer,children:[(0,H.jsx)(g.default,{style:me.poster,source:{uri:"https://image.tmdb.org/t/p/w342/"+r.poster_path}}),(0,H.jsxs)(p.default,{children:[(0,H.jsx)(f.default,{style:me.h2,children:r.title}),(0,H.jsxs)(f.default,{style:me.h3,children:["Rating: ",Math.round(10*r.vote_average)/10]}),(0,H.jsx)(f.default,{style:me.text,children:r.overview})]})]})]})};function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Pe=d.default.create({container:we(we({},I),{},{justifyContent:"center"}),background:{width:"100%",height:"100%",position:"absolute"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)",width:"100%",height:"100%",position:"absolute",top:0,left:0},innerContainer:{marginHorizontal:S,height:"80%",width:340},poster:{width:240,height:350,borderRadius:10,marginBottom:15},tagContainer:{marginTop:S,flexDirection:"row",flexWrap:"wrap"},tags:{backgroundColor:D,borderColor:D,marginRight:P,marginBottom:P,padding:5,borderRadius:5,borderWidth:1},h2:we(we({},O),{},{color:z,marginBottom:P}),h3:we(we({},v),{},{color:z,marginBottom:P}),text:{color:z,marginBottom:P}});const Se=function(){var e=(0,s.useState)([]),t=(0,n.default)(e,2),r=t[0],o=t[1],a=(0,s.useState)([]),l=(0,n.default)(a,2),c=l[0],u=l[1],d=(0,i.useParams)().movie_id,h=(0,s.useState)(!0),y=(0,n.default)(h,2),b=y[0],x=y[1],m={method:"GET",headers:{"X-RapidAPI-Key":"4609bbe44amshe3f86b78da14a2cp13f543jsnbad29ed23699","X-RapidAPI-Host":"watchmode.p.rapidapi.com"}};return(0,s.useEffect)((function(){fetch("https://watchmode.p.rapidapi.com/title/"+d+"/details/",m).then((function(e){return e.json()})).then((function(e){o(e)})).catch((function(e){return console.error(e)})),fetch("https://watchmode.p.rapidapi.com/title/"+d+"/sources/",m).then((function(e){return e.json()})).then((function(e){var t=function(e){var t=[];return e.forEach((function(e,r){t.find((function(t){return t.source_id==e.source_id}))||t.push(e)})),t}(e);u(t)})).finally((function(){x(!1)})).catch((function(e){return console.error(e)}))}),[d]),b?(0,H.jsxs)(p.default,{style:Pe.container,children:[(0,H.jsx)(L.default,{style:Pe.icon,name:"spinner",size:24,color:z}),(0,H.jsx)(f.default,{style:Pe.h2,children:"Loading..."})]}):(0,H.jsxs)(p.default,{style:we({},I),children:[(0,H.jsx)(g.default,{style:Pe.background,source:{uri:""+r.backdrop}}),(0,H.jsx)(p.default,{style:Pe.overlay}),(0,H.jsx)(ee,{}),(0,H.jsxs)(j.default,{style:Pe.innerContainer,children:[(0,H.jsx)(g.default,{style:Pe.poster,source:{uri:""+r.backdrop}}),(0,H.jsx)(f.default,{style:Pe.h2,children:r.original_title}),(0,H.jsx)(f.default,{style:Pe.text,children:r.plot_overview}),(0,H.jsx)(p.default,{style:Pe.tagContainer,children:c.map((function(e){return(0,H.jsx)(p.default,{style:Pe.tags,children:(0,H.jsx)(f.default,{style:{color:z},children:e.name})},e.source_id)}))})]})]})};var Ce=(0,l.combineReducers)({user:Q.reducer,profiles:de.reducer}),Te=(0,c.configureStore)({reducer:Ce});function ke(){var e=(0,s.useState)([]),t=(0,n.default)(e,2),r=t[0],l=t[1],c=(0,s.useState)(!0),u=(0,n.default)(c,2),d=(u[0],u[1]);return(0,s.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=ef036d5d52e9f5b31fbadf6ef00b48d2&language=en-US&page=1").then((function(e){return e.json()})).then((function(e){l(e.results)})).finally((function(){setTimeout((function(){d(!1)}),2e3)}))}),[]),(0,H.jsx)(a.Provider,{store:Te,children:(0,H.jsx)(o.NativeRouter,{children:(0,H.jsxs)(i.Routes,{children:[(0,H.jsx)(i.Route,{path:"/login",element:(0,H.jsx)(ie,{})}),(0,H.jsx)(i.Route,{path:"/register",element:(0,H.jsx)(ce,{})}),(0,H.jsx)(i.Route,{path:"/main",element:(0,H.jsx)(ge,{})}),(0,H.jsx)(i.Route,{path:"*",element:(0,H.jsx)(ye,{})}),(0,H.jsx)(i.Route,{path:"/",element:(0,H.jsx)(J,{movies:r})}),(0,H.jsx)(i.Route,{path:"/MovieDetails/:movie_id",element:(0,H.jsx)(Oe,{})}),(0,H.jsx)(i.Route,{path:"/MovieDetailsSearch/:movie_id",element:(0,H.jsx)(Se,{})})]})})})}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],a=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var i=Object.create(null);r.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>s[e]=()=>n[e]));return s.default=()=>n,r.d(i,s),i}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[s,a,l]=n,c=0;if(s.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var u=l(r)}for(t&&t(n);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[371],(()=>r(92)));n=r.O(n)})();
//# sourceMappingURL=main.32b5ba27.js.map