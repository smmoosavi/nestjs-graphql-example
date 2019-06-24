import { ViewerNode } from '../schema/viewer.node';
import { ofType } from './of-type';

export function createViewer() {
  return ofType(ViewerNode)({ id: '0' });
}
