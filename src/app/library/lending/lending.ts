export class Lending {
    constructor(id: number, borrowerId: number, borrowerFirstName: string, borrowerLastName: string, bookId: number, bookTitle: string, lendingDate: Date, returnDate: Date = null) {
        this.id = id;
        this.borrowerId = borrowerId;
        this.borrowerFirstName = borrowerFirstName;
        this.borrowerLastName = borrowerLastName;
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.lendingDate = lendingDate;
        this.returnDate = returnDate;

    }
    id: number;
    borrowerId: number;
    borrowerFirstName: string;
    borrowerLastName: string;
    bookId: number;
    bookTitle: string;
    lendingDate: Date;
    returnDate: Date;
}
