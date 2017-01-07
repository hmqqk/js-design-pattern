/**
 * 2.复杂工厂
 */
(function(){
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
	extend(Dog,BasePet);//某一动物类要实现对基础类的继承
	extend(Pig,BasePet);
	extend(Cat,BasePet);
	extend(Bird,BasePet);
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
	//1.把核心商店类编程抽象类
	var PetShop = function(){};//宠物商店
	PetShop.prototype = {
	  //利用工厂改造
	  sellPetShop: function(kind) {
	  	 var pet = this.sellPetShop(kind)//调用本类方法
	     pet.eat();//吃顿饱饭
	     pet.register();//宠物登记
	     return pet;	  	 
	  },
	  //本类不能实例化
	  sellPetShop: function(model) {
	    throw new Error('this is a abstract class.');
	  }	  
	};	
	//2.利用子类来满足需求的扩展
	var OnePetShop = function() {};
	extend(OnePetShop, PetShop);
	OnePetShop.prototype.sellPetShop = function(kind) {
	   var pet;
	    switch(kind) {
	      case 'dog':
	        pet = new Dog();
	        break;
	      case 'cat':
	        pet = new Cat();
	        break;	      
	      default:
	        pet = new Bird();
	    }
	    Interface.ensureImplements(pet, Pet);
	    pet.eat();//吃顿饱饭
	    pet.register();//宠物登记	    
	    return pet;
	};
	//再开一个店
	var twoPetShop = function() {};
	extend(twoPetShop, PetShop);
	//复写父类方法
	twoPetShop.prototype.sellPetShop = function(kind) {
	   var pet;
	    switch(kind) {
	      case 'pig':
	        pet = new Cat();
	        break;	      
	      default:
	        pet = new Bird();
	    }
	    Interface.ensureImplements(pet, Pet);
	    pet.eat();//吃顿饱饭
	    pet.register();//宠物登记	    
	    return pet;
	};
	//试验
	var dog = new OnePetShop();
	dog.sellPetShop("dog");
})()









