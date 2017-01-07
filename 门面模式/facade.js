/**
 * 门面模式
 *   简化类的接口
 *   消除类和使用本类的客户端的代码耦合
 *   同时构建一个简单的门面代码叫负载的系统变得更简单
 */
(function(){

	//门面
	function addEvebtFacade(el,type,fn){
		if(window.addEventListener){
			//适用于firefox
			el.addEventListener(type,fn,false);
		}else if(window.attachEvent){
			//适用于IE
			el.attachEvent("on"+type,fn);
		}else{
			el["on"+type] = fn;
		}
	}
	document.write("<a id='but1' href='#'>click</a>");
	var el = document.getElementById("but1");
	addEvebtFacade(el,"click",function(){
		alert("ok")
	})
})()