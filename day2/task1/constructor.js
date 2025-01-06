


function rectangle(width, height) {

    this.width = width
    this.height=height;
    
    var _this=this;

    // _this.alert("rectangle");
    _this.area = function() {
        return _this.width * _this.height;
    }
    _this.perimeter=function(){
        return 2*(_this.width+_this.height);  
    }
    _this.displayInfo=function()
    {
        console.log("display data...");
        console.log(`area: ${_this.area()}`);
        console.log(`area: ${_this.perimeter()}`);
        console.log( `width:${_this.width}`)
        console.log( `height :${_this.height}`)
    }

}


var obj1= new rectangle(10,30)
obj1.displayInfo();
var obj2= new rectangle(50,30);
obj2.displayInfo();
