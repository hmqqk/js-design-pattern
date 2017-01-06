/**
 * 1.注释方法:用注释来定义一个接口
 * (1).规范和标准
 * (2).代码的设计和架构流出足够时间
 * (3).缺点:认为上的遵守
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
	//注释的方式来实现
	/**
	 * PersonDaoImpl implement interface PersonDao
	 */
	var PersonDaoImpl = function(){
		
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

})()



