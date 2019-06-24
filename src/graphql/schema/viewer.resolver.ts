import { Query, Resolver } from '@nestjs/graphql';
import { createViewer } from '../utils/create-viewer';
import { ViewerNode } from './viewer.node';

@Resolver(of => ViewerNode)
export class ViewerResolver {
  @Query(returns => ViewerNode)
  async viewer() {
    return createViewer();
  }
}
