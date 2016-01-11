'use strict';

(function() {

class MainController {

  constructor($scope) {
  	this.$scope = $scope;
    this.canvas = document.getElementById("drawspace");
    this.$scope.spacing=12;
    this.$scope.pointSize=3;
	this.canvasContext = this.canvas.getContext("2d");
	this.xc=this.canvas.width/2;
	this.yc=this.canvas.height/2;
	this.spacing=10;
  }
    //Express a positive number as an orbital number.
    drawValue(){
		this.clear();
		var localNum = this.$scope.drawNum;
		var arraychar = localNum.toString().split('');
		if(arraychar[0]=='-'){
			this.isNegative=true;
			arraychar.shift(1);
		}else
			this.isNegative=false;
		//console.log(arraychar);
		for(var i=0;i<arraychar.length;i++){
			this.drawPoints(arraychar[i],2*i+1);
			if(i<arraychar.length-1){
				this.drawCircle((i*2+2)*this.$scope.spacing,arraychar[i]=='.');
			}
		}
    
    }
    clear() {
    	this.canvasContext.fillStyle="#FFFFFF";
    	this.canvasContext.fillRect(0,0,this.canvas.width,this.canvas.height);
    	this.canvasContext.fillStyle="#000000";
    }

	drawPoints(num,radius){
		if(num==0){}
		else{
			var radcut = this.divideRadians(num);
			for(var i=0;i<num;i++){
				this.drawPoint(this.xc+Math.cos(radcut*i)*this.$scope.spacing*radius,this.yc+Math.sin(radcut*i)*this.$scope.spacing*radius);
			}
		}
	}
	divideRadians(parts){
		if(parts!=0)
			return (2*Math.PI)/parts;
		else
			return 0;
	}
	drawPoint(x,y){
	var ctx = this.canvasContext;
		ctx.beginPath();
		ctx.arc(x,y,this.$scope.pointSize,0,2*Math.PI);
	if(this.isNegative)
		ctx.stroke();
	else
		ctx.fill();
		
	}
	drawCircle(width,isDecimal){
	var ctx = this.canvasContext;
		ctx.beginPath();
		ctx.arc(this.xc,this.yc,width,0,2*Math.PI);
		if(isDecimal){
			ctx.stroke();
			ctx.arc(this.xc,this.yc,width-this.$scope.spacing,0,2*Math.PI);
			ctx.stroke();
			}
		else
			ctx.stroke();
	}

}

angular.module('orbitalApp')
  .controller('MainController', MainController);

})();
