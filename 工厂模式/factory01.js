/**
 * 1.简单工厂
 */
(function(){

	var PetShop = function(){};//宠物商店
	PetShop.prototype = {
	  //出售宠物的方法
	  sellPetShop: function(kind) {
	    var pet;
		//kind 种类
	    switch(kind) {
	      case 'dog':
	        pet = new Dog();
	        break;
	      case 'cat':
	        pet = new Cat();
	        break;
	      case 'pig':
	        pet = new Pig();
	        break;	      
	      default:
	      	//鸟
	        pet = new Bird();
	    }
	    Interface.ensureImplements(pet, Pet);
	    pet.eat();//吃顿饱饭
	    pet.register();//宠物登记
	    return pet;
	  }
	};
	var Pet = new Interface("Dog",["eat","register","run","sing"]);
	function BasePet(){//宠物基础类
		this.register = function(){
			document.write("宠物登记...<br>")
		}
		this.eat = function(){
			document.write("吃吨饱饭...<br>")
		}		
	}
	//实现
	function Dog(){
		Dog.superclass.constructor.call(this)
		this.run = function(){
			document.write("小狗跑步...<br>")
		}
		this.sing = function(){
			document.write("小狗唱歌...<br>")
		}		
	}
	function Pig(){
		Pig.superclass.constructor.call(this)
		this.run = function(){
			document.write("小猪跑步...<br>")
		}
		this.sing = function(){
			document.write("小猪唱歌...<br>")
		}		
	}
	function Cat(){
		Cat.superclass.constructor.call(this)
		this.run = function(){
			document.write("小猫跑步...<br>")
		}
		this.sing = function(){
			document.write("小猫唱歌...<br>")
		}		
	}
	function Bird(){
		Bird.superclass.constructor.call(this)
		this.run = function(){
			document.write("小鸟跑步...<br>")
		}
		this.sing = function(){
			document.write("小鸟唱歌...<br>")
		}		
	}
	//继承
	extend(Dog,BasePet);
	extend(Pig,BasePet);
	extend(Cat,BasePet);
	extend(Bird,BasePet);
	//pcat宠物店
	var PcatPetShop = new PetShop();
	var flowerPig = PcatPetShop.sellPetShop("pig");
	flowerPig.run();//跑步

	document.write("-----------------------------------------------------<br>")
	//静态工厂
	var PetFactory = {
	  sellPetShop: function(kind) {
	    var pet;
	    /**
	     * kind 种类
	     */
	    switch(kind) {
	      case 'dog':
	        pet = new Dog();
	        break;
	      case 'cat':
	        pet = new Cat();
	        break;
	      case 'pig':
	        pet = new Pig();
	        break;	      
	      default:
	      	//鸟
	        pet = new Bird();
	    }
	    Interface.ensureImplements(pet, Pet);
	    return pet;
	  }
	};	
	//利用工厂的新的商店
	var PetShop2 = function(){};//宠物商店
	PetShop2.prototype = {
	  //利用工厂改造
	  sellPetShop: function(kind) {
	  	 var pet = PetFactory.sellPetShop(kind)
	     pet.eat();//吃顿饱饭
	     pet.register();//宠物登记
	     return pet;	  	 
	  }
	};	
	var PcatPetShop2 = new PetShop2();
	var flowerCat = PcatPetShop2.sellPetShop("cat");
	flowerCat.sing();

})()






















