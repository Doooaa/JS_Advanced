var obj={
data:[{value:1},{value:2}],

pushValue: function(val){ //✔
    if(arguments.length!=1) throw new Error("parmeters is empty or has multi parameters");
    if (this.data.some(function (item) { return item.value === val })) {
        throw new Error(`The value ${val} already exists in the data.`);
    }
    

    if(val>this.data[this.data.length-1].value)
    this.data.push({value:val});  
    else throw new Error("enter value should be large than last value "+
        this.data[this.data.length-1].value);
    
},

popValue: function(){ //✔
    // if(arguments.length!=1) throw new Error("parmeters is empty or has multi parameters");
    if(this.data.length===0) throw new Error("list is empty");
  //  this.data.findIndex(val)
    this.data.pop();
},

dequeue:function() //✔
{
    if(this.data.length===0) throw new Error("list is empty");
    return this.data.shift();
},
enqueue: function (val) { 
    if (arguments.length !== 1) {
        throw new Error("Parameters are empty or multiple parameters provided.");
    }

    if (this.data.some(item => item.value === val)) {
        throw new Error(`The value ${val} already exists in the data.`);
    }

    if (val < this.data[0].value) {
        this.data.unshift({ value: val });
    } else {
        throw new Error("The entered value must be smaller than the smallest value in the data.");
    }

},
display:function() //✔
{
  
  this.data.forEach(element => {
    console.log(element.value);
  });
}
,
insertAtPosition: function (value, position) {
    if (typeof value === "undefined" || typeof position === "undefined") {
        throw new Error("Arguments are missing or invalid.");
    }

    if (this.data.some(function (i) { return i.value === value; })) {
        throw new Error(`The value ${value} already exists in the data.`);
    }
    
      
        if (position === 0 ) {
           this.enqueue(value);
        }
        
        if (position === this.data.length) {
            this.pushValue(value);
        }

    if (position < 0 || position > this.data.length) {
        throw new Error("Position should be between 0 and the size of the list.");
    }

    if (position > 0 && position < this.data.length) {
        if (this.data[position - 1].value < value && this.data[position].value > value) {
            this.data.splice(position, 0, { value: value });
           
        } else {
            throw new Error("Value is not in the valid range for the specified position.");
        }
    }
},

removeByValue:function(value) //✔
{
    if (arguments.length !== 1) {
        throw new Error("Parameters are empty or multiple parameters provided.");
    }
    
    if (this.data.some(function (i) { return i.value !== value; })) {
        throw new Error(`The value ${value} already exists in the data.`);
    }
    
    if(this.data.length===0) throw new Error("arguments is empty");
    this.data = this.data.filter( function (item){ return item.value!== value});
}

};

//h+w*2
obj.pushValue(3);
obj.enqueue(-1);
obj.pushValue(4);
obj.display();

// obj.enqueue(-3);