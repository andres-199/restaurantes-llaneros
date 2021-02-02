import { CommonFunctionsController } from '../../common/common-functions.controller'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { RestaurantesMiddleware } from './restaurantes.middleware'
import { CommonModule } from '../../common/common.module'
import { RestaurantesController } from './restaurantes.controller'
import { RestaurantesService } from './restaurantes.service'

@Module({
  imports: [CommonModule],
  controllers: [RestaurantesController, CommonFunctionsController],
  providers: [RestaurantesService]
})
export class RestaurantesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RestaurantesMiddleware).forRoutes('restaurantes')
  }
}
