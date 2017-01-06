(function(){
	 /*
	 * 3.闭包
	 */
 
	function person(name,age,email,sex){
		this.email = email;//public 变量
		//get
		this.getName = function(){
			return this.name;
		}
		this.getAge = function(){
			return this.age;
		}		
		//set
		this.setName = function(name){
			this.name = name
		}
		this.setAge = function(age){
			if(age>0 && age < 150){
				this.age = age
			}else{
				throw new Error("年龄必须在0到150之间");
			}				
		}
		var _sex = "M";
		this.getSex = function(){
			return _sex;
		}
		this.setSex = function(){
			_sex = sex
		}
		this.init = function(){
			this.setName(name);
			this.setAge(age);
		}
		this.init();
	}
	//testing 
	var p = new person("liuhong",18,"idliuhong@163.com")
})()




