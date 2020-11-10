import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { VentasMiddleware } from './ventas.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class VentasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VentasMiddleware).forRoutes('ventas')
  }
}
