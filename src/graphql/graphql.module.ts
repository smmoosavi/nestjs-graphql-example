import { Module } from '@nestjs/common';
import {
  GqlModuleOptions,
  GraphQLModule as NestGraphQLModule,
} from '@nestjs/graphql';
import { ViewerResolver } from './schema/viewer.resolver';

@Module({
  imports: [
    NestGraphQLModule.forRootAsync({
      useFactory: (): GqlModuleOptions => ({
        autoSchemaFile: 'schema.graphql',
      }),
    }),
  ],
  providers: [ViewerResolver],
  exports: [NestGraphQLModule],
})
export class GraphqlModule {}
