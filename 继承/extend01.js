/**
 * 继承
 */
(function(){
	//创建一个Person类
	function Person(name){
		this.name = name;
	}
	//创建教师类
	function Teacher(name,books){
		//相当于java中的super函数
		Person.call(this,name);
		this.books = books;
	}
	//老师类继承人员类
	Teacher.prototype = new Person();
	Teacher.prototype.constructor = Teacher;
	Teacher.prototype.getBook = function(){
		return this.name +" "+ this.books;
	}
	//testing
	var liuhong = new Teacher("liuhong","js-design-pattern");

})()












