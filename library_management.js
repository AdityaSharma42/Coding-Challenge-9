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
