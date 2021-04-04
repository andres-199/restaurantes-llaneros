import { CommonFunctionsController } from '../../common/common-functions.controller'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { RestaurantesMetodosPagoMiddleware } from './restaurantes-metodos-pago.middleware'
import { CommonModule } from '../../common/common.module'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController]
})
export class RestaurantesMetodosPagoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RestaurantesMetodosPagoMiddleware)
      .forRoutes('restaurantes-metodos-pago')
  }
}
