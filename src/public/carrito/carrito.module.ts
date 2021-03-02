import { CommonFunctionsController } from '../../common/common-functions.controller'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { CarritoMiddleware } from './carrito.middleware'
import { CommonModule } from '../../common/common.module'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController]
})
export class CarritoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CarritoMiddleware).forRoutes('carrito')
  }
}
