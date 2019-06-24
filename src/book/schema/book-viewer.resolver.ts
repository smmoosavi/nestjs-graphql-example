import { BookService } from '../book.service';
import { Args, ResolveProperty, Resolver } from '@nestjs/graphql';
import { ViewerNode } from 'src/graphql/schema/viewer.node';
import { BookNode } from './book.node';

@Resolver(of => ViewerNode)
export class BookViewerResolver {
  constructor(private readonly bookService: BookService) {}

  @ResolveProperty('book', returns => BookNode, { nullable: true })
  async book(@Args('id') id: string) {
    return this.bookService.getBookById(id);
  }

  @ResolveProperty('books', returns => [BookNode])
  async books() {
    return this.bookService.getAllBooks();
  }
}
