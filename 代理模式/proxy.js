/**
 * 代理模式
 */
(function(){
	var bookShop= new Interface("bookShop",[
		"addBook","findBook","chechBook","returnBook"
	])
	//图书类
	var Book = function(bid,bName,bPrice){
		this.bid = bid;
		this.bName = bName;
		this.bPrice = bPrice;
	}
	//目标类
	var myBookShop = (function(){
		var books = {};
		return function(bks){
			alert("这时候再初始化本类")
			if(typeof bks == "object"){
				books = bks;
			}
			//加书
			this.addBook = function(book){
				books[book.bid] = book;
			
			}
			//找书
			this.findBook = function(bid){
				if(books[bid]){
					return books[bid];
				}else{
					return null;
				}
			}
			//还书
			this.returnBook = function(book){
				this.addBook(book);
			}
			//借书
			this.chechBook = function(bid){
				var book = this.findBook(bid);
				return book;
			}
		}
	})();
	//普通代理
	var myBookShopProxy = function(bks){
		//先设为空，该需要该对象的时候才会创建
		var obj = null;
		this._init = function(){
			obj = new myBookShop(bks);
		}
			//加书
			this.addBook = function(book){
				this._init();
				obj.addBook(book)
			}
			//找书
			this.findBook = function(bid){
				this._init();
				return obj.findBook(bid);
			}
			//还书
			this.returnBook = function(book){
				this._init();
				obj.returnBook(book);
			}
			//借书
			this.chechBook = function(bid){
				this._init();
				return obj.chechBook(bid);
			}		
	}
	var proxy = new myBookShopProxy({
		"001":new Book("001","EXTJS","45"),
		"002":new Book("002","JS","60")
	})
	alert(proxy.chechBook("001").bName)

})()




