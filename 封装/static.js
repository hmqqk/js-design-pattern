(function(){
	/**
 * ��̬�ĺ���
 */
	function Person(name,age){
		this.name = name;
		this.showName = function(){
			alert(this.name)
		}
	}
	//��һ�־�̬������д��
	Person.add = function(x,y){
		return x+y;
	}
	//�ڶ��ַ�ʽ
	//��������ķ�ʽ���ÿһ������ȫӵ����ͬ�����Ժͷ���
	var cat = (function(){
		//˽�о�̬����
		var AGE = 10;
		//˽�к���
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


