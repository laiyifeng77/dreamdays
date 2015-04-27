define(function(require,exports,module) {
	
	var $ = require('zepto');
	
	function Http(){
		//Http请求模块
	}
	
	//对外提供的接口
	module.exports = Http;
	
	//发送Http请求
	Http.prototype.req = function(httpUrl,httpParam,onSuccess){
		this._ajax(httpUrl,httpParam,onSuccess,function(){
			alert("http request fail");
			
		});
		
	}
	
	//使用zepto发送Ajax请求
	Http.prototype._ajax = function(url,param,onSuccess,onFailure){
		$.ajax({
			type: "get",
			url: url,
			timeout: 6000,
			data: param,
			cache: false,
			dataType: "jsonp",
			jsonpCallback: "jsoncallback" + new Date().getTime(),
			success: onSuccess,
			error: onFailure
		});
		
	}
	
	
})