"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[60909],{764290:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"TopicImageWithText_topic",selections:[{alias:"background_color",args:null,kind:"ScalarField",name:"backgroundColor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:"follower_count",args:null,kind:"ScalarField",name:"followerCount",storageKey:null},{alias:null,args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null}],storageKey:'images(spec:"236x")'}],type:"Interest",abstractKey:null};i.hash="b5b71fb4390c1d3835e468a25f687669";let r=i},577272:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"TopicRepFragment_topic",selections:[{alias:"is_followed",args:null,kind:"ScalarField",name:"isFollowed",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{args:null,kind:"FragmentSpread",name:"TopicImageWithText_topic"}],type:"Interest",abstractKey:null};i.hash="e5a0b7dce2aa2313e4cf2c9871cbedf7";let r=i},640498:(e,t,o)=>{o.d(t,{LG:()=>i,UO:()=>r,ZB:()=>n,ZP:()=>a});let i=100,r=10,n=28,a={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},619348:(e,t,o)=>{o.d(t,{DW:()=>n,I:()=>r,oo:()=>i,zI:()=>a});let i=e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t&&[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]},r=.18,n=(e,t,o)=>.2126*(e/255)**2.2+.7151*(t/255)**2.2+.0721*(o/255)**2.2,a=e=>{let t=e.replace("#",""),o=parseInt(t.substr(0,2),16);return(299*o+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3<155}},753652:(e,t,o)=>{o.d(t,{Q6:()=>c,ZP:()=>s,le:()=>p,qe:()=>d,yU:()=>u});var i=o(785220),r=o(655201);let n=(e,t)=>e.length===t.length&&e.every((e,o)=>e===t[o]),a=e=>e;function l(e,t=n,o=a){return function(i){let r=[];return function(...n){let a=r.find(e=>t(e.args,o(n)));if(a)return a.result;let l=i(...n);return r.push({args:o(n),result:l}),e&&r.length>e&&r.shift(),l}}}let s=l(),d=l(1),u=l(void 0,n,e=>[JSON.stringify(e)]),c=l(0,(e,t)=>e.length===t.length&&e.every((e,o)=>(0,r.Z)(e,t[o]))),p=l(0,(e,t)=>e.length===t.length&&e.every((e,o)=>(0,i.ZP)(e,t[o])))},957486:(e,t,o)=>{o.d(t,{Z:()=>l});var i=o(667294),r=o(545007),n=o(809833),a=o(604759);function l(e){let{name:t,optionsKey:o}=e,l=t===n.fY,s=(0,a.bC)(),d=s?.get(t,o);if(d)throw d;let u=e=>e[t]?.[o],c=(0,r.v9)(({resources:e})=>u(e)?.nextBookmark),p=(0,r.v9)(({resources:e})=>u(e)?.data),h=(0,r.v9)(({resources:e})=>u(e)?.auxData),g=(0,r.v9)(({resources:e})=>u(e)?.error),f=(0,i.useRef)({auxData:void 0,data:void 0,error:void 0,isAtEnd:!1,nextBookmark:void 0});if(l)return f.current;let m={auxData:h,data:p,error:g,isAtEnd:c===n.qx,nextBookmark:c};return(m.auxData!==f.current.auxData||m.data!==f.current.data||m.error!==f.current.error||m.isAtEnd!==f.current.isAtEnd||m.nextBookmark!==f.current.nextBookmark)&&(f.current=m),f.current}},545230:(e,t,o)=>{o.d(t,{i:()=>i});let i={AC:"ac",AUTOCOMPLETE:"autocomplete",BOARD:"blp",CONTENT_TYPE_FILTER:"content_type_filter",DIRECT_NAVIGATION:"direct_navigation",FILTER:"filter",GUIDED_SEARCH_ENTRY:"guided_search_entry",GUIDED_SEARCH_LANDING:"guided_search_landing",HASHTAG_CLOSEUP:"hashtag_closeup",HASHTAG_PINREP:"hashtag_pinrep",HOMEFEED_BUBBLE:"homefeed_bubble",HUB_PAGE:"hub_page",IDEAS_ROOT:"ideas_root",IMAGE_ONLY_ATTRIBUTION:"image_only_attribution",LANDING_PAGE_STORY:"landing_page_story",NO_RESULTS_SEARCH_STORY:"no_results_search_story",PRODUCT:"product",REMOVE:"remove",RS:"rs",SHOPPING_FILTER:"shopping_filter",SITELINKS_SEARCHBOX:"sitelinks_searchbox",SLP_REC_CURATED:"slp_rec_curated",SLP_REC_TRENDING:"slp_rec_trending",SRS:"srs",STRUCTURED_GUIDE:"structured_guide",TRENDING:"trending",TYPED:"typed",TYPO_AUTO_ORIGINAL:"typo_auto_original",TYPO_SUGGESTION:"typo_suggestion",UNKNOWN:"Unknown",VANILLA_GUIDE:"guide",URECS:"urecs",VIDEO:"video"}},978993:(e,t,o)=>{o.d(t,{L_:()=>r,Nh:()=>n,qn:()=>i});let i=(e,t)=>{if("undefined"==typeof window)return t;try{return window.sessionStorage.getItem(e)}catch(e){return window.console.error("Cannot access sessionStorage."),t}},r=e=>{if("undefined"!=typeof window)try{window.sessionStorage.removeItem(e)}catch(e){window.console.error("Cannot access sessionStorage.")}},n=(e,t)=>{if("undefined"!=typeof window)try{window.sessionStorage.setItem(e,t)}catch(e){window.console.error("Cannot access sessionStorage.")}}},564573:(e,t,o)=>{o.d(t,{Z:()=>i});let i=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},981331:(e,t,o)=>{o.d(t,{Zt:()=>Y,iK:()=>X,o3:()=>Q,ZP:()=>J});var i=o(667294),r=o(545007),n=o(616550),a=o(883119),l=o(31723),s=o(587435),d=o(679482),u=o(144326),c=o(297728),p=o(829413),h=o(730212),g=o(957486),f=o(961754),m=o(892205),_=o(410150),w=o(888027);let x=e=>`BREAK_IN_${e}`,I=new Map,v=e=>{let t=I.get(e);if(t)return t;let o=Object.freeze({type:"FEED_BREAK_IN",__typename:"FEED_BREAK_IN",id:x(e)});return I.set(e,o),o},y=({breakIn:{index:e},items:t})=>t.length<e?t:[...t.slice(0,e),v(e),...t.slice(e)];var E=o(970842),S=o(205758),T=o(798920),b=o(995060),C=o(769423),R=o(220708),P=o(507830),A=o(682661),O=o(845873),F=o(74665),N=o(463036),D=o(341184),j=o(367912),k=o(666287),L=o(179735),B=o(785893);function M(e,t,o){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}let Z=(0,L.Z)(()=>o.e(90139).then(o.bind(o,838930)),void 0,"app-www-businessNux-BizNuxHomefeedLoader"),H=(0,L.Z)(()=>o.e(44724).then(o.bind(o,648242)),void 0,"app-www-save-board-MoreIdeasFeed-MoreIdeasFeed"),U=(0,L.Z)(()=>Promise.resolve().then(o.bind(o,666287)),void 0,"app-www-user-duplo-FeedUserRep"),G=(0,L.Z)(()=>Promise.resolve().then(o.bind(o,888027)),void 0,"app-www-board-BoardRep"),K=(0,L.Z)(()=>Promise.resolve().then(o.bind(o,463036)),void 0,"app-www-stories-PinStory"),z=(0,L.Z)(()=>Promise.resolve().then(o.bind(o,341184)),void 0,"app-www-topic-TopicRep"),V=()=>{let{plpImageRenderData:e}=(0,R.H)(),[t]=e;return t?t.pin_id:null};class W extends i.PureComponent{constructor(...e){super(...e),M(this,"state",{refreshing:!1,unauthLandingPinStateForAuthHomefeed:this.props.authHomefeedComponentDidUpdate?{pinId:V(),feedItem:null}:null}),M(this,"backOnlineAutoFetchResource",()=>{this.props.pagination.loadNext()}),M(this,"handlePullToRefresh",()=>{this.props.pagination.refetch(),this.setState({refreshing:!0})}),M(this,"gridContainerRef",(0,i.createRef)()),M(this,"renderFeedPin",(e,t)=>{let{feedItemProps:o,isShoppingAffordancesExp:i,location:r,performanceOptimization:n,showSeoMetadata:a,surface:l,trafficSource:s}=this.props,{auxData:d,componentType:u,feedback:c,imageOnly:p,impressionData:h,isEggsUi:g,objectIdStr:f,oneTapSave:m,onFeedItemClick:_,onPinLinkClick:w,shouldAllowProductPriceIndicator:x,showSeoMetadata:I,viewData:v,viewParameter:y,viewType:E}=o||{},S=(r.search||"").includes("force_seo"),T=!!n?.lazyLoadBelowFoldIndex&&t>n.lazyLoadBelowFoldIndex,b=!!n?.priorityFetchAboveFoldIndex&&t<=n.priorityFetchAboveFoldIndex;return/*#__PURE__*/(0,B.jsx)(A.ZP,{auxData:d,componentType:u||0,duploFeedItemProps:{onPinClick:_,onPinLinkClick:w,showSeoMetadata:a||S||I},duploLazyLoadImage:T,duploOneTapSave:m,duploPriorityFetchImage:b,duploQueryRef:null,duploShouldAllowProductPriceIndicator:x,feedback:c,imageOnlyOption:p?"image-only":"default",impressionData:h,isEggsUi:g,isShoppingAffordancesExp:i,objectIdStr:f,pinId:e.id,saveButtonOptions:g?{savedInfo:{boardId:void 0,pinId:e.id,title:void 0,url:void 0},type:"inline"}:void 0,shouldMoveFieldToSeoDrawer:this.props.shouldMoveFieldToSeoDrawer,shouldShowSeoDrawerNewfields:this.props.shouldShowSeoDrawerNewfields,shouldShowSeoDrawerOption:this.props.shouldShowSeoDrawerOption,slotIndex:t,surface:l,trackingParams:e.trackingParams,trafficSource:s,viewData:v,viewParameter:y,viewType:E||1})}),M(this,"getBoardId",()=>{let e=this.props.feedKey?.split(":");return e&&e.length>1&&"boardfeed"===e[0]?e[1]:null}),M(this,"hideMoreIdeas",()=>{let{getReduxBoard:e,surface:t,trafficSource:o}=this.props,i=this.getBoardId(),r="board"===o&&"BaseBoardPinGrid"===t&&i?e(i):null;return r?.featured_board_metadata?.more_ideas===!1})}componentDidMount(){window.addEventListener("online",this.backOnlineAutoFetchResource),(0,E.IA)(this.props.feedKey,this)}componentWillUnmount(){window.removeEventListener("online",this.backOnlineAutoFetchResource),(0,E.do)(this.props.feedKey)}componentDidUpdate(e){let{refreshing:t,unauthLandingPinStateForAuthHomefeed:o}=this.state,{feedItems:i,authHomefeedComponentDidUpdate:r}=this.props,n=t&&e.pagination.isLoadingNext&&!this.props.pagination.isLoadingNext;if(n&&this.setState({refreshing:!1}),r&&o){let t=r({feedItems:i,prevFeedItems:e.feedItems,finishedRefresh:n,unauthLandingPinStateForAuthHomefeed:o});t&&this.setState({unauthLandingPinStateForAuthHomefeed:t})}}render(){let{allowDynamicImports:e,deviceType:t,dynamicHeights:o,emptyState:r,experimentalColumnWidth:n,experimentalGutter:s,feedItemProps:u,feedItems:c,feedItemsAdjustment:h,feedKey:g,feedStoryId:f,getColumnSpanConfig:_,gridConfig:x,i18n:I,pageSize:v,pagination:y,pullToRefresh:E,renderFeedItem:R,serverRender:A,showBizNuxHomefeedLoader:O,trafficSource:F,visuallyCompleteProfilerOptions:L}=this.props,{unauthLandingPinStateForAuthHomefeed:M}=this.state,V=M?.feedItem&&c.length?[M.feedItem,...c]:c,{viewParameter:W,viewType:Y}=u||{},{gridMeasurementKey:q}=x||{},X=g+(q?`|${q}`:""),$="user_search"===F,Q=$?window.innerWidth-16:void 0,J=V.some(e=>"board"===e.type),ee={columnWidth:(0,T.SY)({deviceType:t,customMWebColumnWidth:Q,experimentalColumnWidth:J?236:n}),renderItem:({data:t,itemIdx:o})=>{if(R){let e=R(t,o);if("FALLBACK_TO_DEFAULT"!==e)return e}switch(t.type){case"pin":return/*#__PURE__*/(0,B.jsx)(S.Z,{children:this.renderFeedPin(t,o)});case"user":return e?/*#__PURE__*/(0,B.jsx)(U,{truncateName:!0,userId:t.id,userSearchRepStyle:$,viewParameter:W,viewType:Y}):/*#__PURE__*/(0,B.jsx)(k.default,{truncateName:!0,userId:t.id,userSearchRepStyle:$,viewParameter:W,viewType:Y});case"board":let i=this.props.getReduxBoard(t.id);return e?/*#__PURE__*/(0,B.jsx)(G,{boardKey:i?{type:"deprecated",data:i}:null,type:"grid",viewParameter:W,viewType:Y}):/*#__PURE__*/(0,B.jsx)(w.default,{boardKey:i?{type:"deprecated",data:i}:null,type:"grid",viewParameter:W,viewType:Y});case"topic":return e?/*#__PURE__*/(0,B.jsx)(z,{id:t.id,shouldClickthrough:!0,showFollowButton:!0,showFollowerCount:!0,viewParameter:W,viewType:Y}):/*#__PURE__*/(0,B.jsx)(D.default,{id:t.id,shouldClickthrough:!0,showFollowButton:!0,showFollowerCount:!0,viewParameter:W,viewType:Y});case"story":if("number"==typeof W)return e?/*#__PURE__*/(0,B.jsx)(K,{slotIndex:o,storyId:t.id,viewParameter:W,viewType:Y||1}):/*#__PURE__*/(0,B.jsx)(N.default,{slotIndex:o,storyId:t.id,viewParameter:W,viewType:Y||1});return null;case"FEED_BREAK_IN":return h&&"breakIn"===h.type&&h.value.content;default:return null}},gutterWidth:(0,T.s)({experimentalGutter:s,trafficSource:F,deviceType:t}),loadItems:y.loadNext,minCols:$?1:2,...x},et=!O&&y.isLoadingNext&&0===V.length&&!this.state.refreshing,eo=v&&25>parseInt(v,10),[ei,er,en]=h?.type==="fullWidthBreakIn"?[V.slice(0,h.value.index),h.value.content,V.slice(h.value.index)]:[V,null,[]],ea="desktop"===t&&"flashlight"===F,el=ea?0:d.qG;return/*#__PURE__*/(0,B.jsxs)(a.xu,{"data-test-id":"MobileFeed",children:[/*#__PURE__*/(0,B.jsx)(b.Z,{auxData:u?.auxData||null,enabled:!!E,onPull:this.handlePullToRefresh,refreshing:this.state.refreshing,viewParameter:u?.viewParameter||null}),/*#__PURE__*/(0,B.jsxs)(a.xu,{ref:this.gridContainerRef,"data-test-id":"grid",marginEnd:el,marginStart:el,opacity:this.state.refreshing?.5:1,children:[/*#__PURE__*/(0,B.jsxs)(p.Z,{includeBackgroundImages:L?.includeBackgroundImages,includeVideos:L?.includeVideos,isAtEndOfFeed:!y.hasNext,itemCount:V.length,pinData:L?.pins,children:[V.length?/*#__PURE__*/(0,B.jsx)(a.xu,{"data-test-id":"feed",marginTop:(0,T.kk)({isDesktop:"desktop"===t}),children:/*#__PURE__*/(0,B.jsx)(m.Z.Consumer,{children:t=>/*#__PURE__*/(0,B.jsx)(i.Fragment,{children:/*#__PURE__*/(0,B.jsxs)(j.Z,{children:[/*#__PURE__*/(0,B.jsx)(l.default,{_dynamicHeights:o||e,_getColumnSpanConfig:_,cacheKey:X,id:A?g:void 0,items:ei,scrollContainerRef:t,serverRender:A,...ee}),er,en.length>0&&/*#__PURE__*/(0,B.jsx)(l.default,{cacheKey:`${X}_afterBreak`,items:en,scrollContainerRef:t,...ee})]})})})}):y.isLoadingNext?/*#__PURE__*/(0,B.jsx)(C.Z,{}):r??null,y.isLoadingNext&&"board"===F&&eo&&/*#__PURE__*/(0,B.jsx)(a.$j,{accessibilityLabel:I.bt("Loading", "Loading", "Label for loading spinner", undefined, true),show:!0})]}),et&&/*#__PURE__*/(0,B.jsx)(a.xu,{column:12,paddingY:2,children:/*#__PURE__*/(0,B.jsx)(P.Z,{partialViewportWidth:ea})}),O&&/*#__PURE__*/(0,B.jsx)(Z,{gridContainerRef:this.gridContainerRef,homefeedLoading:y.isLoadingNext}),f&&!this.hideMoreIdeas()&&/*#__PURE__*/(0,B.jsx)(a.xu,{marginBottom:6,children:/*#__PURE__*/(0,B.jsx)(H,{storyId:f})})]})]})}}function Y({feedItems:e,pagination:t,...o}){let{feedItemsAdjustment:i}=o,a=(0,n.TH)(),l=(0,_.ZP)(),d=(0,u.ZP)(),{isAuthenticated:p,isBot:g}=(0,h.B)(),{isBizNuxHomefeedLoadShown:f}=(0,r.v9)(({session:e})=>e),m=e;i?.type==="breakIn"?m=y({items:e,breakIn:i.value}):i?.type==="offset"&&(m=e.slice(i.value));let{experimentalColumnWidth:w,experimentalGutter:x}=(0,s.Z)(),I=(0,c.F)().checkExperiment(p?"web_feed_dynamic_imports_auth":"web_feed_dynamic_imports_unauth").anyEnabled,v=(0,O.gC)();return/*#__PURE__*/(0,B.jsx)(W,{...o,allowDynamicImports:I,deviceType:l,experimentalColumnWidth:w,experimentalGutter:x,feedItems:m,getReduxBoard:v,i18n:d,isAuthenticated:p,location:a,pagination:t,showBizNuxHomefeedLoader:!!f,showSeoMetadata:g||!p})}function q({isAtEnd:e,isFetching:t,fetchMore:o,refresh:i,...n}){let a=(0,r.v9)(({feeds:e})=>e[n.feedKey]??[]),l=(0,r.v9)(({desktopStories:e})=>e),{featuredBoardStoryId:s,feedStoryId:d}=(0,F.Z)(a,l);return/*#__PURE__*/(0,B.jsx)(Y,{...n,featuredBoardStoryId:s,feedItems:a,feedStoryId:d,pagination:{hasNext:!e,isLoadingNext:t,loadNext:()=>o(),refetch:()=>i()}})}function X({resource:{isAtEnd:e,isFetching:t,fetchMore:o,refresh:i},...r}){return/*#__PURE__*/(0,B.jsx)(q,{...r,fetchMore:o,isAtEnd:e,isFetching:t,refresh:i})}function $({resourceConfig:e,...t}){let o=(0,f.Z)(e);return/*#__PURE__*/(0,B.jsx)(X,{...t,resource:o})}function Q({resourceRef:e,...t}){let{isAtEnd:o}=(0,g.Z)(e),{fetchMore:i,refresh:r}=e;return/*#__PURE__*/(0,B.jsx)(q,{...t,fetchMore:i,isAtEnd:o,isFetching:!1,refresh:r})}function J({resourceConfig:e,resourceRef:t,...o}){return t?/*#__PURE__*/(0,B.jsx)(Q,{...o,resourceRef:t}):/*#__PURE__*/(0,B.jsx)($,{...o,resourceConfig:e})}},970842:(e,t,o)=>{o.d(t,{IA:()=>n,cV:()=>r,do:()=>a});let i={},r=e=>{i[e]&&i[e].handlePullToRefresh()},n=(e,t)=>{i[e]=t},a=e=>{delete i[e]}},205758:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(410287),r=o(785893);let n=({children:e})=>/*#__PURE__*/(0,r.jsx)(i.Z,{onTouch:e=>{if(e.target instanceof HTMLElement&&"IMG"===e.target.tagName){let t=e.target.getBoundingClientRect().top+window.scrollY-70;window.scrollTo(window.scrollX,t)}},pressState:"none",children:e})},339712:(e,t,o)=>{o.d(t,{E:()=>i,Z:()=>n});let{Provider:i,useHook:r}=(0,o(498490).Z)("VerticalNav",{width:0}),n=r},210173:(e,t,o)=>{o.d(t,{Z:()=>r});var i=o(339712);function r(){let{width:e}=(0,i.Z)();return e}},462888:(e,t,o)=>{o.d(t,{ET:()=>l,UQ:()=>s,dv:()=>d,xZ:()=>c,yh:()=>p});var i,r=o(667294),n=o(498490),a=o(785893);let l={NONE:"NONE",GROUP:"GROUP",SECRET:"SECRET",ARCHIVED:"ARCHIVED"},s={NONE:0,ARCHIVED:1,GROUP:2,SECRET:3},d=((i={}).COLORS="COLORS",i.CREATED_BY_ME="CREATED_BY_ME",i.FAVORITED="FAVORITED",i.FAVORITED_AND_CREATED="FAVORITED_AND_CREATED_BY_ME",i.INTERESTS="INTERESTS",i.NONE="",i),{Provider:u,useMaybeHook:c}=(0,n.Z)("ProfileViewContext");function p({children:e}){let[t,o]=(0,r.useState)(),[i,n]=(0,r.useState)(new Map),[l,s]=(0,r.useState)(),[c,p]=(0,r.useState)(),[h,g]=(0,r.useState)(d.NONE),[f,m]=(0,r.useState)(0),[_,w]=(0,r.useState)(),x=(0,r.useCallback)((e,t)=>{n(new Map(i.set(e,t)))},[i]),I=(0,r.useMemo)(()=>({boardPinDensity:t,boardSortOrder:i,profileBoardView:l,profilePinDensity:c,profileFollowingSelectedIndex:f,selfProfilePinFilter:h,setBoardPinDensity:o,setSelfProfilePinFilter:g,updateBoardSortOrder:x,selfProfileBoardFilter:_,setSelfProfileBoardFilter:w,setProfileBoardView:s,setProfilePinDensity:p,setProfileFollowingSelectedIndex:m}),[t,i,l,c,f,h,_,x]);return/*#__PURE__*/(0,a.jsx)(u,{value:I,children:e})}},115642:(e,t,o)=>{o.d(t,{Nb:()=>l,Of:()=>s,YO:()=>a,ZP:()=>c,x4:()=>u});var i=o(667294),r=o(753652),n=o(590045);let a=({showProductDetailPage:e,isLargerPane:t,showCloseupContentRight:o})=>e&&t?o?n.Uj:n.zT:1,l=(0,r.qe)(({paneWidth:e,pdpCarouselSlotToPaneRatio:t,showCloseupContentRight:o,showProductDetailPage:i,viewportSize:r,maxWidth:n,descriptionPaneWidth:a,inCommentFooterRedesignExp:l,isCloseupRelatedPinsAboveTheFoldEnabled:s,isCommentAttachmentSelectorOpen:d,isCommentThreadExpanded:u,isMediaViewerOpen:c,isPinNoteExpanded:p,isProductDetailsExpanded:h,isShoppingModuleExpanded:g,setIsCommentAttachmentSelectorOpen:f,setIsCommentThreadExpanded:m,setIsMediaViewerOpen:_,setIsPinNoteExpanded:w,setIsProductDetailsExpanded:x,setIsShoppingModuleExpanded:I,closeupWithinMasonryEnabled:v,peekCloseupEnabled:y,isInRemoveMagnifyingGlassVariant:E,setAbortNoActionPlacementTimeout:S,clientTrackingParams:T,isCloseupMediaViewerOpen:b,setIsCloseupMediaViewerOpen:C,calculatedImageHeight:R,setCalculatedImageHeight:P})=>({paneWidth:e,pdpCarouselSlotToPaneRatio:t,showCloseupContentRight:o,showProductDetailPage:i,viewportSize:r,maxWidth:n,descriptionPaneWidth:a,isCommentAttachmentSelectorOpen:d,inCommentFooterRedesignExp:l,isCloseupRelatedPinsAboveTheFoldEnabled:s,isCommentThreadExpanded:u,isCloseupMediaViewerOpen:b,isMediaViewerOpen:c,isPinNoteExpanded:p,isProductDetailsExpanded:h,isShoppingModuleExpanded:g,setIsCommentAttachmentSelectorOpen:f,setIsCommentThreadExpanded:m,setIsCloseupMediaViewerOpen:C,setIsMediaViewerOpen:_,setIsPinNoteExpanded:w,setIsProductDetailsExpanded:x,setIsShoppingModuleExpanded:I,closeupWithinMasonryEnabled:v,peekCloseupEnabled:y,isInRemoveMagnifyingGlassVariant:E,setAbortNoActionPlacementTimeout:S,clientTrackingParams:T,calculatedImageHeight:R,setCalculatedImageHeight:P})),s={showCloseupContentRight:!0,showProductDetailPage:!1,viewportSize:"lg",paneWidth:n.Gg,pdpCarouselSlotToPaneRatio:1,maxWidth:n.u6,descriptionPaneWidth:n.u6-n.Gg,inCommentFooterRedesignExp:!1,isCloseupRelatedPinsAboveTheFoldEnabled:!1,isCommentAttachmentSelectorOpen:!1,isCommentThreadExpanded:!1,isCloseupMediaViewerOpen:!1,isMediaViewerOpen:!1,isPinNoteExpanded:!1,isShoppingModuleExpanded:!1,closeupWithinMasonryEnabled:!1,peekCloseupEnabled:!1,isInRemoveMagnifyingGlassVariant:!1,calculatedImageHeight:0,setAbortNoActionPlacementTimeout:()=>{},setIsCloseupMediaViewerOpen:()=>{},setIsCommentAttachmentSelectorOpen:()=>{},setIsMediaViewerOpen:()=>{},setIsShoppingModuleExpanded:()=>{},setCalculatedImageHeight:()=>{}},d=(0,i.createContext)(s);function u(){let e=(0,i.useContext)(d);if(!e)throw Error("useCloseupContext must be used within CloseupContextProvider");return e}let c=d},590045:(e,t,o)=>{o.d(t,{$T:()=>w,CI:()=>a,Ch:()=>s,ER:()=>_,Gb:()=>d,Gg:()=>r,Hf:()=>v,Ie:()=>h,KP:()=>g,Kn:()=>l,O5:()=>x,Uj:()=>u,bx:()=>f,d2:()=>p,g9:()=>m,iB:()=>y,rv:()=>I,u6:()=>n,zT:()=>c});var i=o(883119);let r=508,n=1016,a=488,l=992,s=672,d=1176,u=.6,c=.84,p=40,h=72,g=740,f=912,m=32,_=16,w=24,x=2,I=1,v=new i.Ry(5),y={ARTICLE:"https://schema.org/Article",BRAND:"https://schema.org/Brand",PRODUCT:"https://schema.org/Product",RECIPE:"https://schema.org/Recipe",OFFER:"https://schema.org/Offer",OUT_OF_STOCK:"https://schema.org/OutOfStock",PERSON:"https://schema.org/Person"}},220708:(e,t,o)=>{o.d(t,{E:()=>d,H:()=>s});var i=o(609326),r=o(864723);let n=e=>e>=Date.now()-72e5,a=(e,t)=>{let o=[];if(e)for(let i of e)(!t||i.is_shared)&&n(i.ts)&&o.push(i);return o},l=e=>{let t={};if(e)for(let o of e)o.is_shared&&n(o.ts)&&o.pin_id&&(t[o.pin_id]={inviteCode:o.pin_invite_code});return t},s=()=>{let e=(0,r.M0)().getItem(i.uc)??[],t=a(e,!1),o=a(e,!0),n=t.map(e=>e.first_pin_image_signature),s=o.map(e=>e.first_pin_image_signature),d=l(e);return{extraPlpImages:n,plpImageRenderData:t,extraBlpImages:a((0,r.M0)().getItem(i.hI)??[],!0).map(e=>e.first_pin_image_signature),extraSharedImages:s,sharedPinData:d}},d=(e,t)=>{if(e.length!==t.length)return!1;for(let o=0;o<e.length;o+=1)if(e[o].id!==t[o].id)return!1;return!0}},699431:(e,t,o)=>{o.d(t,{Z:()=>a});var i=o(883119),r=o(793874),n=o(785893);function a({color:e,image:t,isSelected:o,title:a}){let l=(0,r.vs)();return/*#__PURE__*/(0,n.jsxs)(i.xu,{alignItems:"center","aria-selected":o,dangerouslySetInlineStyle:{__style:{backgroundColor:l?o?"#fff":"#767676":o?"#111":"#efefef"}},display:"flex",padding:1,rounding:"pill",children:[/*#__PURE__*/(0,n.jsx)(i.zd,{height:48,rounding:"circle",width:48,children:/*#__PURE__*/(0,n.jsx)(i.Ee,{alt:"",color:e,fit:"cover",naturalHeight:t.height??1,naturalWidth:t.width??1,src:t.url??""})}),/*#__PURE__*/(0,n.jsx)(i.xu,{marginEnd:3,marginStart:2,children:/*#__PURE__*/(0,n.jsx)(i.xv,{color:o?"inverse":l?"light":"dark",weight:"bold",children:a})})]})}},602290:(e,t,o)=>{o.d(t,{ZN:()=>a,fv:()=>l,hr:()=>n,lD:()=>s});var i=o(252071);function r(e,t){return i.Z.create("InterestFollowResource",{interest_id:e,interest_list:"favorited",referrer:t})}let n=(e,t)=>({type:"TOPIC_FOLLOW",payload:{id:e,value:t}}),a=(e,t,o)=>async i=>{i(n(e,!0));try{await r(e,o).callCreate(),t({event_type:601,object_id_str:e})}catch(t){i(n(e,!1))}},l=(e,t,o)=>async i=>{i(n(e,!1));try{await r(e,o).callDelete(),t({event_type:602,object_id_str:e})}catch(t){i(n(e,!0))}},s=(e,t="")=>o=>i.Z.create("UpdateFollowedInterestsResource",{referrer:t,updated_interest_follows:e}).callUpdate().then(()=>{Object.keys(e).forEach(t=>{let i=e[t];o(n(t,i))})})},74665:(e,t,o)=>{o.d(t,{Z:()=>r});let i={feed:void 0,featuredBoardStoryId:void 0,feedStoryId:void 0,footerStoryId:void 0,boardShopModuleId:void 0,boardShopModuleIndex:void 0},r=(e,t)=>e?e.reduce(({boardShopModuleId:e,boardShopModuleIndex:o,featuredBoardStoryId:i,feed:r,feedStoryId:n,footerStoryId:a},l,s)=>{let d="story"===l.type&&t[l.id]?.story_type,u="board_ideas_feed"===d,c="board_ideas_preview_detailed"===d,p=!1;if("board_shop_tool_module"===d){let e=t[l.id];p=!!e.custom_properties?.is_full_width}return{feed:r.concat(c||u||p?[]:[l]),featuredBoardStoryId:"featured_boards"===d?l.id:i,feedStoryId:u?l.id:n,footerStoryId:c?l.id:a,boardShopModuleId:p?l.id:e,boardShopModuleIndex:p?s:o}},{boardShopModuleId:void 0,boardShopModuleIndex:void 0,featuredBoardStoryId:void 0,feed:[],feedStoryId:void 0,footerStoryId:void 0}):i},341184:(e,t,o)=>{o.r(t),o.d(t,{default:()=>S});var i,r,n=o(545007),a=o(167912),l=o(883119),s=o(488792),d=o(730212),u=o(533191),c=o(602290),p=o(144326),h=o(590338),g=o(699431),f=o(785893);let m=({backgroundColor:e,decreaseNamePadding:t,isHomefeedTuner:o,isLego:i,isSelected:r,locale:n,nameTextSize:a,renderAsPill:s,showFollowerCount:d,topicName:u,followerCount:c,image:m})=>{let _=(0,p.ZP)(),w=(0,h.Z)(),x=/*#__PURE__*/(0,f.jsx)(l.JO,{accessibilityLabel:_.bt("Selected", "Selected", " - ", undefined, true),color:"inverse",icon:i?"check":"check-circle",size:i?12:24});return s?/*#__PURE__*/(0,f.jsx)(g.Z,{color:e||"#767676",image:m,isSelected:r??!1,title:u}):/*#__PURE__*/(0,f.jsxs)(l.xu,{"aria-selected":r,position:"relative",children:[/*#__PURE__*/(0,f.jsx)(l.zd,{rounding:i||o?4:2,children:/*#__PURE__*/(0,f.jsxs)(l.xu,{dangerouslySetInlineStyle:{__style:{paddingBottom:"100%"}},position:"relative",children:[/*#__PURE__*/(0,f.jsx)(l.xu,{bottom:!0,left:!0,padding:i&&r?1:0,position:"absolute",right:!0,rounding:i&&r?4:0,top:!0,children:/*#__PURE__*/(0,f.jsx)(l.Ee,{alt:u,color:e||"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,src:m.url??""})}),/*#__PURE__*/(0,f.jsx)(l.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{backgroundColor:r?"rgba(0,0,0,0.6)":"rgba(0,0,0,0.3)",border:i&&r?"4px solid #767676":"none"}},left:!0,position:"absolute",right:!0,rounding:i?4:void 0,top:!0}),i&&r&&/*#__PURE__*/(0,f.jsx)(l.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{border:"2px solid #111"}},left:!0,position:"absolute",right:!0,rounding:4,top:!0})]})}),o?/*#__PURE__*/(0,f.jsx)(l.xu,{alignContent:"center",alignItems:"center",bottom:!0,display:"flex",justifyContent:"center",left:!0,padding:2,position:"absolute",right:!0,top:!0,children:/*#__PURE__*/(0,f.jsx)(l.xv,{align:"center",color:"light",size:a,weight:"bold",children:u})}):/*#__PURE__*/(0,f.jsxs)(l.xu,{bottom:!0,left:!0,padding:t?1:2,position:"absolute",right:!0,children:[/*#__PURE__*/(0,f.jsx)(l.xv,{color:"light",size:a,weight:"bold",children:u}),d&&c>=0&&/*#__PURE__*/(0,f.jsx)(l.xu,{paddingY:1,children:/*#__PURE__*/(0,f.jsxs)(l.xv,{color:"inverse",size:"100",children:[/*#__PURE__*/(0,f.jsx)(l.xv,{color:"inverse",inline:!0,size:"100",weight:"bold",children:w(n,c,{shortform:!0,shortform_maximum_fraction_digits:1})}),_.bt("followers", "followers", " - ", undefined, true)]})})]}),r&&/*#__PURE__*/(0,f.jsx)(l.xu,{margin:2,position:"absolute",right:!0,top:!0,children:i?/*#__PURE__*/(0,f.jsx)(l.xu,{alignItems:"center",color:"selected",display:"flex",height:24,justifyContent:"center",rounding:2,width:24,children:x}):x})]})},_=void 0!==i?i:i=o(764290),w=({topicRef:e,...t})=>{let o=(0,a.useFragment)(_,e),i=o.images?{url:o.images.url??"",width:o.images.width??0,height:o.images.height??0,dominant_color:"",type:""}:{dominant_color:"",height:0,type:"",url:"",width:0};return/*#__PURE__*/(0,f.jsx)(m,{backgroundColor:o.background_color??"",followerCount:o.follower_count??0,image:i,topicName:o.name??"",...t})},x=({topic:e,topicBlob:t,topicInfoForContextualExp:o,...i})=>{let r=o||e||t,n=r?.images?.["236x"]||r?.images?.["400x"]||r?.images?.["474x"]||r?.images?.orig||{height:1,url:"",width:1},a=r&&"follower_count"in r&&void 0!==r.follower_count?r.follower_count:-1;return/*#__PURE__*/(0,f.jsx)(m,{backgroundColor:r?.background_color||"",followerCount:a,image:n,topicName:r?.name||"",...i})},I=({decreaseNamePadding:e=!1,isHomefeedTuner:t,isLego:o,isSelected:i=!1,nameTextSize:r="lg",onTouch:a,padding:p=2,renderAsPill:h,showFollowButton:g=!1,showFollowerCount:m=!1,shouldClickthrough:_=!1,topic:I,viewParameter:v,viewType:y})=>{let E=(0,n.I0)(),S=(0,s.Z)(),{locale:T}=(0,d.B)(),b=/*#__PURE__*/(0,f.jsxs)(l.xu,{"data-test-id":"nux-picker-topic",children:["graphql"!==I.type?/*#__PURE__*/(0,f.jsx)(x,{decreaseNamePadding:e,isHomefeedTuner:t,isLego:o,isSelected:i,locale:T,nameTextSize:r,renderAsPill:h,showFollowerCount:m,topic:I.topic,topicBlob:I.topicBlob,topicInfoForContextualExp:I.topicInfoForContextualExp}):/*#__PURE__*/(0,f.jsx)(w,{decreaseNamePadding:e,isHomefeedTuner:t,isLego:o,isSelected:i,locale:T,nameTextSize:r,renderAsPill:h,showFollowerCount:m,topicRef:I.topicRef}),!!I&&g&&/*#__PURE__*/(0,f.jsx)(l.xu,{paddingY:2,children:/*#__PURE__*/(0,f.jsx)(u.Z,{followEventType:601,id:I.id,inline:t,invertColors:t,isFollowed:I.is_followed,onFollow:e=>E((0,c.ZN)(e,S)),onUnfollow:e=>E((0,c.fv)(e,S)),pinKey:null,size:"md",textType:t?"AddRemove":"FollowFollowing",unfollowEventType:602,viewParameter:v||void 0,viewType:y||void 0})})]}),C="/";return I&&(C=`/topics/${I.id}`),_&&I.slug?/*#__PURE__*/(0,f.jsx)(l.Tg,{href:C,onTap:({event:e})=>{a?.(e)},rounding:2,tapStyle:"compress",children:/*#__PURE__*/(0,f.jsx)(l.xu,{padding:p,children:b})}):b},v=void 0!==r?r:r=o(577272),y=({topicRef:e,decreaseNamePadding:t=!1,isHomefeedTuner:o,isLego:i,isSelected:r=!1,nameTextSize:n="lg",onTouch:l,padding:s=2,renderAsPill:d,showFollowButton:u=!1,showFollowerCount:c=!1,shouldClickthrough:p=!1,viewParameter:h,viewType:g})=>{let m=(0,a.useFragment)(v,e);return/*#__PURE__*/(0,f.jsx)(I,{decreaseNamePadding:t,isHomefeedTuner:o,isLego:i,isSelected:r,nameTextSize:n,onTouch:l,padding:s,renderAsPill:d,shouldClickthrough:p,showFollowButton:u,showFollowerCount:c,topic:{id:m.entityId??"",type:"graphql",is_followed:m.is_followed??!1,topicRef:m},viewParameter:h,viewType:g})},E=({id:e,topic:t,topicBlob:o,topicInfoForContextualExp:i,decreaseNamePadding:r=!1,isHomefeedTuner:a,isLego:l,isSelected:s=!1,nameTextSize:d="lg",onTouch:u,padding:c=2,renderAsPill:p,showFollowButton:h=!1,showFollowerCount:g=!1,shouldClickthrough:m=!1,viewParameter:_,viewType:w})=>{let x=(0,n.v9)(({topics:t})=>t[e]),v=t??x;return/*#__PURE__*/(0,f.jsx)(I,{decreaseNamePadding:r,isHomefeedTuner:a,isLego:l,isSelected:s,nameTextSize:d,onTouch:u,padding:c,renderAsPill:p,shouldClickthrough:m,showFollowButton:h,showFollowerCount:g,topic:{id:e,is_followed:!!v?.is_followed,topic:v,topicBlob:o,topicInfoForContextualExp:i,type:"resource"},viewParameter:_,viewType:w})},S=({decreaseNamePadding:e=!1,isHomefeedTuner:t,isLego:o,isSelected:i=!1,nameTextSize:r="lg",onTouch:n,padding:a=2,renderAsPill:l,showFollowButton:s=!1,showFollowerCount:d=!1,shouldClickthrough:u=!1,viewParameter:c,viewType:p,...h})=>h.topicRef?/*#__PURE__*/(0,f.jsx)(y,{decreaseNamePadding:e,isHomefeedTuner:t,isLego:o,isSelected:i,nameTextSize:r,onTouch:n,padding:a,renderAsPill:l,shouldClickthrough:u,showFollowButton:s,showFollowerCount:d,topicRef:h.topicRef,viewParameter:c,viewType:p}):/*#__PURE__*/(0,f.jsx)(E,{decreaseNamePadding:e,id:h.id,isHomefeedTuner:t,isLego:o,isSelected:i,nameTextSize:r,onTouch:n,padding:a,renderAsPill:l,shouldClickthrough:u,showFollowButton:s,showFollowerCount:d,topic:h.topic,topicBlob:h.topicBlob,topicInfoForContextualExp:h.topicInfoForContextualExp,viewParameter:c,viewType:p})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/60909.en_GB-f53e98c38bd56e33.mjs.map