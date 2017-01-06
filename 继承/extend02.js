/**
 * 继承
 */
(function(){
	//创建一个Person类
	function Person(name){
		this.name = name;
	}

	/**
	 * 创建Extend函数为了程序中石所有的集成操作
	 */
	function extend(subClass,superClass){
		//初始化一个中间空对象,转换主父类关系
		var F = function(){};
		F.prototype = superClass.prototype;
		//2.让子类继承F
		subClass.prototype = new F();
		subClass.prototype.constructor = subClass;
		//3.为子类增加属性superClass
		subClass.superClass = superClass.prototype;
		//4.增加一个保险,就算你是的原型类是超类(Object) 那么也要把你的构造函数级别降下来
		if(superClass.prototype.constructor == Object.prototype.constructor){
			superClass.prototype.constructor = superClass;
		}
	}
	//测试
	function Author(name,books){
		Author.superClass.constructor.call(this,name);
		this.books = books;
		this.getBook = function(){
			return this.name +" "+ this.books;
		}
	}
	//继承
	extend(Author,Person);
	
	var liuhong = new Author("liuhong","js-design-pattern");

})()












