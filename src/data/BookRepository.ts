import Book from "../models/Book";

export class BookRepository {
  constructor() {}
  async findAllBooks() {
    //return books;
    return await Book.query();
  }
  // async getBookByName(name: String) {
  //   return await Book.query().modify("searchByName", name);
  // }
  async addBook(book: Book) {
    return await Book.query().insert(book);
  }
  async editBook(book: Book, bookID: number) {
    return await Book.query().patchAndFetchById(bookID, book);
  }
  async deleteBook(bookID: number) {
    return await Book.query().deleteById(bookID);
  }
}
