import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TercerosMiddleware } from './terceros.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class TercerosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TercerosMiddleware).forRoutes('public/terceros')
  }
}
