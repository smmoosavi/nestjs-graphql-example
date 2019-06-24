import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [GraphqlModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
