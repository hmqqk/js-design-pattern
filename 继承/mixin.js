/**
 * 掺元类
 * 当不需要严格的继承,只需要一个类(几个)中的的一些函数的情况下适用
 * 
 */
(function(){
	
	var JSON = {
		toJSONString :function(){
			var outPut = [];
			for(key in this){
				outPut.push(key+" --> "+this[key])
			}
			return outPut;
		}
	};
	/**
	 * 聚合函数
	 */
	function mixin(receivingClass,givingClass){
		for(methodName in givingClass){
			if(!receivingClass.__proto__[methodName]){
				receivingClass.__proto__[methodName] = givingClass[methodName]
			}
		}
	}
	var o = {name:"liuhong",age:18}
	mixin(o,JSON);
	document.write(o.toJSONString().join(","))

})()

