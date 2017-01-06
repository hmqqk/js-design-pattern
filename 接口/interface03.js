/**
 * 3.Ѽʽ���η�:��Ѽ��һ����·���һ�¸½еĶ�������Ѽ��
 * ����֮
 * ������������ӿڶ���ķ������ֵ�ͬ�����з��� ����Ϊʵ�ֱ��ӿ�
 */
(function(){
	//����һ���ӿ���
	var Interface = function(name,methods){
		if(arguments.length != 2){
			alert("interface must have two paramters...");
		}
		this.name = name;
		this.methods = [];
		for (var i = 0; i < methods.length; i++) {
			if(typeof methods[i] != "string"){
				alert("method name must is String ...")
			}else{
				this.methods.push(methods[i])
			}
		}
	}
	//����ӿڵ�һ����̬������ʵ�ֽӿ���ʵ�����ֱ�Ӽ���
	//��̬������Ҫд��Interface.prototype.* ��Ϊ����д���ӿ�ԭ�����ϵ�
	//����̬�ĺ���ֱ��д��������
	Interface.ensureImplements = function(object){
		if(arguments.length<2){
			alert("����������2������");
			return false;
		}
		//����
		for (var i = 1; i < arguments.length; i++) {
			var inter = arguments[i];
			if(inter.constructor != Interface){
				throw new Error("if is interface class must is Interface type");
			}
			for (var j = 0; j < inter.methods.length; j++) {
				var method = inter.methods[j];
				if(!object[method] || typeof object[method] != "function"){
					throw new Error("ʵ���ಢ��û����ȫʵ�ֽӿ��е����з���...");
				}
			}
		}
	}
	//Ӧ��
	var GridMananger = new Interface("GridMananger",["add","remove","list"]);
	var FormMananger = new Interface("FormMananger",["save"])
	
	function commManager(){
		//��ʵ�ַ���
		this.add = function(){
			//coding
		}
		this.remove = function(){
			//coding
			}
		this.list = function(){
			//coding
			}
		this.save = function(){
			//coding
			}
		//����
		Interface.ensureImplements(this,GridMananger,FormMananger)
	}
	var c = new commManager();
	c.add();
	/**
	 * �ӿڵ���Ҫ��
	 * 1.������Ŀ��ߴ��������
	 * 2.�����
	 * 3.���Ŷӿ�����ʱ��,��ʱ��������������֮ǰ�Ϳ���дAPI(�Լ������)
	 */
	
})()



