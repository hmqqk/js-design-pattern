(function(){
	/*
	* 2.用命名规范来区别私有和公有变量
	*/
	function Person(name,age,email){
		//定义私有变量
		this._name;
		this._age;
		this.setName(name);
		this.setAge(age);
		//定义公有变量
		this.email = email;
		
	}
	Person.prototype = {
		setName:function(name){
			this._name = name;
		},
		setAge :function(age){
			if(age>0 && age < 150){
				this._age = age;
			}else{
				throw new Error("年龄必须在0到150之间");
			}			
		}
	}
	var p = new Person("liuhong",18,"idliuhong@163.com");
})()