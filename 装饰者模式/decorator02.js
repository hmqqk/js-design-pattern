/**
 * 装饰者应用在类中的函数上
 */
(function(){
	//写一个装饰者函数,函数的目的在于把目标函数的返回数值变成大写
	function upperCaseDecorator(fun){
		return function(){
			return fun().toUpperCase();
		}
	}
	//被封装的函数
	function getDate(){
		return new Date().toString();
	}
	//执行装饰
	getDateCaps = upperCaseDecorator(getDate);
	document.write(getDate()+"<br>");
	document.write(getDateCaps());

})()







