import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CategoriasMiddleware } from './categorias.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class CategoriasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CategoriasMiddleware).forRoutes('categorias')
  }
}
