

function Box(width, height ,length) 
{

    this.width=width;
    this.height=height;
    this.length=length;
    Box.numberOfBooks=0;
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



function Book(title, numofChapters, author, numofPages, publisher, numofCopies)
{

    this.title=title;
    this.numofChapters=numofChapters;
    this.author=author;
    this.numofPages=numofPages;
    this.publisher=publisher;
    this.numofCopies=numofCopies;

}

book1= new Book("book1",5,"don gokors",390,"peter honson",3);
book2= new Book("book2",5,"genes gokors",700,"permers honson",4);
book3= new Book("book3",5,"hoko gokors",590,"anton honson",25);


box=new Box(2,3,4);

box.addBook(book1);
box.addBook(book2);
box.removeBook("book1");
console.log(box.getCountsOfBooks());