/**
 *桥接模式：将抽象与实现隔离开来,以便两者单独的变化
 */
(function(){
	
	
	function getPetByName(id,callBack){
		sayncRquest("GET",'pet.action?id='+id,function(pet){
			callBack(pet)
		})
	}	
	//定义一个桥梁实现抽象和实现相互联系在一起
	addEvent(element,"click",getPetByNameBridge)
	
	function getPetByNameBridge(){
		getPetByName(this.id,function(pet){
			console.log("request pet"+pet.responseText);
		})
	}
	
})()