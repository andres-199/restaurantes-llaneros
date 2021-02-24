import { CommonFunctionsController } from '../../common/common-functions.controller'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { ReservasMiddleware } from './reservas.middleware'
import { CommonModule } from '../../common/common.module'
import { ReservasService } from './reservas.service'
import { ReservasController } from './reservas.controller'

@Module({
  imports: [CommonModule],
  controllers: [ReservasController, CommonFunctionsController],
  providers: [ReservasService]
})
export class ReservasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ReservasMiddleware).forRoutes('reservas')
  }
}
