const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;

  this.info = function(){
    return `${this.title} by ${this.author}, pages ${this.pages}. ${this.read ? "Yes read" : "Not read yet"}`
  };
}

function addBookToLibrary(title, author, pages, read, id) {
  const newBook = new Book(title, author, pages, read, id);
  
  myLibrary.push(newBook);
}

addBookToLibrary();

console.log(myLibrary);

