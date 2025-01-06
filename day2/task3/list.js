function listConsructor(start, end, step) {
  this.start = start;
  this.end = end;
  this.step = step;
  var _this = this;
  var data = [];

  var EnterDtatList = function () {
    for (var i = this.start; i <= this.end; i += this.step) {
      data.push({ value: i });
    }
  }.bind(this);

  EnterDtatList();
  this.pushValue = function (val) {
    //✔
    if (arguments.length != 1)
      throw new Error("parmeters is empty or has multi parameters");

    if (val == data[data.length - 1].value + _this.step)
      data.push({ value: val });
    else
      throw new Error(
        "enter value should be large than last value step 2 " +
           data[data.length - 1].value +
          _this.step
      );
  };

  this.popValue = function () {
    //✔
  
    if (data.length === 0) throw new Error("list is empty");

    //  this.data.findIndex(val)
      data.pop();
  };

  this.dequeue = function () //✔
  {
    if (data.length === 0) throw new Error("list is empty");
    return data.shift();
  };

  this.enqueue = function (val) {
    if (arguments.length !== 1) {
      throw new Error("Parameters are empty or multiple parameters provided.");
    }
    //-4   +2= -2 < 0  
    if (val + _this.step <= data[0].value) {
       data.unshift({ value: val });
    } else {
      throw new Error(
        "The entered value must be smaller than the smallest value in the data."
      );
    }
  };
  this.display = function () //✔
  {
    data.forEach((element) => {
      console.log(element.value);
    });
  };
}

var newl = new listConsructor(0, 10, 2);

//h+w*2
// obj.pushValue(3);
// obj.enqueue(-1);
// obj.pushValue(4);
// obj.display();

// obj.enqueue(-3);
