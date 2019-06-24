import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Type,
  Logger,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';

export type Extractor<Args> = (args: Args) => any;

export function LogInterceptor<Args>(extractActionData: Extractor<Args>) {
  @Injectable()
  class MixinInterceptor implements NestInterceptor {
    logger: Logger;

    constructor() {
      this.logger = new Logger('log');
    }
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const ctx = GqlExecutionContext.create(context);
      const args = ctx.getArgs();

      const log = extractActionData(args);
      this.logger.log(log);
      return next.handle();
    }
  }

  return MixinInterceptor as Type<NestInterceptor>;
}
