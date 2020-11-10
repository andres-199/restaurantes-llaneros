import { CommonFunctionsController } from '../../common/common-functions.controller'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { ReservasMesasMiddleware } from './reservas-mesas.middleware'
import { CommonModule } from '../../common/common.module'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController]
})
export class ReservasMesasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ReservasMesasMiddleware).forRoutes('reservas_mesas')
  }
}
