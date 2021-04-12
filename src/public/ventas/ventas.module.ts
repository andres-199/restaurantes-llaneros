import { CommonFunctionsController } from '../../common/common-functions.controller'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { VentasMiddleware } from './ventas.middleware'
import { CommonModule } from '../../common/common.module'
import { VentasController } from './ventas.controller'
import { VentasService } from './ventas.service'

@Module({
  imports: [CommonModule],
  controllers: [VentasController, CommonFunctionsController],
  providers: [VentasService]
})
export class VentasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VentasMiddleware).forRoutes('ventas')
  }
}
