/**
 * 实现简单的链式调用
 */
(function(){
	//cat类
	function Cat(name){
		this.name = name;
		this.run = function(){
			alert(name +"start run");
			return this;
		}
		this.stopRun = function(){
			alert(name +"stop run");
			return this;
		}
		this.sing = function(){
			alert(name +"start sing");
			return this;
		}
		this.stopSing = function(){
			alert(name +"stop sing");
			return this;
		}		
	}
	//testing
	var c = new Cat("flower");
	c.run().sing().stopSing().stopRun();
	
})()