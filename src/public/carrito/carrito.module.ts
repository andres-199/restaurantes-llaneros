import { CommonFunctionsController } from '../../common/common-functions.controller'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { CarritoMiddleware } from './carrito.middleware'
import { CommonModule } from '../../common/common.module'
import { CarritoController } from './carrito.controller'
import { CarritoService } from './carrito.service'

@Module({
  imports: [CommonModule],
  controllers: [CarritoController, CommonFunctionsController],
  providers: [CarritoService]
})
export class CarritoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CarritoMiddleware).forRoutes('carrito')
  }
}
