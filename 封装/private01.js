(function(){
	/*
	 * 1.门户大开类型
	 */
	function Person(age,name){
		this.name = name;
		if(!this.checkAge(age)){
			throw new Error("年龄必须在0到150之间");
		}
		this.age = age;
	}

	Person.prototype = {
		checkAge:function(age){
			if(age>0 && age < 150){
				return true;
			}else{
				return false;
			}
		}
	}
	Person.prototype["getName"] = function(){
		return this.name || "liuhong";	
	}
	var p2 = new Person(18);
	alert(p2.getName());
		
})()