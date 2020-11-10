import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DireccionesMiddleware } from './direcciones.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class DireccionesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DireccionesMiddleware).forRoutes('direcciones')
  }
}
