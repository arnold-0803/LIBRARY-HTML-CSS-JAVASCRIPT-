const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function(){
    return `${this.title} by ${this.author}, pages ${this.pages}. ${this.read ? "Yes read" : "Not read yet"}`
  };
}

function addBookToLibrary(title, author, pages, read, id) {
  const newBook = new Book(title, author, pages, read, id);
  
  myLibrary.push(newBook);
}

addBookToLibrary("Hobbit", "A.K.Doe", "600", "Yes");

console.log(myLibrary);

const table = document.querySelector("table");
const row = document.querySelector(".table-row");


function displayBooks(){
  myLibrary.forEach(book => {
    const bookProperties = [book.title, book.author, book.pages, book.read];

    bookProperties.forEach(text => {
      const cell = document.createElement("td");

      cell.textContent = text;
      row.append(cell);
    });

    table.append(row);
  });
}

displayBooks();

// const tableBody = document.querySelector(".table-body");

// const displayBooks = () => {
//   tableBody.innerHTML = "";

//   myLibrary.forEach(book => {
//     const row = document.createElement("tr");

//     const bookPropertie = [book.title, book.author, book.pages, book.read];

//     bookPropertie.forEach(text => {
//       const cell = document.createElement("td");
//       cell.textContent = text;
//       row.append(cell);
//     });

//     tableBody.append(row);
//   });
// }

// displayBooks();
