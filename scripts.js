const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();

  this.info = function(){
    return `${this.title} by ${this.author}, pages ${this.pages}. ${this.read ? "Yes read" : "Not read yet"}`
  };
}

function addBookToLibrary(title, author, pages, read, id) {
  const newBook = new Book(title, author, pages, read, id);

  myLibrary.push(newBook);
}

console.log(myLibrary);

const tableBody = document.querySelector("tBody");


function displayBooks(){
  tableBody.textContent = "";
  
  myLibrary.forEach(book => {
    const bookProperties = [book.title, book.author, book.pages, book.read ? "Yes" : "No"];
    const row = document.createElement("tr");
    const removeBtn = document.createElement("button");
    const removeCell = document.createElement("td");

    bookProperties.forEach(text => {
      const cell = document.createElement("td");

      removeBtn.textContent = "Remove Book";
      removeBtn.setAttribute("type", "submit");
      removeBtn.setAttribute("id", "remove");

      cell.textContent = text;
      removeCell.append(removeBtn);
      row.append(cell, removeCell);
    });

    tableBody.append(row);
  });
}




const toggleBtnOpen = () => {
  const form = document.querySelector("form");

  document.getElementById("show-btn").addEventListener("click", () => {
    if(form.style.display === "none" || form.style.display === ""){
      form.style.display = "block";
    }else{
      form.style.display = "none";
    }
  });
}

toggleBtnOpen();

const formSubmit = () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;

    let trueOrFalse = (read.toLowerCase() === "true");

    addBookToLibrary(title, author, pages, trueOrFalse);
    displayBooks();
  });
}

formSubmit();
