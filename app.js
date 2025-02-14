class Book {

    id;
    title;
    author;
    isRead;

    constructor (title, author, isRead) {
        this.id = Math.round((Math.random()*1000)+(Math.random()*10000));
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }
}

class Library {
    constructor (bookCount, books){
        this.bookCount = bookCount;
        this.books = books;
    }
    markRead = function (checkBox, id){
       this.books.array.forEach( book => {
            if (book.id == id){
                book.isRead = true;
                checkBox.checked = true;
                checkBox.disabled = true;
            }
       });
    };
    addBook = function (){
       const inputTitle = document.querySelector("#title");
       const inputAuthor =  document.querySelector("#author");
       const bookIsRead = document.querySelector("#isRead");
       const tableBodyElement = document.querySelector("#bookTable");

       const book = new Book(inputTitle.value, inputAuthor.value,bookIsRead.checked);
       this.books.push(book);

       const tr = document.createElement("tr");
       const tdTitle = document.createElement("td");
       tdTitle.textContent = book.title;
       const tdAuthor = document.createElement("td");
       tdAuthor.textContent = book.author;
       const tdIsRead = document.createElement("td");
       tdIsRead.type = "checkbox";

        const inputIsRead = document.createElement("input");
        inputIsRead.type = "checkbox";
        inputIsRead.checked = book.isRead;
        inputIsRead.disabled = true;

       tdIsRead.append(inputIsRead);
       tr.append(tdTitle);
       tr.append(tdAuthor);
       tr.append(tdIsRead);
       tableBodyElement.append(tr);

        this.bookCount++;

        inputTitle.value = "";
        inputAuthor.value = "";
        bookIsRead.checked = false;
}}

const bookLibrary = new Library(1,[new Book("Name of the Wind", "Patrick Rothfuss", true)]);
const newBookForm = document.querySelector("#newBookForm");
newBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bookLibrary.addBook();
});
