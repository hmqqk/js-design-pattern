/**
 * 适配器是为了解决已有接口有的类不兼容的问题
 */
(function(){

	var PcatV1Lib = new Interface("PcatV1Lib",["add"]);
	function plib(){
		this.add = function(x,y){
			return x+y;
		}
		Interface.ensureImplements(this,PcatV1Lib);
	}
	//客户端
	var lib = new plib();
	//调用
	alert(lib.add(10,20));
	
	
	//更换类库,但是前台已经写好的程序不希望有变化
	/*
	var PcatV2 = new Interface("PcatV1Lib",["add"]);
	function p2lib(){
		this.add=function(numberList){
			return eval(numberList.join("+"));
		}
		Interface.ensureImplements(this,PcatV1Lib);
	}
	//客户端
	var lib = new p2lib();
	alert(lib.add(10,20));
	*/

	//添加适配器解决问题
	var warpper = new Interface("PcatV1Lib",["add"]);
	function warpperPcatV2Lib(){
		this.add = function(x,y){
			var arr = new Array();
			arr.push(x);
			arr.push(y);
			return new p2lib().add(arr);
		}
	}
	lib = new warpperPcatV2Lib();
	alert(lib.add(10,20));

})()


