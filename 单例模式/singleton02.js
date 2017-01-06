/**
 * 2.具有局部变量的强大单体
 */
(function(){
	//模拟一个Ajax
	function Ajax(){}
	Ajax.request = function(url,fn){
		if(true){//成功回调
			fn("liuhong","js-design-pattern");
		}
	}	

	var UserInfo = (function(){
		//利用Ajax来完成操作
		var name = "";//局部变量
		var code = "";//局部变量
		//ajax
		Ajax.request("www.uspcat.com",function(n,c){
			name = n;
			code = c;
		})
		
		return {
			name:name,
			code:code
		}
	})();
	//testing
	alert(UserInfo.name)
})()





