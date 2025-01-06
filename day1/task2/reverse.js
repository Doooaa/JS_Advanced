
function reverse1()
{
    func=[].reverse.bind(arguments);
  
//    console.log(len);
//    str.substring(0,len).apply(arr,arr.reverse);
console.log(func());
}



function reverse2() {
    var len = arguments.length;
    var arr = Array.from(arguments);
    var reversedStr = arr.reverse().join(","); 
    console.log("Length:", len);
    console.log("Reversed String:", reversedStr);
}
reverse1(1,2,3,4,7);
reverse2(1,2,3,4,5);


// Outputs: [5,4,3,2,1]



