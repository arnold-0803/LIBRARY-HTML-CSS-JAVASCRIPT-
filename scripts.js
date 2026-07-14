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

const tableBody = document.querySelector("tbody");


function displayBooks(){
  tableBody.textContent = "";
  
  myLibrary.forEach(book => {
    const bookProperties = [book.title, book.author, book.pages, book.read ? "Yes" : "No"];
    const row = document.createElement("tr");

    bookProperties.forEach(text => {
      const cell = document.createElement("td");

      cell.textContent = text;
      row.append(cell);
    });

    const removeBtn = document.createElement("button");
    const removeCell = document.createElement("td");

    removeBtn.textContent = "Remove Book";
    removeBtn.setAttribute("type", "button");
    removeBtn.setAttribute("id", "remove");

    removeBtn.addEventListener("click", () => {
      const bookId = myLibrary.findIndex(b => b.id === book.id);
      
      if(bookId > -1){
        myLibrary.splice(bookId, 1);
      }
      displayBooks();
    });

    removeCell.append(removeBtn);
    row.append(removeCell);
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
    const read = document.querySelector("#read").checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();
  });
}

formSubmit();
