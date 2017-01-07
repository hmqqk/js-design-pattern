/**
 * 桥梁还可以把多个类进行桥接(链接
 */
(function(){
	
	)
	var class1 = function(a,b){
		this.a = a;
		this.b = b;
	}
	var class2 = function(c){
		this.c = c;
	}
	var bridegClass = function(){
		this.one = new class1(1,2);
		this.two = new class2(45);
	}

})()


