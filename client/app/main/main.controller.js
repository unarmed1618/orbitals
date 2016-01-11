'use strict';

(function() {

class MainController {

  constructor($scope) {
  	this.$scope = $scope;
    this.canvas = document.getElementById("drawspace");
	this.canvasContext = this.canvas.getContext("2d");
	this.xc=this.canvas.width/2;
	this.yc=this.canvas.height/2;
	this.spacing=12;
  }
    //Express a positive number as an orbital number.
    drawValue(){
		this.clear();
		var localNum = this.$scope.drawNum;
		var arraychar = localNum.toString().split('');
		//console.log(arraychar);
		for(var i=0;i<arraychar.length;i++){
			this.drawPoints(arraychar[i],2*i+1);
			if(i<arraychar.length-1){
				this.drawCircle((i*2+2)*this.spacing);
			}
		}
    
    }
    clear() {
    	this.canvasContext.fillStyle="#FFFFFF";
    	this.canvasContext.fillRect(0,0,this.canvas.width,this.canvas.height);
    	this.canvasContext.fillStyle="#000000";
    }

	drawPoints(num,radius){
		//console.log("Attempting to draw " +num+ " points.");
		if(num==0){}
		//else if(num==1)
		//{this.drawPoint(this.xc,this.yc)}
		else{
			var radcut = this.divideRadians(num);
			for(var i=0;i<num;i++){
				this.drawPoint(this.xc+Math.cos(radcut*i)*this.spacing*radius,this.yc+Math.sin(radcut*i)*this.spacing*radius);
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
	//console.log("Drawing a point at "+x+", "+y+".");
	var ctx = this.canvasContext;
		ctx.beginPath();
		ctx.arc(x,y,3,0,2*Math.PI);
		ctx.fill();
	}
	drawCircle(width){
	var ctx = this.canvasContext;
		ctx.beginPath();
		ctx.arc(this.xc,this.yc,width,0,2*Math.PI);
		ctx.stroke();
	}

}

angular.module('orbitalApp')
  .controller('MainController', MainController);

})();
