(function(){
	/**
 * 静态的函数
 */
	function Person(name,age){
		this.name = name;
		this.showName = function(){
			alert(this.name)
		}
	}
	//第一种静态函数的写法
	Person.add = function(x,y){
		return x+y;
	}
	//第二种方式
	//用类中类的方式完成每一个对象全拥有相同的属性和方法
	var cat = (function(){
		//私有静态属性
		var AGE = 10;
		//私有函数
		function add(x,y){
			return x+y;
		}
		return function(){
			this.AGE = AGE;
			this.add = function(x,y){
				return add(x,y)
			}
		}
	})()
	//testing
	alert(new cat().add(1,2)+"  "+new cat().AGE);
	alert(new cat().AGE);

})()


