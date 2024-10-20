//Task 1
class Book {
    constructor(title, author, ISBN) {
        this.title= title;
        this.author= author;
        this.ISBN= ISBN;
        this._isAvailable= true;  
    }
    getDetails(){
        return `The title of the book is ${this.title},and it was written by ${this.author}. The ISBN of the book is ${this.ISBN}.`;
    }
    get isAvailable(){
        return this._isAvailable;
    }
    set isAvailable(status){
        this._isAvailable= status;
    }
}
//Task 2 AND Task 5
class Section {
    constructor(name) {
        this.name= name;
        this.books=[];
    }
    addBook(book){
        this.books.push(book)
    }
    getAvailableBooks(){
        return this.books.filter(book=> book.isAvailable).length;
    }
    listBooks(){
        return this.books.map(book=> `${book.getDetails()}, Available: ${book._isAvailable}`);
    }
    calculateTotalBooksAvailable(){
        return this.getAvailableBooks();
    }
}
