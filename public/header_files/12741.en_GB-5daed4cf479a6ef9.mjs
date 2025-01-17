"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[12741],{81921:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useIsGroupBoard_pin",selections:[{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"collaboratedByMe",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isCollaborative",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null}],storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};i.hash="72582aa208f6837fe96ba824d0271616";let l=i},50165:(e,t,a)=>{a.d(t,{$:()=>d,r:()=>g});var i=a(667294),l=a(498490),s=a(989820),r=a(297728),n=a(730212),o=a(961754),c=a(785893);let{Provider:_,useHook:d}=(0,l.Z)("PinRep");function g({children:e}){let{isAuthenticated:t}=(0,n.B)(),{checkExperiment:a}=(0,r.F)(),{experience:l}=(0,s.Ow)(1000069),[d,g]=(0,i.useState)(!0),[h,u]=(0,i.useState)(!1),[A,m]=(0,i.useState)(!1),[x,p]=(0,i.useState)(null),[f,P]=(0,i.useState)(null),b=(0,s.oS)(1000069),{anyEnabled:I}=a("ap_bmi_custom_activation_nux_revamp_mweb_v2",{dangerouslySkipActivation:!0}),y=(0,o.Z)(t&&I?{name:"UserStateResource",options:{state:"QUICK_SAVES_BOARD_ID"}}:null).data;(0,i.useEffect)(()=>{if(!t){g(!1);return}l&&(!l||l?.experience_id===500417&&l?.display_data.hide_footer)?b.viewExperience(1000069,500417):g(!1),u(!0)},[l]);let E=(0,i.useMemo)(()=>({hasMetSaveRequirementOnUseCaseFeed:A,hasSimplifiedPinGridExpLoaded:h,hidePinRepFooter:d,quickSaveBoardId:y,setHasMetSaveRequirementOnUseCaseFeed:m,setUseCaseFeedOriginalPinId:P,setUseCaseFeedRepinId:p,useCaseFeedOriginalPinId:f,useCaseFeedRepinId:x}),[A,h,d,y,m,P,p,f,x]);return/*#__PURE__*/(0,c.jsx)(_,{value:E,children:e})}},505612:(e,t,a)=>{a.d(t,{Z:()=>n}),a(167912);var i,l=a(959064),s=a(318717);let r=void 0!==i?i:i=a(81921);function n(e,t){let a=(0,s.Z)(r,e);return(0,l.Z)(a.board?.collaboratedByMe,a.board?.owner?.entityId,t)&&!!a.board?.isCollaborative}},948195:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(115642);let l=(e,t)=>{let{isCloseupRelatedPinsAboveTheFoldEnabled:a}=(0,i.x4)();return{isEligibleForStaticImageIdeaPin:!!t&&(!1===e||a)}}},251184:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(667294),l=a(785893);let s=({text:e})=>Array.isArray(e)?e.map((e,t)=>/*#__PURE__*/(0,l.jsx)(i.Fragment,{children:e},t)):e},717067:(e,t,a)=>{a.d(t,{Z:()=>i});function i(e){let t=Math.round(e/1e3),a=Math.floor(t/60),i=t%60;return a+":"+(i<10?"0":"")+i}},891985:(e,t,a)=>{a.d(t,{NK:()=>m,P6:()=>s,ZE:()=>u,Zt:()=>A,_J:()=>o,_S:()=>x,cL:()=>g,jL:()=>n,oN:()=>l,rM:()=>h,sV:()=>c,sY:()=>_});var i=a(673687);let l=5e3,s=5e3/i.gJ,r=["Uploaded by user"],n=(e,t)=>!!t&&!e,o=e=>!!e&&5!==e,c=e=>["email","messages","deep_linking"].includes(e),_=e=>!!e&&"gif"===e,d=e=>"pinstory"===e,g=({embedSrc:e,embedSubtype:t,embedType:a})=>!!e&&!_(a)&&!d(t),h=({link:e,mobileLink:t,trackedLink:a})=>!t&&!a&&!e,u=e=>/pin.it/gim.test(e||""),A=({link:e,mobileLink:t,origImageUrl:a,trackedLink:i})=>t||i||e||a||"",m=(e,t)=>({deeplinkUri:{android:`pin/${e}/repin`,iOS:`repin/${e}`},mwebUri:{pathname:`/pin/${e}/repin/`,state:{trackingParams:t.state?t.state.trackingParams:""}}});function x(e){for(let t of r)if(e===t)return!1;return!0}},617280:(e,t,a)=>{function i({m:e=0,h:t=0}){let a;return a=t<=0?t:e>45?t+1:e>15?t+.5:t,{m:e,h:t,rm:t>0?0:e,rh:a}}function l(e){let t=Math.floor(e/3600);return i({m:Math.floor(e%3600/60),h:t})}a.d(t,{X:()=>i,u:()=>l})},545230:(e,t,a)=>{a.d(t,{i:()=>i});let i={AC:"ac",AUTOCOMPLETE:"autocomplete",BOARD:"blp",CONTENT_TYPE_FILTER:"content_type_filter",DIRECT_NAVIGATION:"direct_navigation",FILTER:"filter",GUIDED_SEARCH_ENTRY:"guided_search_entry",GUIDED_SEARCH_LANDING:"guided_search_landing",HASHTAG_CLOSEUP:"hashtag_closeup",HASHTAG_PINREP:"hashtag_pinrep",HOMEFEED_BUBBLE:"homefeed_bubble",HUB_PAGE:"hub_page",IDEAS_ROOT:"ideas_root",IMAGE_ONLY_ATTRIBUTION:"image_only_attribution",LANDING_PAGE_STORY:"landing_page_story",NO_RESULTS_SEARCH_STORY:"no_results_search_story",PRODUCT:"product",REMOVE:"remove",RS:"rs",SHOPPING_FILTER:"shopping_filter",SITELINKS_SEARCHBOX:"sitelinks_searchbox",SLP_REC_CURATED:"slp_rec_curated",SLP_REC_TRENDING:"slp_rec_trending",SRS:"srs",STRUCTURED_GUIDE:"structured_guide",TRENDING:"trending",TYPED:"typed",TYPO_AUTO_ORIGINAL:"typo_auto_original",TYPO_SUGGESTION:"typo_suggestion",UNKNOWN:"Unknown",VANILLA_GUIDE:"guide",URECS:"urecs",VIDEO:"video"}},715824:(e,t,a)=>{a.d(t,{ZP:()=>l,mP:()=>i});let i="…";function l(e,t=80,a=i,s=!1){let r;if(!e)return"";if(e.length<=t)return e;if(" "!==e[t-1]&&" "===e[t]||s)r=e.substring(0,t);else{let a=e.lastIndexOf(" ",t);r=e.substring(0,a)}return(r=r.replace(/[\- _,.<>:;+=*&@~\/\|!]*$/,""))+a}},790661:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(976534);let l=({url:e})=>{if(e){let t=e.split("?");if(t[1])return(0,i.Z)(t[1])}return(0,i.Z)()}},673687:(e,t,a)=>{a.d(t,{$f:()=>l,Cy:()=>o,DR:()=>i,Fm:()=>n,bR:()=>r,gJ:()=>s,lG:()=>c});let i=1,l=2,s=1e3,r=1e3,n=1e3,o=Object.freeze({DEFAULT:0,LOAD_START:1,LOADED_METADATA:2,LOADED_DATA:3,PLAYING:4,PAUSED:5,SEEKING:6,STALLING:7,FAILED:8,ENDED:9}),c=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4})},816933:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(883119),l=a(785893);function s({iconAccessibilityLabel:e,icon:t,linkAccessibilityLabel:a,showNavigationIcon:s,text:r,backgroundColor:n="lightGray"}){return/*#__PURE__*/(0,l.jsxs)(i.kC,{alignItems:"stretch",justifyContent:"start",children:[/*#__PURE__*/(0,l.jsx)(i.xu,{"data-test-id":"ad-reason-icon",children:/*#__PURE__*/(0,l.jsx)(i.Sj,{accessibilityLabel:e,bgColor:n,icon:t,iconColor:"darkGray"})}),/*#__PURE__*/(0,l.jsx)(i.xu,{alignSelf:"center","data-test-id":"ad-location-targeting-reason",height:"100%",marginStart:2,children:/*#__PURE__*/(0,l.jsx)(i.xv,{children:r})}),s&&a&&/*#__PURE__*/(0,l.jsx)(i.kC,{direction:"column",justifyContent:"center",children:/*#__PURE__*/(0,l.jsx)(i.JO,{accessibilityLabel:a,color:"default",icon:"arrow-forward"})})]})}},523194:(e,t,a)=>{a.d(t,{DK:()=>d,K1:()=>n,nn:()=>c,we:()=>_,zn:()=>o});let i=e=>e.bt("Female", "Female", "waista.modal.attribute.female", undefined, true),l=e=>e.bt("Male", "Male", "waista.modal.attribute.male", undefined, true),s=e=>e.bt("Web", "Web", "waista.modal.attribute.web", undefined, true),r=e=>e.bt("Mobile web", "Mobile Web", "waista.modal.attribute.mWeb", undefined, true);function n(e,t){let{name:a=""}=e.find(e=>e.key===t)??{};return a}function o(e,t){return"FEMALE"===e?i(t):"MALE"===e?l(t):""}function c(e,t){return"AppType_WEB"===e||"AppType_WEB_DENZEL"===e?s(t):"AppType_WEB_MOBILE"===e?r(t):""}function _(e,t){let{name:a=""}=e.find(e=>e.key===t)??{};return a}function d(e=null,t=4){return e&&Object.keys(e).filter(t=>"boolean"==typeof e[t]||"string"==typeof e[t]).filter(t=>!1!==e[t]&&""!==e[t]).slice(0,t).reduce((t,a)=>({...t,[a]:e[a]}),{})}},101736:(e,t,a)=>{a.d(t,{Z:()=>u});var i=a(667294),l=a(883119),s=a(803611),r=a(107941),n=a(144326),o=a(297728),c=a(115642),_=a(613756),d=a(785893);let g=new l.Ry(3);function h({anchor:e,children:t,displayOptions:a,onFlyoutDismiss:i}){let s=(0,n.ZP)(),{closeupWithinMasonryEnabled:_}=(0,c.x4)(),{checkExperiment:h}=(0,o.F)(),u=h("sg_dweb_sharesheet_update").anyEnabled?r.b7:void 0;return a?.shownWithinMasonry||a?.shownWithinProfileHeader?/*#__PURE__*/(0,d.jsx)(l.mh,{zIndex:a.shownWithinProfileHeader||_&&a?.shownWithinMasonry?g:u,children:/*#__PURE__*/(0,d.jsx)(l.xu,{position:a.inModal?"absolute":void 0,top:!!a.inModal||void 0,zIndex:a.inModal?r.b7:void 0,children:/*#__PURE__*/(0,d.jsx)(l.J2,{_deprecatedShowCaret:a.showCaret,accessibilityLabel:s.bt("Share menu", "Share Menu", "SendShareController.ShareMenu.accessibilityLabel", undefined, true),anchor:e,forceDirection:a.forceDirection??!1,idealDirection:a.idealDirection??"down",onDismiss:()=>{i()},positionRelativeToAnchor:!1,size:"flexible",children:t})})}):/*#__PURE__*/(0,d.jsx)(l.J2,{_deprecatedShowCaret:a?.showCaret,accessibilityLabel:s.bt("Share menu", "Share Menu", "SendShareController.ShareMenu.accessibilityLabel", undefined, true),anchor:e,forceDirection:a?.forceDirection??!1,idealDirection:a?.idealDirection??"down",onDismiss:()=>{i()},size:"flexible",children:t})}function u({children:e,flyoutDisplayOptions:t,isFlyoutOpen:a,loggingOptions:r,onClick:n,onFlyoutDismiss:o,onToggleFlyout:g,sendObject:u}){let A=(0,i.useRef)(null),{clientTrackingParams:m}=(0,c.x4)(),x=(0,s.Z)();return/*#__PURE__*/(0,d.jsxs)(l.xu,{ref:A,dangerouslySetInlineStyle:{__style:{pointerEvents:"auto"}},children:[/*#__PURE__*/(0,d.jsx)(l.xu,{children:e({handleSendShareFlyoutButtonClick:()=>{if(x){x();return}g()}})}),a&&/*#__PURE__*/(0,d.jsx)(l.xu,{position:"fixed",children:/*#__PURE__*/(0,d.jsx)(h,{anchor:A.current,displayOptions:t,onFlyoutDismiss:o,children:/*#__PURE__*/(0,d.jsx)(_.Z,{clientTrackingParams:m,component:r.component,element:r.element,onExternalSend:r.onExternalSend,onHide:()=>{n?.(),o()},sendType:u.type,sharedObject:{...u,type:"user"===u.type?"pinner":u.type},viewParameter:r.viewParameter,viewType:r.viewType})})})]})}},107950:(e,t,a)=>{a.d(t,{Z:()=>A,s:()=>u});var i=a(667294),l=a(883119),s=a(144326),r=a(240760),n=a(730212),o=a(961754),c=a(383399),_=a(816933),d=a(523194),g=a(424583),h=a(785893);let u={DIGITAL_CAPTURE:0,NEGATIVE_FILM:1,POSITIVE_FILM:2,PRINT:3,MINOR_HUMAN_EDITS:4,COMPOSITE_CAPTURE:5,ALGORITHMICALLY_ENHANCED:6,DATA_DRIVEN_MEDIA:7,DIGITAL_ART:8,VIRTUAL_RECORDING:9,COMPOSITE_SYNTHETIC:10,TRAINED_ALGORITHMIC_MEDIA:11,COMPOSITE_WITH_TRAINED_ALGORITHMIC_MEDIA:12,ALGORITHMIC_MEDIA:13,SOFTWARE_IMAGE:14,MULTI_PIN_TRAINED_ALGORITHMIC_MEDIA:15};function A({promoterFullName:e,geoRegionAttribute:t,geoPostalCodeAttribute:a,isCustomerListMatched:u,isActalikeMatched:A,isEngagementMatched:m,isFromGPSLocation:x,matchedAgeBucket:p,matchedGender:f,matchedLocale:P,matchedDevice:b,matchedKeyword:I,isFirstPartyAdPersonalizationEnabled:y,isThirdPartyAdPersonalizationEnabled:E}){let w=(0,s.ZP)(),{id:S}=(0,c.Z)(),j=(0,g.mN)()(S??""),R=j?.gender??"",v=(0,d.zn)(f,w);v="unspecified"===R?"":v;let T=(0,d.nn)(b,w),{locale:z}=(0,n.B)(),D=(0,o.Z)({name:"LocalesResource"}),{country:L=""}=(0,c.Z)(),C=(0,o.Z)({name:"CountriesResource",options:{hasEmptyState:!0}}),M=(0,d.K1)(C.data??[],L),O=""!==p||""!==f&&"unspecified"!==R||!y&&""!==M||""!==T||""!==P||y&&m||y&&A||""!==t||y&&""!==a;return/*#__PURE__*/(0,h.jsx)(l.xu,{"data-test-id":"waista",children:/*#__PURE__*/(0,h.jsxs)(l.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[!y&&/*#__PURE__*/(0,h.jsx)(_.Z,{icon:"pinterest",iconAccessibilityLabel:w.bt("Icon for ad targeting context", "Icon for ad targeting context", "waista.modal.criteria.list.contexticon", undefined, true),text:(0,r.XB)({text:w.bt("Based on the context of the content you see in a session <strong id=\"1\">on Pinterest</strong>", "Based on the context of the content you see in a session <strong id=\"1\">on Pinterest</strong>", "waista.modal.criteria.list.context", undefined, true),jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-platform-bucket")}})}),""!==I&&/*#__PURE__*/(0,h.jsx)(_.Z,{icon:"search",iconAccessibilityLabel:w.bt("Icon for ad targeting keyword search", "Icon for ad targeting keyword search", "waista.modal.criteria.list.keywordSearchIcon", undefined, true),text:(0,r.XB)({text:w.bt("Because you searched for <strong id=\"1\">{{ keyword }}</strong>", "Because you searched for <strong id=\"1\">{{ keyword }}</strong>", "waista.modal.criteria.list.keywordSearch", undefined, true),markers:{keyword:I??""},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-keyword-bucket")}})}),(y||E)&&/*#__PURE__*/(0,h.jsx)(_.Z,{icon:"cog",iconAccessibilityLabel:w.bt("Icon for ad targeting user settings", "Icon for ad targeting user settings", "waista.modal.criteria.list.settings", undefined, true),text:w.bt("Depending on your privacy settings, because of your activities on and/or off Pinterest", "Depending on your privacy settings, because of your activities on and/or off Pinterest", "waista.modal.criteria.list.settings", undefined, true)}),O&&/*#__PURE__*/(0,h.jsx)(_.Z,{icon:"person",iconAccessibilityLabel:w.bt("Icon for ad targeting advertiser name", "Icon for ad targeting advertiser name", "waista.modal.criteria.list.advertiserName", undefined, true),text:(0,r.XB)({text:w.bt("Because <strong id=\"1\">{{ advertiserName }}</strong> is trying to reach people:", "Because <strong id=\"1\">{{ advertiserName }}</strong> is trying to reach people:", "waista.modal.criteria.list.advertiserName", undefined, true),markers:{advertiserName:e},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-advertiserName-bucket")}})}),/*#__PURE__*/(0,h.jsx)(l.xu,{marginStart:8,children:/*#__PURE__*/(0,h.jsxs)(l.aV,{label:/*#__PURE__*/(0,h.jsx)(l.xv,{children:(0,r.XB)({text:w.bt("Because {{ advertiserName }} is trying to reach people:", "Because {{ advertiserName }} is trying to reach people:", "waista.modal.criteria.list.advertiserName", undefined, true),markers:{advertiserName:e}})}),labelDisplay:"hidden",type:"unordered",children:[""!==p&&/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:/*#__PURE__*/(0,h.jsx)(l.xv,{children:(0,r.XB)({text:w.bt("Who have set their age within the <strong id=\"1\">{{ ageBucketMatch }}</strong> age range", "Who have set their age within the <strong id=\"1\">{{ ageBucketMatch }}</strong> age range", "waista.modal.criteria.list.ageBucketRangeMatch", undefined, true),markers:{ageBucketMatch:p??""},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-age-bucket")}})})}),!y&&""!==P&&/*#__PURE__*/(0,h.jsxs)(i.Fragment,{children:[/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:/*#__PURE__*/(0,h.jsx)(l.xv,{children:(0,r.XB)({text:w.bt("Who have set their language to <strong id=\"1\">{{ language }}</strong>", "Who have set their language to <strong id=\"1\">{{ language }}</strong>", "waista.modal.criteria.list.languageMatch", undefined, true),markers:{language:(0,d.we)(D.data??[],z)},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-language")}})})}),/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:/*#__PURE__*/(0,h.jsx)(l.xv,{children:(0,r.XB)({text:w.bt("Who have set their language to <strong id=\"1\">{{ language }}</strong>", "Who have set their language to <strong id=\"1\">{{ language }}</strong>", "waista.modal.criteria.list.languageMatch", undefined, true),markers:{language:(0,d.we)(D.data??[],z)},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-language")}})})})]}),y&&""!==P&&/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:/*#__PURE__*/(0,h.jsx)(l.xv,{children:(0,r.XB)({text:w.bt("Primary language is <strong id=\"1\">{{ language }}</strong>", "Primary language is <strong id=\"1\">{{ language }}</strong>", "waista.modal.criteria.list.primarylLanguageMatch", undefined, true),markers:{language:(0,d.we)(D.data??[],z)},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-language")}})})}),!y&&""!==f&&""!==v&&/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:/*#__PURE__*/(0,h.jsx)(l.xv,{children:(0,r.XB)({text:w.bt("Who have set their gender to <strong id=\"1\">{{ gender }}</strong>", "Who have set their gender to <strong id=\"1\">{{ gender }}</strong>", "waista.modal.criteria.list.setGenderMatch", undefined, true),markers:{gender:v},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-gender")}})})}),y&&""!==f&&""!==v&&/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:v})}),""!==T&&/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:w.bt("With your device type", "With your device type", "waista.modal.criteria.list.deviceMatch", undefined, true)}),!y&&""!==t&&/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:/*#__PURE__*/(0,h.jsx)(l.xv,{children:(0,r.XB)({text:w.bt("In <strong id=\"1\">{{ country }}</strong>", "In <strong id=\"1\">{{ country }}</strong>", "waista.modal.criteria.list.countryMatch", undefined, true),markers:{country:L},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-country")}})})}),y&&""!==t&&/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:/*#__PURE__*/(0,h.jsx)(l.xv,{children:(0,r.XB)({text:w.bt("Based in <strong id=\"1\">{{ geoRegion }}</strong>", "Based in <strong id=\"1\">{{ geoRegion }}</strong>", "waista.modal.criteria.list.geoRegionMatch", undefined, true),markers:{geoRegion:t??""},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-geoRegion")}})})}),y&&""!==a&&/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:/*#__PURE__*/(0,h.jsx)(l.xv,{children:(0,r.XB)({text:w.bt("Based in <strong id=\"1\">{{ geoPostalCodeAttribute }}</strong>", "Based in <strong id=\"1\">{{ geoPostalCodeAttribute }}</strong>", "waista.modal.criteria.list.geoPostalCodeAttributeMatch", undefined, true),markers:{geoPostalCodeAttribute:a??""},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-geoPostalCodeAttribute")}})})}),y&&m&&/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:w.bt("Who have interacted with their content on Pinterest", "Who have interacted with their content on Pinterest", "waista.modal.criteria.list.engagementMatch", undefined, true)}),y&&A&&/*#__PURE__*/(0,h.jsx)(l.aV.Item,{text:/*#__PURE__*/(0,h.jsx)(l.xv,{children:(0,r.XB)({text:w.bt("With similar demographic or interests as other <strong id=\"1\">{{ brandName }}</strong> customers", "With similar demographic or interests as other <strong id=\"1\">{{ brandName }}</strong> customers", "waista.modal.criteria.list.actAlikeMatch", undefined, true),markers:{brandName:e??""},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-act-alike")}})})})]})}),y&&u&&/*#__PURE__*/(0,h.jsx)(_.Z,{icon:"menu",iconAccessibilityLabel:w.bt("Icon for ad targeting user on an audience list", "Icon for ad targeting user on an audience list", "waista.modal.criteria.list.listIcon", undefined, true),text:(0,r.XB)({text:w.bt("Because you are on a list provided by <strong id=\"1\">{{ brandName }}</strong>", "Because you are on a list provided by <strong id=\"1\">{{ brandName }}</strong>", "waista.modal.criteria.list.onCustomerListTargeting", undefined, true),markers:{brandName:e??""},jsxReplacements:{1:({innerHtmlStrings:e})=>/*#__PURE__*/(0,h.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"waista-customer-list")}})}),y&&x&&/*#__PURE__*/(0,h.jsx)(_.Z,{icon:"location",iconAccessibilityLabel:w.bt("Icon for ad targeting user on GPS", "Icon for ad targeting user on GPS", "waista.modal.criteria.list.GPS", undefined, true),text:w.bt("Because of your GPS location", "Because of your GPS Location", "waista.modal.criteria.list.GPSLocation", undefined, true)})]})})}},151385:(e,t,a)=>{a.d(t,{AH:()=>_,CK:()=>c,Fc:()=>n,Wj:()=>r,Xe:()=>s,kb:()=>o,wS:()=>l,zX:()=>d});var i=a(107950);let l=(e,t,a,i)=>t||(e?e.official_user:a||i);function s({hasLinkDomain:e,hasNativeCreator:t,hasOriginPinner:a,pinDomain:i,sourceUserUsername:l,sourceUserFullName:s}){return!t&&(e||a)&&l?{pinCreditLink:`/${l}/`,pinCredit:s}:{pinCreditLink:void 0,pinCredit:!t&&e?i:""}}let r=({i18n:e,hasLinkDomain:t,hasRichMetadataArticle:a,hasRichMetadataRecipeCategorizedIngredients:i,hasRichMetadataTutorial:l,richMetadataRecipeFromAggregatedData:s})=>(!t||s)&&e.bt("Saved by ", "Saved by ", "Closeup pin annotation", undefined, true)||l&&e.bt("Saved from ", "Saved from ", "pin annotation", undefined, true)||i&&e.bt("Recipe from ", "Recipe from ", "pin annotation", undefined, true)||a&&e.bt("Article from ", "Article from ", "pin annotation", undefined, true)||e.bt("From ", "From ", "Closeup pin annotation", undefined, true);function n({i18n:e,hasRichMetadataProductOfferSummary:t,richMetadataProductName:a,richSummaryProductName:i,hasRichSummaryProductOfferSummary:l}){return t&&a||!t&&i&&l?e.bt("Product sold by ", "Product sold by ", "pin annotation", undefined, true):""}let o=({hasLinkDomain:e,richMetadata:t,richSummary:a})=>e&&!t?.recipe?.fromAggregatedData&&t?.products&&t.products[0]&&t.products[0].name&&t.products[0].offerSummary?t.products[0].offerSummary:a?.products&&a.products[0]&&a.products[0].name&&a.products[0].offerSummary?a.products[0].offerSummary:void 0,c=({hasRichMetadata:e,hasRichMetadataProducts:t,hasRichMetadataArticle:a,hasRichMetadataRecipe:i})=>e?t?144:a?141:i?145:139:140,_=e=>!!e&&!e.startsWith("https://i.pinimg.com"),d=e=>!!e&&[i.s.TRAINED_ALGORITHMIC_MEDIA,i.s.COMPOSITE_WITH_TRAINED_ALGORITHMIC_MEDIA].includes(e)},613756:(e,t,a)=>{a.d(t,{Z:()=>_});var i=a(667294),l=a(883119),s=a(602185),r=a(144326),n=a(750077),o=a(785893);let c=(0,i.lazy)(()=>Promise.all([a.e(36075),a.e(36060),a.e(61116)]).then(a.bind(a,790169)));function _(e){let t=(0,r.ZP)();return/*#__PURE__*/(0,o.jsx)(s.Z,{name:"SafeSuspense_SendObjectLoader_SendObjectWrapper",children:/*#__PURE__*/(0,o.jsx)(n.Z,{fallback:/*#__PURE__*/(0,o.jsx)(l.xu,{alignItems:"center",display:"flex",justifyContent:"center",padding:2,width:"100%",children:/*#__PURE__*/(0,o.jsx)(l.$j,{accessibilityLabel:t.bt("Loading sharing", "Loading sharing", "Accessibility label for loading sharing UI", undefined, true),show:!0})}),children:/*#__PURE__*/(0,o.jsx)(c,{...e})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/12741.en_GB-5daed4cf479a6ef9.mjs.map