/**
 * ��Ԫ��
 * ������Ҫ�ϸ�ļ̳�,ֻ��Ҫһ����(����)�еĵ�һЩ���������������
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
	 * �ۺϺ���
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

