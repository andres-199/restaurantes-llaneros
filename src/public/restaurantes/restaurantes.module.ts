import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RestaurantesMiddleware } from './restaurantes.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class RestaurantesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RestaurantesMiddleware).forRoutes('public/restaurantes')
  }
}
