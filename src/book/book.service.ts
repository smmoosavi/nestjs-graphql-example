import { Injectable } from '@nestjs/common';

const books = [
  {
    id: '1',
    name: 'nestjs',
  },
  {
    id: '2',
    name: 'graphql',
  },
];

@Injectable()
export class BookService {
  getAllBooks() {
    return books;
  }

  getBookById(id: string) {
    return books.find(book => book.id === id);
  }
}
