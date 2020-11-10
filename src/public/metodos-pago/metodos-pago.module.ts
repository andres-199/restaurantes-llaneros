import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MetodosPagoMiddleware } from './metodos_pago.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class MetodosPagoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MetodosPagoMiddleware).forRoutes('public/metodos_pago')
  }
}
