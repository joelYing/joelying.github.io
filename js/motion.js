// build time:Fri Aug 16 2019 21:03:44 GMT+0800 (GMT+08:00)
NexT.motion={};NexT.motion.integrator={queue:[],cursor:-1,init:function(){this.queue=[];this.cursor=-1;return this},add:function(t){this.queue.push(t);return this},next:function(){this.cursor++;var t=this.queue[this.cursor];$.isFunction(t)&&t(NexT.motion.integrator)},bootstrap:function(){this.next()}};NexT.motion.middleWares={logo:function(t){var i=[];var o=$(".brand");var n=$(".custom-logo-image");var e=$(".site-title");var s=$(".site-subtitle");var r=$(".logo-line-before i");var a=$(".logo-line-after i");o.length>0&&i.push({e:o,p:{opacity:1},o:{duration:200}});function u(t){t=Array.isArray(t)?t:[t];return t.every(function(t){return t.length>0})}function l(t,i){return{e:$(t),p:{translateX:i},o:{duration:500,sequenceQueue:false}}}function c(){i.push({e:n,p:{opacity:1,top:0},o:{duration:200}})}NexT.utils.isMist()&&u([r,a])&&i.push(l(r,"100%"),l(a,"-100%"));NexT.utils.isMuse()&&u(n)&&c();u(e)&&i.push({e:e,p:{opacity:1,top:0},o:{duration:200}});u(s)&&i.push({e:s,p:{opacity:1,top:0},o:{duration:200}});(NexT.utils.isPisces()||NexT.utils.isGemini())&&u(n)&&c();if(i.length>0){i[i.length-1].o.complete=function(){t.next()};$.Velocity.RunSequence(i)}else{t.next()}if(CONFIG.motion.async){t.next()}},menu:function(t){$(".menu-item").velocity("transition.slideDownIn",{display:null,duration:200,complete:function(){t.next()}});if(CONFIG.motion.async){t.next()}},postList:function(t){var i=$(".post-block, .pagination, .comments");var o=CONFIG.motion.transition.post_block;var n=$(".post-header");var e=CONFIG.motion.transition.post_header;var s=$(".post-body");var r=CONFIG.motion.transition.post_body;var a=$(".collection-title, .archive-year");var u=CONFIG.motion.transition.coll_header;var l=i.length>0;if(l){var c=window.postMotionOptions||{stagger:100,drag:true,complete:function(){t.next()}};if(CONFIG.motion.transition.post_block){i.velocity("transition."+o,c)}if(CONFIG.motion.transition.post_header){n.velocity("transition."+e,c)}if(CONFIG.motion.transition.post_body){s.velocity("transition."+r,c)}if(CONFIG.motion.transition.coll_header){a.velocity("transition."+u,c)}}if(NexT.utils.isPisces()||NexT.utils.isGemini()){t.next()}},sidebar:function(t){NexT.utils.updateSidebarPosition();var i=$(".sidebar-inner");var o=CONFIG.motion.transition.sidebar;if(CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())){i.velocity("transition."+o,{display:null,duration:200,complete:function(){i.css({transform:"initial"})}})}t.next()}};
//rebuild by neat 