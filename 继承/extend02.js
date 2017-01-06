/**
 * �̳�
 */
(function(){
	//����һ��Person��
	function Person(name){
		this.name = name;
	}

	/**
	 * ����Extend����Ϊ�˳�����ʯ���еļ��ɲ���
	 */
	function extend(subClass,superClass){
		//��ʼ��һ���м�ն���,ת���������ϵ
		var F = function(){};
		F.prototype = superClass.prototype;
		//2.������̳�F
		subClass.prototype = new F();
		subClass.prototype.constructor = subClass;
		//3.Ϊ������������superClass
		subClass.superClass = superClass.prototype;
		//4.����һ������,�������ǵ�ԭ�����ǳ���(Object) ��ôҲҪ����Ĺ��캯����������
		if(superClass.prototype.constructor == Object.prototype.constructor){
			superClass.prototype.constructor = superClass;
		}
	}
	//����
	function Author(name,books){
		Author.superClass.constructor.call(this,name);
		this.books = books;
		this.getBook = function(){
			return this.name +" "+ this.books;
		}
	}
	//�̳�
	extend(Author,Person);
	
	var liuhong = new Author("liuhong","js-design-pattern");

})()












