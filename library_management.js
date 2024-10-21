//Task 1
class Book {
    #isAvailable;
    constructor(title, author, ISBN) {
        this.title= title;
        this.author= author;
        this.ISBN= ISBN;
        this.#isAvailable= true;  
    }
    getDetails(){
        return `The title of the book is ${this.title},and it was written by ${this.author}. The ISBN of the book is ${this.ISBN}.`;
    }
    get isAvailable(){
        return this.#isAvailable;
    }
    set isAvailable(status){
        this.#isAvailable= status;
    }
}
//Task 2 AND Task 5
class Section {
    constructor(name) {
        this.name= name;
        this.books=[];
    }
    addBook(book){
        this.books.push(book);
    }
    getAvailableBooks(){
        return this.books.filter(book=> book.isAvailable).length;
    }
    listBooks(){
        return this.books.map(book=> `${book.getDetails()}, Available: ${book.isAvailable}`).join(', ');
    }
    calculateTotalBooksAvailable(){
        return this.getAvailableBooks();
    }
}
//Task 3
class Patron{
    constructor(name){
        this.name= name;
        this.borrowedBooks=[];
    }
    borrowBook(book){
        if (book.isAvailable){
            book.isAvailable= false;
            this.borrowedBooks.push(book);
            console.log (`${this.name} borrowed ${book.title}`);
        } else {
            console.log (`${this.name} could not borrow ${book.title}because it is borrowed by a VIP patron.`);
        }
    }
    returnBook(book){
        if (this.borrowedBooks.includes(book)){
            book.isAvailable=true;
            this.borrowedBooks= this.borrowedBooks.filter(b=> b!==book);
            console.log(`${this.name} returned ${book.title}`);

        }else{
            console.log (`${this.name} does not have ${book.title}.`);
        }
        
    }
}
//Task 4
class VIPPatron extends Patron{
    constructor(name,){
        super (name);
        
    }
   borrowBook(book){
    if (book.isAvailable){
        book.isAvailable=false;
        this.borrowedBooks.push(book);
        console.log(`${this.name} has priority and borrowed ${book.title}.`);
    }else{
        console.log(`${book.title} is currently borrowed as ${this.name} also borrowed the book and gets it due to priority.`);
       
        this.borrowedBooks.push(book);
        
    }
    }
}

