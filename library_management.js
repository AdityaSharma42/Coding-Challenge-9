//Task 1: Create a Book Class
class Book { //defining the class
    #isAvailable; //private
    constructor(title, author, ISBN) {
        this.title= title;
        this.author= author;
        this.ISBN= ISBN;
        this.#isAvailable= true;  
    }
    getDetails(){//using the method to return details about the book
        return `The title of the book is ${this.title},and it was written by ${this.author}. The ISBN of the book is ${this.ISBN}.`;
    }
    get isAvailable(){ //getter for availability staus
        return this.#isAvailable;
    }
    set isAvailable(status){ //setter for availability status
        this.#isAvailable= status;
    }
}
//Task 2: Create a Section Class AND Task 5:Handle books borrowing and returning
class Section {
    constructor(name) {
        this.name= name;
        this.books=[]; //empty array for books
    }
    addBook(book){ //method to add a book to the section
        this.books.push(book); //the book is pushed into the books array
    }
    getAvailableBooks(){ //method to count the number of available books in the section
        return this.books.filter(book=> book.isAvailable).length;
    }
    listBooks(){ //method to list the books in the section with their availability
        return this.books.map(book=> `${book.getDetails()}, Available: ${book.isAvailable}`).join(', ');
    }
    calculateTotalBooksAvailable(){
        return this.getAvailableBooks();
    }
}
//Task 3: Create a Patron Class
class Patron{
    constructor(name){
        this.name= name;
        this.borrowedBooks=[];
    }
    borrowBook(book){  //method to borrow a book
        if (book.isAvailable){
            book.isAvailable= false; ///if the book is available, it will be borrowed and then marked as unavailable
            this.borrowedBooks.push(book); //this will add the book to the borrowed books
            console.log (`${this.name} borrowed ${book.title}`);
        } else {
            console.log (`${this.name} could not borrow ${book.title}because it is borrowed by a VIP patron.`);
        }
    }
    returnBook(book){ //method to return a book
        if (this.borrowedBooks.includes(book)){ 
            book.isAvailable=true; //if the book is in the patron's borrowed books, it will be marked as available because the book is being returned
            this.borrowedBooks= this.borrowedBooks.filter(b=> b!==book); //the book will be removed from borrowed books
            console.log(`${this.name} returned ${book.title}`);

        }else{
            console.log (`${this.name} does not have ${book.title}.`);
        }
        
    }
}
//Task 4: Create a VIPPatron Class that inherits from Patron
class VIPPatron extends Patron{
    constructor(name,){
        super (name); //This calls the constructor of the patron class
        
    }
   borrowBook(book){
    if (book.isAvailable){ 
        book.isAvailable=false;
        this.borrowedBooks.push(book); //this will add the book to the borrowed books
        console.log(`${this.name} has priority and borrowed ${book.title}.`);
    }else{
        console.log(`${book.title} is currently borrowed as ${this.name} also borrowed the book and gets it due to priority.`);
       
        this.borrowedBooks.push(book); //The VIP patron is allowed to still borrow the book as they have priority.
        
    }
    }
}
//Task 6: Create and Manage Sections and Patrons
// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Create books
const book1 = new Book("1984", "George Orwell", "0819228742");
const book2 = new Book("Brave New World", "Aldous Huxley", "2844754321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1832949274");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// Create patrons
const regularPatron = new Patron("Rob Slack");
const vipPatron = new VIPPatron("Fanny Tae");

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book (has priority)
vipPatron.borrowBook(book1);

// Return the book
vipPatron.returnBook(book1);

// List books and availability
console.log(fiction.listBooks());
console.log(science.listBooks());

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);

