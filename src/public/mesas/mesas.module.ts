import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MesasMiddleware } from './mesas.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class MesasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MesasMiddleware).forRoutes('public/mesas')
  }
}
