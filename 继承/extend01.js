/**
 * �̳�
 */
(function(){
	//����һ��Person��
	function Person(name){
		this.name = name;
	}
	//������ʦ��
	function Teacher(name,books){
		//�൱��java�е�super����
		Person.call(this,name);
		this.books = books;
	}
	//��ʦ��̳���Ա��
	Teacher.prototype = new Person();
	Teacher.prototype.constructor = Teacher;
	Teacher.prototype.getBook = function(){
		return this.name +" "+ this.books;
	}
	//testing
	var liuhong = new Teacher("liuhong","js-design-pattern");

})()












