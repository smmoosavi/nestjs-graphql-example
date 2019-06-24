import { LogInterceptor } from 'src/utils/log.interceptor';
import { Query, Resolver } from '@nestjs/graphql';
import { createViewer } from '../utils/create-viewer';
import { ViewerNode } from './viewer.node';
import { UseInterceptors } from '@nestjs/common';

@Resolver(of => ViewerNode)
export class ViewerResolver {
  @Query(returns => ViewerNode)
  @UseInterceptors(LogInterceptor(() => `viewer`))
  async viewer() {
    return createViewer();
  }
}
