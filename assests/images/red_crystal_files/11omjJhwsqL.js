(function(e){var f=window.AmazonUIPageJS||window.P,h=f._namespace||f.attributeErrors,b=h?h("DetailPageLazyLoadLibAssets",""):f;b.guardFatal?b.guardFatal(e)(b,window):b.execute(function(){e(b,window)})})(function(e,f,h){function b(e,d,b){f.clientLogger&&(b.ap=e,b.ac=d)}function n(g){(function(d){function g(a){d(a.elem).find(".loading_ind").show();a.metrics&&(a.ajaxStart=new Date,d(a.elem).find(".loading_ind:first").fromScreenBottom(function(){a.loadBarTime=new Date},0));try{d.ajax({url:a.url,type:"GET",
timeout:a.timeout,retryLimit:a.retry,tryCount:0,cache:a.cache,success:function(c,f,e){d(a.elem).html(c);a.metrics&&(c=(new Date).getTime(),b("lazyload",a.name,{at:c-a.ajaxStart.getTime(),s:!0,tc:this.tryCount,tt:a.type,lt:a.loadBarTime?c-a.loadBarTime.getTime():0}))},error:function(c,f){this.tryCount++;if(this.tryCount<this.retryLimit)d.ajax(this);else if(d(a.elem).find(".loading_ind").hide(),d(a.elem).find(".failed_load").show(),a.metrics){var e=(new Date).getTime();b("lazyload",a.name,{at:e-a.ajaxStart.getTime(),
s:!1,tc:this.tryCount,tt:a.type,lt:a.loadBarTime?e-a.loadBarTime.getTime():0,xs:c.status,ae:f.toString().substr(0,100)})}}})}catch(c){a.metrics&&b("lazyload",a.name,{s:!1,tt:a.type,ae:c.toString().substr(0,100)})}}d.fn.lazyLoadContent=function(a){a.url&&this.each(function(){var c={elem:this,trigger:["scroll"],threshold:400,metrics:!1,name:"lazy",retry:3,timeout:1E4,cache:!0};d.extend(c,a);var b=!1;f.ue||(c.metrics=!1);for(var k=0;k<c.trigger.length;k++)if("scroll"===c.trigger[k])d(this).fromScreenBottom(function(a,
d){b||(b=!0,c.type=d,g(c))},c.threshold);else if("oncf"===c.trigger[k])if(m&&p)e.when("cf").execute(function(){b||(b=!0,c.type="oncf",g(c))});else f.amznJQ.onCompletion("amznJQ.criticalFeature",function(){b||(b=!0,c.type="oncf",g(c))})})};d.fn.fromScreenBottom=function(a,c){a&&(c||(c=0),this.each(function(){var b=this,e=function(g){var l=d(f).scrollTop()+d(f).height();if(d(b).offset().top-l<c){l="ready";g&&g.type&&(l=g.type);try{a(b,l)}catch(h){}d(f).unbind("scroll",e)}};d(f).bind("scroll",e);e()}))}})(g)}
var m="object"===typeof e&&"function"===typeof e.when,p;m?e.when("jQuery").execute(function(b){n(b)}):n(f.jQuery);m?e.when("isLazyLoadWeblabEnabled").execute(function(b){(p=b)?e.register("lazyLoadLib"):f.amznJQ.declareAvailable("lazyLoadLib")}):f.amznJQ.declareAvailable("lazyLoadLib")});