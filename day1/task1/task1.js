
newObj=
  {  
    id: "SD-10",  
    location: "SV",  
     addr: "123str",

     createGetSet:function(){//this to refere to the person
      Object.keys(this).forEach(element  => {
         if(typeof this[element]!=="function")
            {
               this[`get${element.substring(0,1).toLocaleUpperCase()+element.substring(1)}`]=
               function()
               {
                return this[element];
               }

               this[`set${element.substring(0,1).toLocaleUpperCase()+element.substring(1)}`]=
               function(value)
               {
                this[element]=value;
               }
            } 
       });

     }



}


var x=newObj.id;
console.log(x);



// newObj.createGetSet();
// //x.getId();
// console.log(newObj.getId());

// newObj.setId("SD-11");

// console.log(newObj.getId());


// var person = {
//   name: "Alice",
//   age: 25
// };


// newObj.createGetSet.call( person);


// console.log(person.getName()); // Output: Alice
// person.setName("Bob");
// console.log(person.getName()); // Output: Bob
// console.log(person.age); // Output: 25


