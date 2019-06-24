import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class BookNode {
  @Field(type => ID)
  readonly id: string;
  @Field()
  readonly name: string;
}
