

function Box(width, height ,length,numberOfBooks=4) 
{

    this.width=width;
    this.height=height;
    this.length=length;
    Box.numberOfBooks=numberOfBooks;
    this.booksList=[];

    this.addBook=function(book)
    {
        if(arguments.length!=1)  throw new Error("enter book");
        Box.numberOfBooks++;
        this.booksList.push(book);
    }
    this.removeBook=function(book)
    {
        if(arguments.length!=1)  throw new Error("enter book");
        Box.numberOfBooks--;
        this.booksList.filter(function(book){
            return book.title!=book;
        })
    }

    this.getCountsOfBooks = function()
    {
        return Box.numberOfBooks;
    }

   


}

Box.prototype.valueOf=function()
{
    return this.booksList.length;
}

Box.prototype.toString=function()
{
    return `Box[width=${this.width}, height=${this.height}, length=${this.length}]}]`;  
}

function Book(title, numofChapters, author, numofPages, publisher, numofCopies)
{

    Object.defineProperties(this,{
      title:{
        value: title,
        writable: false,
        enumerable: true

      } ,
      numofChapters:{
        value: numofChapters,
        writable: false,
        enumerable: false,
        configurable:false,
      } ,
       author:{
        value:author,
        enumerable:false,
        configurable:false,
        writable:false,
       } ,
       numofPages:{
        value: numofPages,
        writable: false,
        enumerable: false,
        configurable:false,
       } ,
       publisher:{
        value:publisher,
        writable: false,
        enumerable: false,
        configurable:false,
       } ,
       numofCopies:{
        value: numofCopies,
        writable: false,
        enumerable: false,
        configurable:false,
       } , })

}

book1= new Book("book1",5,"don gokors",390,"peter honson",3);
book2= new Book("book2",5,"genes gokors",700,"permers honson",4);
book3= new Book("book3",5,"hoko gokors",590,"anton honson",25);


box=new Box(2,3,4,55);
box2=new Box(2,3,4,66);
var t=box+box2;

console.log("box1+box2"+t);
box.addBook(book1);
box.addBook(book2);
box.removeBook("book1");
console.log(box.getCountsOfBooks());