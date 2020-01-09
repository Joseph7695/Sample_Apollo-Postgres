const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const { Book } = require('../models/Book');

export class BookRepository {
  constructor() {

  }
  async findAllBooks() {
    //return books;
    return await Book.query();
  }
  async getBookByName(name: String) {
    // return await Book.query().where({
    //   firstName: name
    // });
    //lastName:
  }
};
