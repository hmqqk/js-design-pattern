/**
 * 4.分支单体
 */
(function(){
	//得到机器的分辨率
	var screenWidth = window.screen.width;
	var screenHeight = window.screen.height;
	var portalInfo = (function(){
		var $12801024 = {info:"1,2,3,5"};
		var $1024768 = {info:"4,2,4,6"};
		if(screenWidth == 1280){
			return $12801024;
		}else if(screenWidth == 1024){
			return $1024768; 
		}
	})();
	alert(portalInfo.info)
})()
