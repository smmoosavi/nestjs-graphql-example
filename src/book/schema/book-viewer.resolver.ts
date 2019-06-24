import { BookService } from '../book.service';
import { Args, ResolveProperty, Resolver } from '@nestjs/graphql';
import { ViewerNode } from 'src/graphql/schema/viewer.node';
import { BookNode } from './book.node';
import { UseInterceptors } from '@nestjs/common';
import { LogInterceptor } from 'src/utils/log.interceptor';

@Resolver(of => ViewerNode)
export class BookViewerResolver {
  constructor(private readonly bookService: BookService) {}

  @ResolveProperty('book', returns => BookNode, { nullable: true })
  @UseInterceptors(LogInterceptor((args: { id: string }) => `book(${args.id})`))
  async book(@Args('id') id: string) {
    return this.bookService.getBookById(id);
  }

  @ResolveProperty('books', returns => [BookNode])
  @UseInterceptors(LogInterceptor(() => `books`))
  async books() {
    return this.bookService.getAllBooks();
  }
}
