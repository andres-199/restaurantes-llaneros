import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ReservasMiddleware } from './reservas.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class ReservasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ReservasMiddleware).forRoutes('public/reservas')
  }
}
