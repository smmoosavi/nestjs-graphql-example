import { BookViewerResolver } from './schema/book-viewer.resolver';
import { Module } from '@nestjs/common';
import { BookService } from './book.service';

@Module({
  providers: [BookViewerResolver, BookService],
})
export class BookModule {}
