const { Book } = require("../models/Book");

export class BookRepository {
  constructor() {}
  async findAllBooks() {
    //return books;
    return await Book.query();
  }
  // async getBookByName(name: String) {
  //   return await Book.query().modify("searchByName", name);
  // }
}
