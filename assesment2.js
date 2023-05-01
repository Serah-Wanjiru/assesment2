const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];
//Write a JavaScript program that performs the following tasks:
//Create a function called getAvailableBooks that returns an array of all available
//books.
function getAvailableBooks(books) {
    let c=[]
    for (let i = 0; i < books.length; i++) {    
    }
   if (books.isAvailable===true) {
    c.push(books[i])
  
    
   }
   return books
}


console.log(getAvailableBooks(books));

//Create a function getBooksByAuthor that takes an author's name as an argument and
//returns an array of all books by that author.
function getBooksByAuthor(author) {
    for (let x = 0; x < author.length; x++) {
        if (x==="Homer") {    
        }   
    }
    return x
}
console.log(books.author);

//Create a function addNewBook that takes a book object as an argument and adds it
//to the library, ensuring that the new book has all required properties (title, author,
//publicationYear, and isAvailable).
function addNewBook(book) {
    books[book]={
        title:"Born a crime",author:"Trevor Noah",publicationYear:2004,isAvailable:true
    }
    
}
console.log(addNewBook(books));

//Create a function returnBook that takes a book title as an argument and changes the
//book's isAvailable property to true. If the book is not found in the library, the function
//should return a message indicating that the book does not belong to the library.
function returnBook(title) {
    for (let l = 0; l < title.length; l++) {
        if (l.isAvailable===true) {
            return l

            
        }
        else{
            return "The book does not exist"
        }
        
        
    }
    
}
console.log(books.title);