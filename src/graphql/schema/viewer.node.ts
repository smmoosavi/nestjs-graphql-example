import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class ViewerNode {
  @Field(type => ID)
  readonly id: string;
}
