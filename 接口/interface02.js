/**
 * 2.属性检验法
 */
(function(){
	/**
	 * 用注释来定义一个接口
	 * interface PersonDao(){
	 * 	function add(obj);
	 *  function remove(obj);
	 *  function find(id);
	 * }
	 */
	//用注释的方式来实现
	var PersonDaoImpl = function(){
		this.implementInterface = ["PersonDao"];		
	}
	PersonDaoImpl.prototype.add = function(obj){
		//..coding
	}
	PersonDaoImpl.prototype.remove = function(obj){
		//..coding
	}
	PersonDaoImpl.prototype.find = function(id){
		//..coding
	}	
	function addObj(obj){
		var PersonDao = new PersonDaoImpl();
		//开始检查
		if(!impl(PersonDao,"PersonDao")){
			throw new Error("类PersonDaoImpl没有实现接口PersonDao");
		}else{
			PersonDao.add(obj);
		}
	}
	addObj("liuhong");
	/**
	 * 它接受的是一个不定参数
	 */
	function impl(Object){
		//遍历出入对象的属性
		for(var i=1;i<arguments.length;i++){
			var interfaceName = arguments[i];
			var interfaceFound = false;
			for(var j=0;j<Object.implementInterface.length;j++){
				if(Object.implementInterface[j] == interfaceName){
					interfaceFound = true;
					break;
				}
			}
			if(!interfaceFound){
				return false;
			}
		}
		return true;
	}
	
})()